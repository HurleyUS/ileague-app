# iLeague 🏆

A modern influencer/fan engagement platform scaffold built with Next.js, Expo/React Native, and Convex.

> **Honesty (2026-09-08):** Convex deployment is **pending** (run `bunx convex dev` in `packages/convex` when keys exist). Stripe / live monetization checkmarks below are **planned**, not shipped. www.ileague.app remains Coming Soon — do not invent Convex or Stripe keys.

## Overview

iLeague connects creators with their fans through:
- **Leagues & Competitions** - Create and join exciting leagues with leaderboards and prizes
- **Exclusive Content** - Subscriber-only posts, videos, and live streams
- **Community Building** - Follow creators, engage with content, and connect with fans
- **Monetization** - Subscriptions, tips, and prizes for creators

## Tech Stack

### Mobile App (iOS/Android)
- **Expo** - Cross-platform React Native framework
- **NativeWind** - Tailwind CSS for React Native
- **Clerk** - Authentication
- **Convex** - Real-time backend (**deploy pending**)
- **PostHog** - Analytics
- **Sentry** - Error tracking

### Web App
- **Next.js 15** - React framework with App Router
- **Tailwind CSS v4** - Styling
- **Clerk** - Authentication
- **Convex** - Real-time backend (**deploy pending**)
- **PostHog** - Analytics
- **Sentry** - Error tracking

### Backend
- **Convex** - Real-time database and functions (**deploy pending**)
- **Stripe** - Payments and subscriptions (**planned — not wired**)
- **Resend** - Transactional emails

## Project Structure

```
ileague.app/
├── apps/
│   ├── mobile/          # Expo mobile app
│   │   ├── src/
│   │   │   ├── app/     # Expo Router pages
│   │   │   ├── components/
│   │   │   ├── lib/
│   │   │   └── providers/
│   │   └── assets/
│   └── web/             # Next.js website
│       ├── src/
│       │   ├── app/     # App Router pages
│       │   ├── components/
│       │   ├── lib/
│       │   └── providers/
│       └── public/
└── packages/
    └── convex/          # Convex backend
        └── convex/      # Convex functions & schema
```

## Getting Started

### Prerequisites
- Node.js 20+
- Bun package manager
- Convex account
- Clerk account
- Stripe account
- Resend account
- PostHog account
- Sentry account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ileague.app.git
cd ileague.app
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your API keys and configuration.

4. Set up Convex:
```bash
cd packages/convex
bunx convex dev
```

5. Start the development servers:

**Web:**
```bash
bun run dev:web
```

**Mobile:**
```bash
bun run dev:mobile
```

## Environment Variables

See `.env.example` for all required environment variables:

- **Convex** - `CONVEX_DEPLOYMENT`, `NEXT_PUBLIC_CONVEX_URL`
- **Clerk** - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`, etc.
- **Stripe** - `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, etc.
- **Resend** - `RESEND_API_KEY`
- **PostHog** - `NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST`
- **Sentry** - `SENTRY_AUTH_TOKEN`, `NEXT_PUBLIC_SENTRY_DSN`

## Features

### For Creators
- ✅ Profile customization with cover images and social links
- ✅ Content posting (text, images, videos, polls)
- ✅ League creation (competitions, challenges, communities)
- ⬜ Subscription tiers (monthly/yearly) (planned)
- ⬜ Tip receiving (planned)
- ✅ Analytics dashboard
- ⬜ Stripe Connect payouts (planned)

### For Fans
- ✅ Creator discovery and search
- ✅ Follow and subscribe to creators
- ✅ Join leagues and compete
- ✅ Engage with posts (like, comment, share)
- ⬜ Send tips to favorite creators (planned)
- ✅ Notifications for activity

### Platform
- ⬜ Real-time updates with Convex (deploy pending)
- ✅ Authentication with Clerk
- ⬜ Payment processing with Stripe (planned)
- ✅ Transactional emails with Resend
- ✅ Analytics with PostHog
- ✅ Error tracking with Sentry
- ✅ Beautiful, responsive UI

## Development

### Running Tests
```bash
bun run test
```

### Linting
```bash
bun run lint
```

### Type Checking
```bash
bun run typecheck
```

### Building for Production
```bash
bun run build
```

## Deployment

### Web (Vercel)
1. Connect your repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy

### Mobile (EAS)
1. Configure `app.json` with your app details
2. Run `eas build --platform all`
3. Submit to app stores with `eas submit`

### Convex

**Status: deploy pending.** Schema/functions may exist under `packages/convex`, but no production deployment is claimed at HEAD.

```bash
cd packages/convex
bunx convex deploy   # only after `bunx convex dev` has linked a real project
```


## Webhooks

Configure webhooks for:
- **Clerk** - `/api/webhooks/clerk` or Convex HTTP endpoint
- **Stripe** - `/api/webhooks/stripe` or Convex HTTP endpoint

## License

MIT License - see LICENSE for details.

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting PRs.

---

Built with ❤️ by the iLeague team
