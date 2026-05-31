import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/unsubscribe')({
  head: () => ({
    meta: [
      { title: 'Unsubscribe — Moblicode' },
      { name: 'robots', content: 'noindex' },
    ],
  }),
  component: UnsubscribePage,
})

function UnsubscribePage() {
  const [state, setState] = useState<'loading' | 'ready' | 'done' | 'invalid' | 'already' | 'error'>('loading')
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const t = params.get('token')
    if (!t) { setState('invalid'); return }
    setToken(t)
    fetch(`/email/unsubscribe?token=${encodeURIComponent(t)}`)
      .then((r) => r.json())
      .then((j) => {
        if (j.valid) setState('ready')
        else if (j.reason === 'already_unsubscribed') setState('already')
        else setState('invalid')
      })
      .catch(() => setState('error'))
  }, [])

  async function confirm() {
    if (!token) return
    setState('loading')
    try {
      const r = await fetch('/email/unsubscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
      const j = await r.json()
      if (j.success) setState('done')
      else if (j.reason === 'already_unsubscribed') setState('already')
      else setState('error')
    } catch {
      setState('error')
    }
  }

  return (
    <section className="container-page py-24">
      <div className="mx-auto max-w-md text-center">
        <h1>Unsubscribe</h1>
        {state === 'loading' && <p className="mt-4 text-muted-foreground">Loading…</p>}
        {state === 'invalid' && <p className="mt-4 text-muted-foreground">This unsubscribe link is invalid or expired.</p>}
        {state === 'already' && <p className="mt-4 text-muted-foreground">You're already unsubscribed.</p>}
        {state === 'error' && <p className="mt-4 text-muted-foreground">Something went wrong. Please try again later.</p>}
        {state === 'ready' && (
          <>
            <p className="mt-4 text-muted-foreground">Confirm you'd like to stop receiving emails from Moblicode.</p>
            <button
              onClick={confirm}
              className="mt-6 inline-flex h-11 items-center rounded-md bg-accent px-6 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              Confirm unsubscribe
            </button>
          </>
        )}
        {state === 'done' && <p className="mt-4 text-muted-foreground">You've been unsubscribed. Sorry to see you go.</p>}
      </div>
    </section>
  )
}
