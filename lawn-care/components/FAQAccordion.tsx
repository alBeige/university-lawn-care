'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FAQ } from '@/data/faqs'

interface FAQAccordionProps {
  faqs: FAQ[]
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => setOpenId(openId === id ? null : id)

  return (
    <div className="space-y-3">
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className="border border-stone-200 rounded-xl overflow-hidden hover:border-green-200 transition-colors"
        >
          <button
            onClick={() => toggle(faq.id)}
            className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-green-50/50 transition-colors"
            aria-expanded={openId === faq.id}
          >
            <span className="font-medium text-stone-900 text-sm sm:text-base">
              {faq.question}
            </span>
            <ChevronDown
              size={18}
              className={`flex-shrink-0 text-green-600 transition-transform duration-200 ${
                openId === faq.id ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            />
          </button>
          {openId === faq.id && (
            <div className="px-5 pb-4 bg-white">
              <p className="text-stone-600 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
