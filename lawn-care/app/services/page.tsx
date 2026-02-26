import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import CTASection from '@/components/CTASection'
import { services } from '@/data/services'

export const metadata: Metadata = {
  title: 'Our Services',
  description:
    'Explore the full range of lawn care services offered by University Lawn Care — mowing, cleanup, aeration, overseeding, sod, fertilizing, snow removal, and more.',
}

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">What We Offer</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mt-2 mb-5">
              Our Services
            </h1>
            <p className="text-stone-600 text-lg leading-relaxed">
              We offer a comprehensive suite of lawn care services — all quoted per property with transparent pricing and no surprise charges.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Bundling note */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-bold text-stone-900 mb-4">
            Combine Services & Save
          </h2>
          <p className="text-stone-600 mb-6">
            Many services work better together — and we offer discounted pricing when you bundle. Popular combinations include aeration + overseeding, spring cleanup + first mow, and fall cleanup + final mow.
          </p>
          <Link href="/get-a-quote" className="btn-primary inline-flex items-center gap-2">
            Request a Bundled Quote
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  )
}
