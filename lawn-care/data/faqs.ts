export interface FAQ {
  id: string
  question: string
  answer: string
  category: string
}

export const faqs: FAQ[] = [
  // Scheduling
  {
    id: 'sched-1',
    category: 'Scheduling',
    question: 'How do I book a service?',
    answer:
      "The easiest way is to fill out our online quote request form. We'll follow up within one business day to confirm your details and schedule a start date.",
  },
  {
    id: 'sched-2',
    category: 'Scheduling',
    question: 'Can I get a specific time for my appointment?',
    answer:
      "We offer morning and afternoon windows. Exact times vary based on routing, but we'll always give you a heads-up the evening before.",
  },
  {
    id: 'sched-3',
    category: 'Scheduling',
    question: 'What if I need to skip or cancel a visit?',
    answer:
      "Just let us know at least 24 hours in advance and we'll reschedule at no charge. Last-minute cancellations may incur a small fee.",
  },
  {
    id: 'sched-4',
    category: 'Scheduling',
    question: 'Do you work on weekends?',
    answer:
      'Yes — we operate Monday through Saturday. Sunday visits are available in some areas by request.',
  },
  // Billing
  {
    id: 'bill-1',
    category: 'Billing',
    question: 'How does billing work?',
    answer:
      'We invoice after each visit (or monthly for recurring contracts). We accept e-transfer, credit card, and cheque.',
  },
  {
    id: 'bill-2',
    category: 'Billing',
    question: 'Do you require a deposit?',
    answer:
      "One-time services don't require a deposit. Seasonal contracts may require a small deposit to hold your spot.",
  },
  {
    id: 'bill-3',
    category: 'Billing',
    question: "What's included in the quoted price?",
    answer:
      'Your quote covers all labour and standard equipment. Any additional materials (mulch, sod, seed, ice melt) are itemized separately.',
  },
  {
    id: 'bill-4',
    category: 'Billing',
    question: 'Do you offer discounts for seniors or referrals?',
    answer:
      'Yes — we offer a 10% senior discount and a referral credit for every new customer you send our way.',
  },
  // Weather
  {
    id: 'weather-1',
    category: 'Weather Policy',
    question: 'What happens if it rains on my scheduled day?',
    answer:
      "We'll reschedule for the next available dry day and notify you in advance. We never mow wet lawns — it causes damage and doesn't look good.",
  },
  {
    id: 'weather-2',
    category: 'Weather Policy',
    question: 'Do you work in all weather conditions?',
    answer:
      'We work in light rain and cool temperatures. We reschedule for heavy rain, thunderstorms, or conditions that would compromise quality or safety.',
  },
  {
    id: 'weather-3',
    category: 'Weather Policy',
    question: "What's your snow removal trigger?",
    answer:
      'We start clearing after 2cm of snowfall. We monitor forecasts closely and aim to have driveways clear before the morning commute.',
  },
  // Services
  {
    id: 'serv-1',
    category: 'Services',
    question: 'Are you insured?',
    answer:
      "Yes — we carry full commercial liability insurance. We're happy to provide proof of coverage upon request.",
  },
  {
    id: 'serv-2',
    category: 'Services',
    question: 'Do I need to be home during service?',
    answer:
      "No. As long as we have access to the areas we're servicing, we can complete the work without you being present. We'll send a completion note when we're done.",
  },
  {
    id: 'serv-3',
    category: 'Services',
    question: 'What areas do you serve?',
    answer:
      "We currently serve Waterloo, Kitchener, Cambridge, and Guelph. Not sure if we cover your street? Submit a quote and we'll confirm.",
  },
  {
    id: 'serv-4',
    category: 'Services',
    question: 'Can I bundle multiple services?',
    answer:
      'Absolutely. Many customers bundle aeration with overseeding, or fall cleanup with a final mow. Bundling often comes with a discount.',
  },
  {
    id: 'serv-5',
    category: 'Services',
    question: 'Do you handle commercial properties?',
    answer:
      'Currently we focus on residential properties. Contact us if you have a small commercial property — we assess these on a case-by-case basis.',
  },
]

export const faqCategories = Array.from(new Set(faqs.map((f) => f.category)))
