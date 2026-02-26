# University Lawn Care — Next.js Website

A production-ready Next.js 14 website for a lawn care business, featuring a full suite of pages, a multi-step quote form, service detail pages, and more.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** (Playfair Display + Source Sans 3)
- **Lucide React** (icons)

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Add your assets

Place the following files in `/public/`:

| File | Description |
|------|-------------|
| `logo.svg` | Primary logo (used in header and footer) |
| `logo.png` | Fallback logo |
| `favicon.ico` | Favicon |
| `og-image.jpg` | OpenGraph image (1200×630px) |

Place service images in `/public/images/`:

- `mowing.jpg`
- `spring-cleanup.jpg`
- `fall-cleanup.jpg`
- `aeration.jpg`
- `dethatching.jpg`
- `overseeding.jpg`
- `fertilizing.jpg`
- `sod.jpg`
- `garden.jpg`
- `snow.jpg`

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
/
├── app/
│   ├── layout.tsx              # Root layout (header, footer, fonts)
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Global styles + Tailwind
│   ├── sitemap.ts              # Auto-generated sitemap
│   ├── robots.ts               # Robots.txt
│   ├── not-found.tsx           # 404 page
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── faq/page.tsx
│   ├── get-a-quote/page.tsx
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── testimonials/page.tsx
│   ├── services/
│   │   ├── page.tsx            # Services listing
│   │   └── [slug]/page.tsx     # Individual service pages
│   └── api/
│       ├── quote/route.ts      # Quote form API
│       └── contact/route.ts    # Contact form API
│
├── components/
│   ├── Header.tsx              # Sticky header + mobile menu
│   ├── Footer.tsx              # Site footer
│   ├── ServiceCard.tsx         # Service card component
│   ├── TestimonialCard.tsx     # Review card component
│   ├── FAQAccordion.tsx        # Accordion FAQ component
│   ├── CTASection.tsx          # Reusable CTA banner
│   ├── ContactForm.tsx         # Contact form with validation
│   └── QuoteFormWizard.tsx     # 6-step quote form wizard
│
├── data/
│   ├── services.ts             # All service definitions
│   ├── testimonials.ts         # Review data
│   ├── faqs.ts                 # FAQ content
│   └── serviceAreas.ts         # Service area + postal validation
│
└── public/
    ├── logo.svg                # Add your logo here
    ├── logo.png                # Logo fallback
    └── images/                 # Service images
```

---

## Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/services` | Services listing |
| `/services/[slug]` | Individual service detail |
| `/about` | About page |
| `/contact` | Contact page |
| `/get-a-quote` | Multi-step quote form |
| `/testimonials` | Customer reviews |
| `/faq` | FAQ accordion |
| `/privacy` | Privacy policy |
| `/terms` | Terms of service |
| `/api/quote` | Quote form API endpoint |
| `/api/contact` | Contact form API endpoint |

---

## Data-Driven Configuration

### Adding or Editing Services

Edit `/data/services.ts` — each service is a typed object with:
- `slug` — URL path
- `name`, `tagline`, `description`
- `icon` — emoji used throughout
- `includes` — what's included list
- `idealFor` — ideal customer list
- `pricingNote` — pricing approach text
- `faqs` — service-specific FAQs
- `featured` — shown on homepage

### Adding Testimonials

Edit `/data/testimonials.ts`.

### Adding FAQs

Edit `/data/faqs.ts`. Use `category` to organize into sections on the FAQ page.

### Adding Service Areas

Edit `/data/serviceAreas.ts`. Add postal code prefixes to enable/disable service area validation.

---

## API Routes

### POST `/api/quote`

Accepts JSON body with all multi-step form fields. Currently logs to console.

**To add email sending:**
1. `npm install nodemailer @types/nodemailer`
2. Uncomment the nodemailer block in `/app/api/quote/route.ts`
3. Add your SMTP config

### POST `/api/contact`

Accepts `{ name, email, message }`. Currently logs to console. Email placeholder included.

---

## Analytics

An `<Analytics />` placeholder component exists in `app/layout.tsx`. To add analytics:

```tsx
// Option 1: Vercel Analytics
import { Analytics } from '@vercel/analytics/react'
// <Analytics />

// Option 2: Google Analytics via next/script
import Script from 'next/script'
// <Script src="https://www.googletagmanager.com/gtag/js?id=GA_ID" />
```

---

## Deployment

### Vercel (recommended)

```bash
npx vercel
```

### Other platforms

```bash
npm run build
npm start
```

---

## Customization Checklist

- [ ] Add your logo to `/public/logo.svg` and `/public/logo.png`
- [ ] Add service images to `/public/images/`
- [ ] Update contact details in `components/Footer.tsx` and `app/contact/page.tsx`
- [ ] Update `metadataBase` URL in `app/layout.tsx`
- [ ] Set up email sending in API routes
- [ ] Connect analytics
- [ ] Update phone number and email throughout
- [ ] Review and update privacy policy and terms dates/content
