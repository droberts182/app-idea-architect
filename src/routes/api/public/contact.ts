import { createFileRoute } from '@tanstack/react-router'
import { handleContactRequest } from '@/lib/contact-email.server'

export const Route = createFileRoute('/api/public/contact')({
  server: {
    handlers: {
      POST: async ({ request }) => handleContactRequest(request),
    },
  },
})
