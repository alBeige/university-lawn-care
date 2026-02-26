import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Shield, CheckCircle, Heart, Award } from 'lucide-react'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about University Lawn Care — a student-run, community-focused lawn care company serving Waterloo Region since 2019.',
}

const values = [
  {
    icon: Heart,
    title: 'Community First',
    desc: "We live and work in Waterloo Region. Taking care of our community's properties is something we genuinely care about.",
  },
  {
    icon: CheckCircle,
    title: 'Honest Work',
    desc: "No upselling, no corner-cutting, no excuses. We say what we'll do and we do what we say.",
  },
  {
    icon: Shield,
    title: 'Accountability',
    desc: "If something isn't right, we fix it. Our satisfaction guarantee isn't just a slogan — we back it up.",
  },
  {
    icon: Award,
    title: 'Quality Over Speed',
    desc: "We take the time to do every job properly. A clean edge, a sharp cut, a tidy job site — every single time.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Our Story</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 mt-2 mb-5">
              About University Lawn Care
            </h1>
            <p className="text-stone-600 text-lg leading-relaxed">
              We started with a push mower and a few neighbours who believed in us. Today we're one of Waterloo Region's most trusted local lawn care services — and we haven't lost that neighbourhood feel.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-stone-700 leading-relaxed">
              <h2 className="font-display text-3xl font-bold text-stone-900">How We Got Started</h2>
              <p>
                University Lawn Care was founded in 2019 by a group of University of Waterloo students who wanted to build something real — not just another study session side project. We started by knocking on doors in Waterloo and offering honest, hard work at fair prices.
              </p>
              <p>
                Word spread fast. Neighbours told neighbours. Before long, we had a full client list and a crew of like-minded students who took the same pride in the work that we did. We invested in proper equipment, got fully insured, and built systems to ensure every property got the same high standard of care.
              </p>
              <p>
                Today we service hundreds of properties across Waterloo, Kitchener, Cambridge, and Guelph. The faces change as students graduate, but the culture doesn't: show up, do great work, be honest, and take care of your customers.
              </p>
            </div>
            <div className="relative h-96 rounded-3xl overflow-hidden shadow-lg bg-gradient-to-br from-green-700 to-green-900">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=500&fit=crop&q=80"
                alt="Professional lawn care equipment and service"
                fill
                className="object-cover"
              />
              {/* Fallback gradient if image fails */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-700/90 to-green-900/90 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-5xl mb-2">🌿</div>
                  <p className="text-sm opacity-75">Professional Lawn Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-3xl p-10 text-white">
            <h3 className="font-display text-2xl font-bold mb-8 text-center">By the Numbers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { num: '2019', label: 'Founded' },
                { num: '500+', label: 'Customers Served' },
                { num: '4', label: 'Cities Covered' },
                { num: '100%', label: 'Satisfaction Rate' },
              ].map(({ num, label }) => (
                <div key={label} className="text-center">
                  <div className="font-display text-3xl font-bold text-green-300">{num}</div>
                  <div className="text-green-100 text-sm mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">Our Mission</span>
          <h2 className="font-display text-3xl font-bold text-stone-900 mt-2 mb-6">
            Making Lawn Care Effortless for Every Homeowner
          </h2>
          <p className="text-stone-600 text-xl leading-relaxed">
            We believe your property should look great without you having to think about it. Our mission is to deliver reliable, professional lawn care that frees up your time and gives you a yard you're proud of — at a price that makes sense.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-widest">What We Stand For</span>
            <h2 className="font-display text-3xl font-bold text-stone-900 mt-2">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-stone-50 rounded-2xl p-6 border border-stone-100">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={20} className="text-green-700" />
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">{title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-16 bg-green-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold mb-4">You Can Trust Us With Your Property</h2>
            <p className="text-green-300 max-w-xl mx-auto">
              We take the trust you put in us seriously. Here's what that looks like in practice.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: 'Fully Insured', desc: 'Commercial liability insurance on every job. Proof of coverage available upon request.' },
              { title: 'Professional Equipment', desc: 'We invest in well-maintained, commercial-grade equipment — because the right tools produce better results.' },
              { title: 'Satisfaction Guarantee', desc: "If you're not happy with the outcome, we'll return to make it right at no extra charge." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white/10 border border-white/10 rounded-2xl p-6">
                <h3 className="font-semibold text-white text-lg mb-2">{title}</h3>
                <p className="text-green-200 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
