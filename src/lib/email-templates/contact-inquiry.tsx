import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import * as React from 'react'
import type { TemplateEntry } from './registry'

interface ContactInquiryProps {
  name?: string
  email?: string
  phone?: string
  company?: string
  service?: string
  budget?: string
  message?: string
}

function ContactInquiryEmail({
  name = 'Visitor',
  email = 'unknown@example.com',
  phone = '—',
  company = '—',
  service = '—',
  budget = '—',
  message = '',
}: ContactInquiryProps) {
  return (
    <Html>
      <Head />
      <Preview>New project inquiry from {name}</Preview>
      <Body style={{ backgroundColor: '#ffffff', fontFamily: 'Helvetica, Arial, sans-serif', margin: 0, padding: 0 }}>
        <Container style={{ maxWidth: 600, margin: '0 auto', padding: '32px 24px' }}>
          <Heading style={{ fontSize: 22, color: '#0d0d0d', margin: '0 0 8px' }}>
            New project inquiry
          </Heading>
          <Text style={{ color: '#666', fontSize: 14, margin: '0 0 24px' }}>
            Submitted via moblicode.com — contact form
          </Text>

          <Section>
            <Row label="Name" value={name} />
            <Row label="Email" value={email} />
            <Row label="Phone" value={phone} />
            <Row label="Company" value={company} />
            <Row label="Service" value={service} />
            <Row label="Budget" value={budget} />
          </Section>

          <Hr style={{ borderColor: '#e5e5e5', margin: '24px 0' }} />

          <Heading as="h2" style={{ fontSize: 16, color: '#0d0d0d', margin: '0 0 8px' }}>
            Message
          </Heading>
          <Text style={{ color: '#1a1a1a', fontSize: 14, lineHeight: '22px', whiteSpace: 'pre-wrap', margin: 0 }}>
            {message || '—'}
          </Text>

          <Hr style={{ borderColor: '#e5e5e5', margin: '32px 0 16px' }} />
          <Text style={{ color: '#999', fontSize: 12, margin: 0 }}>
            Reply directly to {email} to respond.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <Text style={{ margin: '0 0 6px', fontSize: 14, color: '#1a1a1a' }}>
      <strong style={{ color: '#0d0d0d' }}>{label}:</strong> {value}
    </Text>
  )
}

export const template = {
  component: ContactInquiryEmail,
  subject: (data: Record<string, any>) =>
    `New project inquiry — ${data?.name || 'Website visitor'}${data?.company ? ` (${data.company})` : ''}`,
  displayName: 'Contact form inquiry',
  to: 'support@moblicode.com',
  previewData: {
    name: 'Jane Doe',
    email: 'jane@example.com',
    phone: '555-1234',
    company: 'Acme Co',
    service: 'ios',
    budget: '$25k–$50k',
    message: 'We need an iOS app for our logistics team. Looking to start next month.',
  },
} satisfies TemplateEntry
