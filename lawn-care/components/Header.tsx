'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { services } from '@/data/services'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services', hasDropdown: true },
  { label: 'About', href: '/about' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="relative w-10 h-10">
              <Image
                src="/images/logo.jpg"
                alt="University Lawn Care logo"
                fill
                className="object-contain"
                priority
                onError={(e) => {
                  const img = e.target as HTMLImageElement
                  img.src = '/logo.png'
                }}
              />
            </div>
            <span className="font-display font-bold text-green-800 text-lg leading-tight hidden sm:block">
              University<br/>
              <span className="text-green-600 text-base font-semibold">Lawn Care</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} className="relative group">
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-stone-700 hover:text-green-700 font-medium text-sm transition-colors rounded-md hover:bg-green-50"
                    aria-haspopup="true"
                    aria-expanded={servicesOpen}
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {link.label}
                    <ChevronDown size={14} />
                  </button>
                  <div
                    className="absolute top-full left-0 pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-stone-100 p-4 w-72 grid grid-cols-1 gap-1">
                      <Link
                        href="/services"
                        className="text-sm font-semibold text-green-700 hover:text-green-800 px-3 py-2 rounded-lg hover:bg-green-50 transition-colors"
                      >
                        All Services →
                      </Link>
                      <div className="border-t border-stone-100 my-1" />
                      {services.slice(0, 6).map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="text-sm text-stone-600 hover:text-green-700 px-3 py-2 rounded-lg hover:bg-green-50 transition-colors"
                        >
                          {s.icon} {s.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-stone-700 hover:text-green-700 font-medium text-sm transition-colors rounded-md hover:bg-green-50"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <Link
              href="/get-a-quote"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-all duration-200 shadow-sm hover:shadow-md"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md text-stone-700 hover:text-green-700 hover:bg-green-50 transition-colors"
            aria-expanded={open}
            aria-label="Toggle navigation menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-stone-100 shadow-lg" role="navigation" aria-label="Mobile navigation">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-stone-700 hover:text-green-700 hover:bg-green-50 rounded-lg font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-stone-100">
              <Link
                href="/get-a-quote"
                onClick={() => setOpen(false)}
                className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-3 rounded-full text-sm transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
