import { PostHog } from 'posthog-js'

// PostHog singleton initialization
export const posthog: PostHog | undefined = 
  typeof window !== 'undefined' 
    ? require('posthog-js').default 
    : undefined

if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
  posthog?.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
    capture_pageview: false,
    loaded: (ph) => {
      if (process.env.NODE_ENV === 'development') ph.debug()
    }
  })
}
