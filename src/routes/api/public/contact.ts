import * as React from 'react'
import { render as renderAsync } from '@react-email/components'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'
import { supabaseAdmin } from '@/integrations/supabase/client.server'
import { TEMPLATES } from '@/lib/email-templates/registry'

const SENDER_DOMAIN = 'notify.moblicode.com'
const FROM_DOMAIN = 'moblicode.com'
const SITE_NAME = 'Moblicode'
const TEMPLATE_NAME = 'contact-inquiry'

const ContactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(30).optional().default(''),
  company: z.string().trim().max(120).optional().default(''),
  service: z.string().trim().max(40).optional().default(''),
  budget: z.string().trim().max(60).optional().default(''),
  message: z.string().trim().min(1).max(5000),
  // honeypot — bots fill this; humans don't see it
  website: z.string().max(0).optional(),
})

function generateToken(): string {
  const bytes = new Uint8Array(32)
  crypto.getRandomValues(bytes)
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, '0')).join('')
}

export const Route = createFileRoute('/api/public/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let parsed
        try {
          const body = await request.json()
          parsed = ContactSchema.safeParse(body)
        } catch {
          return Response.json({ error: 'Invalid JSON' }, { status: 400 })
        }

        if (!parsed.success) {
          return Response.json(
            { error: 'Validation failed', issues: parsed.error.flatten() },
            { status: 400 },
          )
        }

        // Honeypot triggered → pretend success, do nothing
        if (parsed.data.website) {
          return Response.json({ success: true })
        }

        const data = parsed.data
        const template = TEMPLATES[TEMPLATE_NAME]
        if (!template) {
          console.error('Contact template missing')
          return Response.json({ error: 'Server misconfigured' }, { status: 500 })
        }

        const recipient = template.to!
        const normalizedRecipient = recipient.toLowerCase()
        const messageId = crypto.randomUUID()

        // Ensure an unsubscribe token exists for the recipient (required by send pipeline)
        const { data: existingToken } = await supabaseAdmin
          .from('email_unsubscribe_tokens')
          .select('token')
          .eq('email', normalizedRecipient)
          .maybeSingle()

        let unsubscribeToken = existingToken?.token
        if (!unsubscribeToken) {
          unsubscribeToken = generateToken()
          await supabaseAdmin
            .from('email_unsubscribe_tokens')
            .upsert(
              { token: unsubscribeToken, email: normalizedRecipient },
              { onConflict: 'email', ignoreDuplicates: true },
            )
          const { data: stored } = await supabaseAdmin
            .from('email_unsubscribe_tokens')
            .select('token')
            .eq('email', normalizedRecipient)
            .maybeSingle()
          if (stored?.token) unsubscribeToken = stored.token
        }

        // Render
        const element = React.createElement(template.component, data)
        const html = await renderAsync(element)
        const plainText = await renderAsync(element, { plainText: true })
        const subject =
          typeof template.subject === 'function' ? template.subject(data) : template.subject

        // Log pending
        await supabaseAdmin.from('email_send_log').insert({
          message_id: messageId,
          template_name: TEMPLATE_NAME,
          recipient_email: recipient,
          status: 'pending',
        })

        const { error: enqueueError } = await supabaseAdmin.rpc('enqueue_email', {
          queue_name: 'transactional_emails',
          payload: {
            message_id: messageId,
            to: recipient,
            reply_to: data.email,
            from: `${SITE_NAME} <noreply@${FROM_DOMAIN}>`,
            sender_domain: SENDER_DOMAIN,
            subject,
            html,
            text: plainText,
            purpose: 'transactional',
            label: TEMPLATE_NAME,
            idempotency_key: messageId,
            unsubscribe_token: unsubscribeToken,
            queued_at: new Date().toISOString(),
          },
        })

        if (enqueueError) {
          console.error('Failed to enqueue contact email', { error: enqueueError })
          await supabaseAdmin.from('email_send_log').insert({
            message_id: messageId,
            template_name: TEMPLATE_NAME,
            recipient_email: recipient,
            status: 'failed',
            error_message: 'Failed to enqueue',
          })
          return Response.json({ error: 'Failed to send' }, { status: 500 })
        }

        return Response.json({ success: true })
      },
    },
  },
})
