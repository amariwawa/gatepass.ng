# IDE Prompt: Gatepass HTML → Next.js 14 + TypeScript

Paste this into your IDE agent with `landing.html`, `create-event.html` and `buy-tickets.html` in the project root (or attached).

---

You are converting three static HTML mockups of **Gatepass**, an event ticketing platform for Africa, into a production-ready **Next.js 14 (App Router) + TypeScript (strict)** codebase. Ship a complete, runnable result. Do not stop at a plan.

## Source files
- `landing.html` → route `/`
- `create-event.html` → route `/dashboard/events/new`
- `buy-tickets.html` → route `/e/[slug]` (seed slug: `rooftop-sessions`)

## Stack
- Next.js 14 App Router, React 18, TypeScript with `"strict": true`
- Tailwind CSS, with the design tokens below in `tailwind.config.ts`
- `next/font/google` for Inter and Newsreader (no `<link>` tags)
- No other UI libraries. Icons only if the HTML already uses them (it does not).

## Design tokens (extract exactly from the HTML, do not redesign)
- Colors: ink `#0F1B2D`, paper `#F6F3EC`, forest `#1F5F46`, mint `#8FD3B1`, stone `#C9C3B3`, line `#E2DDD1`, muted `#5B6472`, sand `#EDE8DC`, navy-2 `#1D2B43`, slate-text `#B8C2D1`, slate-dim `#A9B4C4`, dash `#3C4A60`
- Fonts: Newsreader (headings, `letter-spacing: -0.025em`, weight 400/500), Inter (body)
- Radii: card 16px, input 10px, pill 999px, hero ticket 24px
- Reproduce every layout, spacing value, and responsive breakpoint (`860px` landing, `900px` dashboard and buy) pixel-for-pixel. Move repeated inline styles into Tailwind classes or `@layer components` (`.btn`, `.btn-ghost`, `.card`, `.lbl`, `.inp`).

## Structure
```
src/
  app/
    layout.tsx
    page.tsx
    dashboard/events/new/page.tsx
    e/[slug]/page.tsx
  components/
    ui/        Button, Card, Label, Input, Field
    landing/   Nav, Hero, TicketPreview, FeatureGrid, AudienceCards, HowItWorks, PricingBand, FinalCta, Footer
    dashboard/ Sidebar, EventForm, TierTable, SalesSettings, LivePreview, SalesLink
    buy/       EventHeader, TierPicker, OrderSummary, CurrencyPicker, PaymentMethodPicker, ContactFields
  lib/
    types.ts       Event, TicketTier, Order, Currency, PaymentMethod
    constants.ts   PLATFORM_FEE_PERCENT, SERVICE_FEE
    format.ts      formatMoney(amount, currency)
    mock-data.ts   seed event "Rooftop Sessions: December Edition"
```

## Typing
Define and use these, no `any`:
```ts
type Currency = "NGN" | "USD" | "GBP";
type PaymentMethod = "bank_transfer" | "card" | "ussd" | "apple_pay";
interface TicketTier { id: string; name: string; description: string; price: number; quantity: number; salesEnd: string }
interface EventDetails { slug: string; name: string; date: string; doorsOpen: string; venue: string; description: string; category: string; tiers: TicketTier[] }
```

## Behavior to wire up (client components only where state is needed)
1. **Buy page:** working −/+ quantity steppers per tier (min 0, max = tier quantity), live order summary (line items, subtotal, total), currency selector, payment method selector, controlled WhatsApp and email inputs with basic validation. "Pay and get tickets" is disabled until at least one ticket and a valid WhatsApp number exist, and for now only `console.log`s a typed `Order` payload behind a clearly named `submitOrder()` stub.
2. **Create-event page:** controlled form state. The Live preview card updates in real time from the form (event name, date, venue, lowest tier price, total capacity = sum of tier quantities). "Add tier" appends a tier row, and rows can be removed. The sales link shows `gatepass.africa/<slugified-name>`, and "Copy link" uses the Clipboard API with a brief "Copied" state. Step tabs (Details, Tickets, Payout, Publish) are visual only for now.
3. **Landing page:** anchor links (`#features`, `#organizers`, `#pricing`) with smooth scroll, and CTAs routed with `next/link` (`Create event` → `/dashboard/events/new`, `Find events` → `/e/rooftop-sessions`).

## Rules
- Keep the placeholders `[YOUR FEE]` and `[FEE]` as exported constants in `lib/constants.ts` and render them from there. Do not invent fees.
- Keep all copy exactly as written in the HTML.
- Accessibility: keep every `label`/`for`, `aria-label`, and `fieldset`/`legend` already present. Real `<button>` and `<a>` elements only. Visible focus states on all interactive elements.
- Server components by default. Add `"use client"` only to components that hold state.
- No backend, auth, or payment integration yet. Leave typed stubs where Supabase and Paystack will plug in later.

## Done when (verify with evidence, not assertion)
1. `npm run build` passes with zero TypeScript errors and zero ESLint errors. Paste the output.
2. `npm run dev` serves all three routes with no console errors.
3. Each page matches its source HTML at 1360px and 390px widths. Say explicitly what you compared.
4. Report every deviation from the source HTML and why. If there are none, say so.
