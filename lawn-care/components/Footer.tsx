'use client'

import Link from 'next/link'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { services } from '@/data/services'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 bg-white rounded-lg p-1">
                <Image
                  src="/logo.svg"
                  alt="University Lawn Care"
                  fill
                  className="object-contain"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/logo.png' }}
                />
              </div>
              <span className="font-display font-bold text-white text-lg leading-tight">
                University<br/>
                <span className="text-green-400 text-sm font-semibold">Lawn Care</span>
              </span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed mb-6">
              Locally owned and operated. We take pride in every property we service — from first mow to first snow.
            </p>
            {/* Social placeholders */}
            <div className="flex gap-3">
              {['FB', 'IG', 'X'].map((s) => (
                <a
                  key={s}
                  href="#"
                  aria-label={`Follow us on ${s}`}
                  className="w-9 h-9 rounded-full bg-stone-700 hover:bg-green-700 flex items-center justify-center text-xs font-bold text-stone-300 hover:text-white transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {services.slice(0, 7).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-stone-400 hover:text-green-400 text-sm transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-green-500 hover:text-green-400 text-sm font-medium transition-colors">
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Testimonials', href: '/testimonials' },
                { label: 'FAQ', href: '/faq' },
                { label: 'Contact', href: '/contact' },
                { label: 'Get a Quote', href: '/get-a-quote' },
                { label: 'Privacy Policy', href: '/privacy' },
                { label: 'Terms of Service', href: '/terms' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-stone-400 hover:text-green-400 text-sm transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-stone-400 text-sm">Serving Waterloo, Kitchener, Cambridge & Guelph, ON</span>
              </li>
              <li className="flex gap-3">
                <Phone size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                <a href="tel:+15191234567" className="text-stone-400 hover:text-green-400 text-sm transition-colors">
                  (519) 123-4567
                </a>
              </li>
              <li className="flex gap-3">
                <Mail size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:hello@universitylawncare.ca" className="text-stone-400 hover:text-green-400 text-sm transition-colors break-all">
                  hello@universitylawncare.ca
                </a>
              </li>
              <li className="flex gap-3">
                <Clock size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-stone-400 text-sm">Mon–Sat: 7am–7pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-stone-500 text-sm">
            © {year} University Lawn Care. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm">
            <Link href="/privacy" className="text-stone-500 hover:text-stone-300 transition-colors">Privacy</Link>
            <Link href="/terms" className="text-stone-500 hover:text-stone-300 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
