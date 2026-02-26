import Link from 'next/link'

interface CTASectionProps {
  title?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
  secondaryLabel?: string
  secondaryHref?: string
}

export default function CTASection({
  title = 'Ready for a Better-Looking Lawn?',
  subtitle = 'Get your free, no-obligation quote today. We respond within one business day.',
  primaryLabel = 'Get a Free Quote',
  primaryHref = '/get-a-quote',
  secondaryLabel = 'View Services',
  secondaryHref = '/services',
}: CTASectionProps) {
  return (
    <section className="bg-green-700 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-green-100 text-lg mb-10 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className="inline-flex items-center justify-center bg-white text-green-800 font-semibold px-8 py-3.5 rounded-full hover:bg-green-50 transition-all duration-200 shadow-lg hover:shadow-xl text-base"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="inline-flex items-center justify-center border-2 border-white text-white font-semibold px-8 py-3.5 rounded-full hover:bg-white/10 transition-all duration-200 text-base"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  )
}
