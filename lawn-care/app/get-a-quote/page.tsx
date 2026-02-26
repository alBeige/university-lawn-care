import type { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'
import QuoteFormWizard from '@/components/QuoteFormWizard'

export const metadata: Metadata = {
  title: 'Get a Free Quote',
  description:
    'Request a free, no-obligation lawn care quote from University Lawn Care. Takes less than 5 minutes. We respond within one business day.',
}

export default function QuotePage() {
  return (
    <>
      <section className="relative pt-28 pb-10 bg-gradient-to-b from-green-50 to-white overflow-hidden">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Ccircle cx="10" cy="10" r="2" fill="%2328a72d"/%3E%3Ccircle cx="40" cy="10" r="2" fill="%2328a72d"/%3E%3Ccircle cx="70" cy="10" r="2" fill="%2328a72d"/%3E%3Ccircle cx="25" cy="35" r="2" fill="%2328a72d"/%3E%3Ccircle cx="55" cy="35" r="2" fill="%2328a72d"/%3E%3Ccircle cx="85" cy="35" r="2" fill="%2328a72d"/%3E%3Ccircle cx="10" cy="60" r="2" fill="%2328a72d"/%3E%3Ccircle cx="40" cy="60" r="2" fill="%2328a72d"/%3E%3Ccircle cx="70" cy="60" r="2" fill="%2328a72d"/%3E%3Ccircle cx="25" cy="85" r="2" fill="%2328a72d"/%3E%3Ccircle cx="55" cy="85" r="2" fill="%2328a72d"/%3E%3Ccircle cx="85" cy="85" r="2" fill="%2328a72d"/%3E%3C/svg%3E')`,
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Free & No Obligation</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mt-2 mb-4">
            Get Your Free Quote
          </h1>
          <p className="text-stone-600 text-lg max-w-xl mx-auto mb-6">
            Tell us about your property and the services you need. We'll follow up within one business day with a clear, honest price.
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm text-stone-500">
            {['No contracts required', 'Responds in 1 business day', 'Free site visit available'].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckCircle size={14} className="text-green-500" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 pb-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <QuoteFormWizard />
        </div>
      </section>
    </>
  )
}
