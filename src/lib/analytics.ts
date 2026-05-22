// Lightweight analytics layer for Moblicode.
// - GA4 (gtag) loads only if VITE_GA_MEASUREMENT_ID is set
// - All events go through trackEvent() / trackLead()
// - No-ops cleanly on the server and when no GA ID is configured

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

export const GA_ID =
  (import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined) ?? "";

export function initAnalytics() {
  if (typeof window === "undefined" || !GA_ID) return;
  if (window.gtag) return; // already initialized

  // Inject gtag.js
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag as typeof window.gtag;
  window.gtag("js", new Date());
  window.gtag("config", GA_ID, {
    send_page_view: true,
    anonymize_ip: true,
  });
}

export function trackPageview(path: string) {
  if (typeof window === "undefined" || !window.gtag || !GA_ID) return;
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: window.location.href,
  });
}

export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || !window.gtag) {
    // Fall back to console for dev visibility
    if (typeof console !== "undefined") {
      console.info("[analytics:noop]", name, params);
    }
    return;
  }
  window.gtag("event", name, params);
}

// Canonical lead tracking event. Fired from the contact form on submit.
// `value` is the estimated lead value in USD — adjust per your sales math.
export function trackLead(params: {
  source: string;
  service?: string;
  value?: number;
  currency?: string;
}) {
  trackEvent("generate_lead", {
    currency: params.currency ?? "USD",
    value: params.value ?? 500,
    source: params.source,
    service: params.service ?? "general",
  });
  // Also fire a named conversion event so GA4 can mark it as a conversion.
  trackEvent("contact_form_submit", {
    source: params.source,
    service: params.service ?? "general",
  });
}
