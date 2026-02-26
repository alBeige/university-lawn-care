import type { Metadata } from 'next'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with University Lawn Care. We serve Waterloo, Kitchener, Cambridge, and Guelph. Contact us by phone, email, or our online form.',
}

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: '(519) 123-4567',
    href: 'tel:+15191234567',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@universitylawncare.ca',
    href: 'mailto:hello@universitylawncare.ca',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Monday – Saturday, 7am – 7pm',
    href: undefined,
  },
  {
    icon: MapPin,
    label: 'Service Area',
    value: 'Waterloo · Kitchener · Cambridge · Guelph',
    href: undefined,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Get in Touch</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mt-2 mb-5">
              Contact Us
            </h1>
            <p className="text-stone-600 text-lg leading-relaxed">
              Have a question or want to discuss your property? We're happy to help. Reach out any way you prefer — we typically respond the same business day.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="font-display text-2xl font-bold text-stone-900 mb-6">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Details */}
            <div>
              <h2 className="font-display text-2xl font-bold text-stone-900 mb-6">Contact Information</h2>
              <div className="space-y-5 mb-10">
                {contactDetails.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex gap-4 items-start">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-green-700" />
                    </div>
                    <div>
                      <p className="text-stone-500 text-xs font-medium uppercase tracking-wide mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-stone-900 font-medium hover:text-green-700 transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-stone-900 font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="bg-stone-100 rounded-2xl h-64 flex items-center justify-center border border-stone-200">
                <div className="text-center">
                  <MapPin size={32} className="text-stone-400 mx-auto mb-2" />
                  <p className="text-stone-500 text-sm font-medium">Waterloo Region, ON</p>
                  <p className="text-stone-400 text-xs mt-1">Map integration available with API key</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
