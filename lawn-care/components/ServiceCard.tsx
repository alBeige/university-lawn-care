'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Service } from '@/data/services'

interface ServiceCardProps {
  service: Service
  compact?: boolean
}

export default function ServiceCard({ service, compact = false }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={`group block bg-white rounded-2xl border border-stone-200 hover:border-green-300 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ${
        compact ? '' : ''
      }`}
    >
      {/* Image */}
      {!compact && (
        <div className="relative h-48 bg-gradient-to-b from-green-50 to-green-100 overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <Image
            src={service.heroImage}
            alt={service.name}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      {/* Content */}
      <div className={compact ? 'p-5' : 'p-6'}>
        <div className="flex items-start justify-between mb-3">
          <span className="text-3xl" aria-hidden="true">{service.icon}</span>
          <ArrowRight
            size={18}
            className="text-stone-300 group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-200 mt-1"
          />
        </div>
        <h3 className={`font-display font-semibold text-stone-900 group-hover:text-green-800 transition-colors mb-2 ${compact ? 'text-base' : 'text-lg'}`}>
          {service.name}
        </h3>
        <p className="text-stone-500 text-sm leading-relaxed line-clamp-2">
          {service.tagline}
        </p>
        {!compact && (
          <div className="mt-4 flex flex-wrap gap-1">
            {service.includes.slice(0, 2).map((item) => (
              <span
                key={item}
                className="inline-flex items-center text-xs bg-green-50 text-green-700 px-2 py-0.5 rounded-full border border-green-100"
              >
                ✓ {item.split(' ').slice(0, 3).join(' ')}…
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  )
}
