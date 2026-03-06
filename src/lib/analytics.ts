/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Find MyRoomie — Analytics Module
 *
 * Handles:
 *  - GA4 event tracking (type-safe wrapper)
 *  - UTM parameter capture with first-touch attribution (localStorage)
 *  - Pre-built event helpers for every conversion touchpoint
 *
 * All functions are safe to call server-side (no-op when window is undefined).
 */

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export type Attribution = {
  source: string | null;
  medium: string | null;
  campaign: string | null;
  content: string | null;
  term: string | null;
  landing_page: string;
  referrer: string;
  timestamp: number;
};

const ATTRIBUTION_KEY = 'fmr_attribution';

/**
 * Fire a GA4 custom event. No-op if gtag is not loaded (dev mode / SSR).
 */
export function trackEvent(
  eventName: string,
  params: Record<string, unknown> = {}
): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', eventName, params);
}

/**
 * Read UTM params from the current URL and persist as first-touch attribution.
 * Only writes if UTM params are present — never overwrites existing attribution.
 * Call once on page mount (handled by AnalyticsProvider).
 */
export function captureUTM(): void {
  if (typeof window === 'undefined') return;

  const params = new URLSearchParams(window.location.search);
  const source = params.get('utm_source');
  const medium = params.get('utm_medium');
  const campaign = params.get('utm_campaign');

  // Only store if at least one UTM param is present and none already stored
  if ((source || medium || campaign) && !localStorage.getItem(ATTRIBUTION_KEY)) {
    const attribution: Attribution = {
      source,
      medium,
      campaign,
      content: params.get('utm_content'),
      term: params.get('utm_term'),
      landing_page: window.location.pathname,
      referrer: document.referrer,
      timestamp: Date.now(),
    };
    try {
      localStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(attribution));
    } catch {
      // Ignore storage errors (incognito with storage disabled, etc.)
    }
  }
}

/**
 * Retrieve stored first-touch attribution data.
 */
export function getAttribution(): Attribution | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(ATTRIBUTION_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : null;
  } catch {
    return null;
  }
}

function buildAttributionParams(): Record<string, unknown> {
  const a = getAttribution();
  if (!a) return { traffic_source: 'direct' };
  return {
    traffic_source: a.source ?? 'direct',
    ...(a.medium ? { utm_medium: a.medium } : {}),
    ...(a.campaign ? { utm_campaign: a.campaign } : {}),
    first_landing_page: a.landing_page,
  };
}

function currentPath(): string {
  return typeof window !== 'undefined' ? window.location.pathname : '';
}

/**
 * Pre-built event helpers for every conversion touchpoint.
 *
 * Each event automatically includes:
 *  - page_path: the page where it fired
 *  - traffic_source + utm params: from first-touch attribution in localStorage
 */
export const Events = {
  /**
   * Primary conversion intent — user clicked the main sign-up / beta CTA.
   * Fire when any link to the Google Form or beta flow is clicked.
   * @param context  'hero' | 'cta_section' | 'city_page' | 'navbar'
   */
  formStart(context = 'cta') {
    trackEvent('form_start', {
      form_context: context,
      page_path: currentPath(),
      ...buildAttributionParams(),
    });
  },

  /** Beta waitlist form successfully submitted */
  betaSignup() {
    trackEvent('beta-signup', {
      page_path: currentPath(),
      ...buildAttributionParams(),
    });
  },

  /** User clicked a Discord join link */
  discordJoin() {
    trackEvent('discord-join', {
      page_path: currentPath(),
      ...buildAttributionParams(),
    });
  },

  /** Contact form submitted successfully — email captured */
  emailSignup() {
    trackEvent('email-signup', {
      page_path: currentPath(),
      ...buildAttributionParams(),
    });
  },

  /** YouTube subscribe link was clicked */
  youtubeSubscribe() {
    trackEvent('youtube-subscribe', {
      page_path: currentPath(),
      ...buildAttributionParams(),
    });
  },

  /** Scroll depth milestone reached. percent: 25 | 50 | 75 | 90 */
  scrollDepth(percent: number) {
    trackEvent('scroll', {
      percent,
      page_path: currentPath(),
    });
  },

  /** A named CTA button was clicked (non-form CTAs) */
  ctaClick(ctaName: string) {
    trackEvent('cta_click', {
      cta_name: ctaName,
      page_path: currentPath(),
      ...buildAttributionParams(),
    });
  },
};
