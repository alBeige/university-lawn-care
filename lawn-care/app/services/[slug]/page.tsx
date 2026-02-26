import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react'
import FAQAccordion from '@/components/FAQAccordion'
import CTASection from '@/components/CTASection'
import { services, getServiceBySlug } from '@/data/services'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getServiceBySlug(params.slug)
  if (!service) return {}
  return {
    title: service.name,
    description: service.description,
    openGraph: {
      title: `${service.name} | University Lawn Care`,
      description: service.description,
    },
  }
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug)
  if (!service) notFound()

  const serviceFaqs = service.faqs.map((faq, i) => ({
    ...faq,
    id: `service-faq-${i}`,
    category: 'Service FAQ',
  }))

  return (
    <>
      {/* Hero with Image */}
      <section className="relative pt-28 pb-16 bg-gradient-to-br from-green-950 to-green-800 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src={service.heroImage}
            alt={service.name}
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-950/80 to-green-800/80" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-green-300 hover:text-white text-sm font-medium mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>
          <div className="max-w-3xl">
            <span className="text-4xl mb-4 block" aria-hidden="true">{service.icon}</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold mb-4">{service.name}</h1>
            <p className="text-green-200 text-xl mb-6">{service.tagline}</p>
            <p className="text-green-100 text-lg leading-relaxed">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* What's included */}
              <div>
                <h2 className="font-display text-2xl font-bold text-stone-900 mb-6">What's Included</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                  <div className="md:col-span-2">
                    <ul className="space-y-3">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle size={20} className="text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-stone-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-green-50 to-green-100">
                    <Image
                      src={service.heroImage}
                      alt={`${service.name} service`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Ideal for */}
              <div>
                <h2 className="font-display text-2xl font-bold text-stone-900 mb-6">Ideal For</h2>
                <div className="flex flex-wrap gap-3">
                  {service.idealFor.map((item) => (
                    <span
                      key={item}
                      className="bg-green-50 text-green-800 border border-green-200 px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              {service.faqs.length > 0 && (
                <div>
                  <h2 className="font-display text-2xl font-bold text-stone-900 mb-6">Common Questions</h2>
                  <FAQAccordion faqs={serviceFaqs} />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-5">
                {/* Pricing card */}
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                  <h3 className="font-display font-bold text-green-900 text-lg mb-3">Pricing</h3>
                  <p className="text-green-800 text-sm leading-relaxed mb-5">{service.pricingNote}</p>
                  <Link
                    href="/get-a-quote"
                    className="btn-primary w-full justify-center inline-flex gap-2"
                  >
                    Get a Free Quote
                    <ArrowRight size={16} />
                  </Link>
                </div>

                {/* Trust card */}
                <div className="bg-white border border-stone-200 rounded-2xl p-6">
                  <h3 className="font-semibold text-stone-900 mb-4 text-sm">Our Promise</h3>
                  <ul className="space-y-2.5">
                    {[
                      'No-surprise pricing',
                      'Satisfaction guaranteed',
                      'Fully insured crew',
                      'On-time, every time',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-stone-600">
                        <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Other services */}
                <div className="bg-white border border-stone-200 rounded-2xl p-6">
                  <h3 className="font-semibold text-stone-900 mb-4 text-sm">Other Services</h3>
                  <ul className="space-y-1">
                    {services
                      .filter((s) => s.slug !== service.slug)
                      .slice(0, 5)
                      .map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="text-sm text-stone-600 hover:text-green-700 flex items-center gap-2 py-1 transition-colors"
                          >
                            <span>{s.icon}</span>
                            {s.name}
                          </Link>
                        </li>
                      ))}
                    <li>
                      <Link href="/services" className="text-sm text-green-600 hover:text-green-800 font-medium mt-2 block transition-colors">
                        All services →
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to Book ${service.name}?`}
        subtitle="Get your free quote today. We'll follow up within one business day."
      />
    </>
  )
}
