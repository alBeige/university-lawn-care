import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const displayFont = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const bodyFont = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://universitylawncare.ca'),
  title: {
    default: 'University Lawn Care | Waterloo Region\'s Trusted Lawn Care',
    template: '%s | University Lawn Care',
  },
  description:
    'Professional, student-run lawn care serving Waterloo, Kitchener, Cambridge, and Guelph. Mowing, cleanup, aeration, snow removal, and more. Get a free quote today.',
  keywords: ['lawn care', 'waterloo', 'kitchener', 'lawn mowing', 'snow removal', 'spring cleanup', 'aeration'],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://universitylawncare.ca',
    siteName: 'University Lawn Care',
    title: 'University Lawn Care | Waterloo Region\'s Trusted Lawn Care',
    description: 'Professional lawn care serving Waterloo, Kitchener, Cambridge, and Guelph.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'University Lawn Care' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'University Lawn Care',
    description: 'Professional lawn care serving Waterloo Region.',
  },
  robots: { index: true, follow: true },
}

// Analytics placeholder — swap body for your vendor
function Analytics() {
  return null // Replace with: <Script src="..." /> or similar
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="font-body bg-white text-stone-900 antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-green-600 text-white px-4 py-2 rounded z-[9999]"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
