import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import TestimonialCard from '@/components/TestimonialCard'
import { testimonials } from '@/data/testimonials'

export const metadata: Metadata = {
  title: 'Customer Reviews',
  description:
    'Read what University Lawn Care customers are saying. Real reviews from Waterloo, Kitchener, Cambridge, and Guelph homeowners.',
}

export default function TestimonialsPage() {
  const avgRating = (testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length).toFixed(1)

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">What People Say</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mt-2 mb-5">
            Customer Reviews
          </h1>
          <p className="text-stone-600 text-lg max-w-xl mx-auto mb-8">
            Don't take our word for it. Here's what our customers across Waterloo Region have to say about their experience.
          </p>
          <div className="inline-flex items-center gap-3 bg-white border border-stone-200 rounded-2xl px-6 py-4 shadow-sm">
            <div className="text-4xl font-display font-bold text-green-700">{avgRating}</div>
            <div className="text-left">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-stone-500 text-sm">{testimonials.length} verified reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-stone-900 mb-4">Join Our Happy Customers</h2>
          <p className="text-stone-600 mb-8">Get your free quote today and see why so many Waterloo Region homeowners trust us with their properties.</p>
          <Link href="/get-a-quote" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-base">
            Get a Free Quote
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
