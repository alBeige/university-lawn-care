import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import { faqs, faqCategories } from '@/data/faqs'

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers to the most common questions about University Lawn Care — billing, scheduling, weather policy, service details, and more.',
}

export default function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">FAQ</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mt-2 mb-5">
              Frequently Asked Questions
            </h1>
            <p className="text-stone-600 text-lg leading-relaxed">
              Have a question? Chances are it's covered here. If not, don't hesitate to reach out directly.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-14">
            {faqCategories.map((category) => (
              <div key={category}>
                <h2 className="font-display text-2xl font-bold text-stone-900 mb-6 pb-3 border-b border-stone-100">
                  {category}
                </h2>
                <FAQAccordion faqs={faqs.filter((f) => f.category === category)} />
              </div>
            ))}
          </div>

          {/* Contact prompt */}
          <div className="mt-16 bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
            <h3 className="font-display text-xl font-bold text-green-900 mb-3">Didn't find your answer?</h3>
            <p className="text-green-800 text-sm mb-5">
              We're happy to help with any question not covered here. Reach out any time.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="btn-primary bg-green-700 inline-flex items-center gap-2">
                Contact Us
                <ArrowRight size={16} />
              </Link>
              <Link href="/get-a-quote" className="btn-secondary border-green-700 text-green-700 hover:bg-green-100 inline-flex items-center gap-2">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
