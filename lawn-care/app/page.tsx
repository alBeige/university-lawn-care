import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Shield, Star, Users, Clock, Leaf, CheckCircle, ArrowRight, MapPin } from 'lucide-react'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCard from '@/components/TestimonialCard'
import CTASection from '@/components/CTASection'
import { getFeaturedServices } from '@/data/services'
import { testimonials } from '@/data/testimonials'
import { serviceAreas } from '@/data/serviceAreas'

export const metadata: Metadata = {
  title: 'University Lawn Care | Waterloo Region\'s Trusted Lawn Care',
  description:
    'Reliable, student-run lawn care for Waterloo, Kitchener, Cambridge, and Guelph. Mowing, cleanup, aeration, snow removal, and more. Free quotes, same-season service.',
}

const trustPoints = [
  { icon: Shield, title: 'Fully Insured', desc: 'Commercial liability coverage on every job.' },
  { icon: Star, title: 'Satisfaction Guaranteed', desc: "Not happy? We'll make it right, no questions asked." },
  { icon: Users, title: 'Student-Run', desc: 'Hardworking University of Waterloo students who care about results.' },
  { icon: Clock, title: 'Always on Schedule', desc: 'We show up when we say we will — every single time.' },
]

const processSteps = [
  { num: '01', title: 'Request a Quote', desc: 'Fill out our simple form with your address, services needed, and property details.' },
  { num: '02', title: 'Get Your Quote', desc: "We'll follow up within one business day with a clear, no-surprise price." },
  { num: '03', title: 'We Get to Work', desc: 'We show up on schedule and complete every job to a high standard.' },
  { num: '04', title: 'You Enjoy the Results', desc: 'Relax knowing your property is in good hands, season after season.' },
]

export default function HomePage() {
  const featured = getFeaturedServices()
  const topTestimonials = testimonials.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden bg-gradient-to-br from-green-950 via-green-800 to-green-700">
        {/* Hero background image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/stock-photos/jake-nackos-C2PCa6DhlYE-unsplash.jpg"
            alt="Lawn care hero background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-950/70 via-green-800/60 to-green-700/70" />
        </div>
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-white/10 text-green-200 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-white/20">
              <Leaf size={12} />
              Serving Waterloo Region Since 2019
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Lawn, <br className="hidden sm:block" />
              <span className="text-green-300">Done Right.</span>
            </h1>
            <p className="text-green-100 text-lg sm:text-xl mb-10 max-w-2xl leading-relaxed">
              We're a student-run lawn care company that shows up on time, does quality work, and charges fair prices. No contracts required for most services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/get-a-quote" className="btn-primary bg-white text-green-800 hover:bg-green-50 px-8 py-4 text-base shadow-xl">
                Get a Free Quote
              </Link>
              <Link href="/services" className="btn-secondary border-white text-white hover:bg-white/10 px-8 py-4 text-base">
                View Our Services
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-6">
              {['Fully Insured', 'No Hidden Fees', 'Satisfaction Guaranteed'].map((label) => (
                <span key={label} className="flex items-center gap-2 text-green-200 text-sm font-medium">
                  <CheckCircle size={16} className="text-green-400" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">What We Do</span>
            <h2 className="section-heading text-3xl sm:text-4xl mt-2 mb-4">Services Built for Your Property</h2>
            <p className="text-stone-500 text-lg max-w-2xl mx-auto">
              From spring to winter, we've got your property covered. All services are quoted per property — no one-size-fits-all pricing.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/services" className="btn-secondary inline-flex items-center gap-2">
              See All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Why Choose Us</span>
              <h2 className="section-heading text-3xl sm:text-4xl mt-2 mb-6">
                Lawn Care You Can Actually Rely On
              </h2>
              <p className="text-stone-600 text-lg mb-8 leading-relaxed">
                We're not a faceless franchise. We're local students who take pride in our community, our work, and our reputation. Every property gets our full attention.
              </p>
              <div className="space-y-4">
                {trustPoints.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4 p-4 rounded-xl hover:bg-green-50 transition-colors">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className="text-green-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-900 mb-0.5">{title}</h3>
                      <p className="text-stone-500 text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-3xl p-10 text-white">
                <div className="text-5xl font-display font-bold mb-2">500+</div>
                <div className="text-green-200 mb-8">Happy customers since 2019</div>
                <div className="space-y-3">
                  {[
                    'Licensed & fully insured',
                    'No long-term contracts required',
                    'Digital invoices & easy e-transfer payment',
                    'Responsive — we actually answer messages',
                    'Seasonal programs available',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-green-100">
                      <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-green-200 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">How It Works</span>
            <h2 className="section-heading text-3xl sm:text-4xl mt-2 mb-4">Simple from Start to Finish</h2>
            <p className="text-stone-500 text-lg max-w-xl mx-auto">
              Getting started takes less than five minutes. Here's exactly what to expect.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={step.num} className="relative">
                <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="font-display text-4xl font-bold text-green-100 mb-4">{step.num}</div>
                  <h3 className="font-semibold text-stone-900 mb-2">{step.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 text-stone-300">→</div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/get-a-quote" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-base">
              Start Your Quote
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Reviews</span>
            <h2 className="section-heading text-3xl sm:text-4xl mt-2 mb-4">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {topTestimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/testimonials" className="btn-secondary inline-flex items-center gap-2">
              Read All Reviews
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-green-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-green-400 font-semibold text-sm uppercase tracking-widest">Where We Work</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">Our Service Area</h2>
            <p className="text-green-300 text-lg max-w-xl mx-auto">
              We cover Waterloo Region and beyond. Not sure if we service your street? Just ask.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {serviceAreas.map((area) => (
              <div key={area.city} className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/15 transition-colors">
                <MapPin size={20} className="text-green-400 mb-3" />
                <h3 className="font-semibold text-white text-lg mb-1">{area.city}</h3>
                <p className="text-green-300 text-sm mb-3">{area.region}</p>
                <p className="text-green-200 text-xs">{area.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-green-300 text-sm">
              Not seeing your city?{' '}
              <Link href="/contact" className="text-white underline hover:text-green-300 transition-colors">
                Contact us
              </Link>{' '}
              — we're always expanding our coverage.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Got Questions?</span>
          <h2 className="section-heading text-3xl sm:text-4xl mt-2 mb-4">We've Got Answers</h2>
          <p className="text-stone-500 text-lg mb-8">
            Browse our frequently asked questions — from billing and scheduling to service details and weather policies.
          </p>
          <Link href="/faq" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-base">
            View All FAQs
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  )
}
