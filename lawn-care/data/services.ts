// Updated paths & rebuild trigger
// (automatically added by bot to force Vercel redeploy)
export interface ServiceFAQ {
  question: string
  answer: string
}

export interface Service {
  slug: string
  name: string
  tagline: string
  description: string
  heroImage: string
  icon: string
  includes: string[]
  idealFor: string[]
  pricingNote: string
  faqs: ServiceFAQ[]
  featured: boolean
}

export const services: Service[] = [
  {
    slug: 'lawn-mowing',
    name: 'Lawn Mowing & Maintenance',
    tagline: 'A consistently clean cut, every visit.',
    description:
      'Keep your lawn looking its best with our reliable mowing and maintenance service. We show up on schedule, cut to the ideal height for your grass type, and leave your yard looking sharp — no excuses, no shortcuts.',
    heroImage: '/images/stock-photos/adlan-D5yUNyV30oE-unsplash.jpg',
    icon: '🌿',
    includes: [
      'Mowing to optimal grass height',
      'Edging along walkways and driveways',
      'Trimming around obstacles and beds',
      'Blowing clippings off hard surfaces',
      'Gate latch left exactly as found',
    ],
    idealFor: [
      'Homeowners who want a hands-off, reliable service',
      'Rental property owners',
      'Anyone with a busy schedule',
    ],
    pricingNote:
      'Pricing is based on lot size and mowing frequency. Get a free quote and lock in your rate for the season.',
    faqs: [
      {
        question: 'How often will you mow?',
        answer:
          'We recommend weekly or bi-weekly visits depending on your grass growth rate. We\'ll advise the best cadence after seeing your property.',
      },
      {
        question: 'Do you bag the clippings?',
        answer:
          'We mulch clippings back into the lawn by default — it\'s better for soil health. Bagging is available upon request.',
      },
      {
        question: 'What happens if it rains on my scheduled day?',
        answer:
          'We\'ll reschedule for the next available dry day and notify you in advance. We never mow wet grass that could cause ruts or damage.',
      },
    ],
    featured: true,
  },
  {
    slug: 'spring-cleanup',
    name: 'Spring Cleanup',
    tagline: 'Wake your yard up right.',
    description:
      'After a long winter, your lawn needs a fresh start. Our spring cleanup removes debris, clears dead growth, and prepares your turf and beds for a healthy growing season.',
    heroImage: '/images/stock-photos/anastasiya-badun-ZsWQ9cK9kKo-unsplash.jpg',
    icon: '🌱',
    includes: [
      'Leaf and debris removal from lawn and beds',
      'Cutting back perennials and ornamental grasses',
      'Edge cleanup along walkways',
      'Raking and dethatching light thatch',
      'Haul-away of collected material',
    ],
    idealFor: [
      'Homeowners coming out of winter',
      'Properties with heavy tree coverage',
      'Anyone who wants a clean slate heading into summer',
    ],
    pricingNote:
      'Quoted per property based on size, debris volume, and scope of work.',
    faqs: [
      {
        question: 'When should I book spring cleanup?',
        answer:
          'Book early — spots fill quickly in April. We typically begin bookings in March for late-April and early-May service.',
      },
      {
        question: 'Do you haul away everything?',
        answer:
          'Yes. All collected material is bagged and hauled away as part of the service.',
      },
    ],
    featured: true,
  },
  {
    slug: 'fall-cleanup',
    name: 'Fall Cleanup',
    tagline: 'Protect your lawn through winter.',
    description:
      'Leaving leaves and debris on your lawn over winter smothers grass and invites disease. Our fall cleanup clears everything out so your turf emerges healthy come spring.',
    heroImage: '/images/stock-photos/daniel-watson-8vBpYpTGo90-unsplash.jpg',
    icon: '🍂',
    includes: [
      'Complete leaf removal from lawn and beds',
      'Final mow at reduced height',
      'Edging and trimming',
      'Clearing gutters (add-on available)',
      'Haul-away of all debris',
    ],
    idealFor: [
      'Properties surrounded by deciduous trees',
      'Homeowners preparing for winter',
      'Anyone who wants one less thing to worry about in fall',
    ],
    pricingNote:
      'Based on property size and leaf volume. Book before peak season for best availability.',
    faqs: [
      {
        question: 'How many visits does fall cleanup require?',
        answer:
          'Most properties benefit from two visits — one in mid-fall and a final pass after peak leaf drop.',
      },
      {
        question: 'Can I bundle fall cleanup with aeration?',
        answer:
          'Absolutely. Many customers combine fall cleanup with aeration and overseeding for optimal results.',
      },
    ],
    featured: true,
  },
  {
    slug: 'aeration',
    name: 'Core Aeration',
    tagline: 'Let your roots breathe.',
    description:
      'Compacted soil suffocates grass roots and prevents water and nutrients from penetrating. Core aeration pulls small plugs from the soil, improving airflow and allowing your lawn to thrive.',
    heroImage: '/images/stock-photos/j-kaur-_yxMydB9Zac-unsplash.jpg',
    icon: '🔵',
    includes: [
      'Full core aeration of entire lawn area',
      'Plugs left to break down naturally',
      'Flag marking of sprinkler heads and obstacles',
      'Before/after notes on soil compaction',
    ],
    idealFor: [
      'Lawns with heavy foot traffic or clay soil',
      'Thin or patchy grass that isn\'t responding to fertilizer',
      'Anyone prepping for overseeding',
    ],
    pricingNote:
      'Flat-rate pricing by lot size. Discounts available when bundled with overseeding.',
    faqs: [
      {
        question: 'When is the best time to aerate?',
        answer:
          'Fall is ideal for cool-season grasses. Spring is second best. Avoid aerating during drought or extreme heat.',
      },
      {
        question: 'Should I water before aeration?',
        answer:
          'Yes — moist soil allows tines to penetrate deeper. We\'ll advise you on timing before your appointment.',
      },
    ],
    featured: false,
  },
  {
    slug: 'dethatching',
    name: 'Dethatching',
    tagline: 'Clear the clutter between the blades.',
    description:
      'Thatch is the layer of dead grass stems and roots that builds up between your living turf and the soil. A thick thatch layer blocks water, air, and nutrients. Dethatching clears it out so your lawn can flourish.',
    heroImage: '/images/stock-photos/jake-nackos-C2PCa6DhlYE-unsplash.jpg',
    icon: '🌾',
    includes: [
      'Power rake or dethatch pass across entire lawn',
      'Collection and removal of loosened thatch',
      'Assessment of thatch depth before and after',
    ],
    idealFor: [
      'Lawns with a thatch layer exceeding half an inch',
      'Grass that looks spongy or bouncy underfoot',
      'Lawns that water pools on after rain',
    ],
    pricingNote:
      'Quoted per property. Often bundled with spring cleanup or aeration.',
    faqs: [
      {
        question: 'How do I know if I need dethatching?',
        answer:
          'Push a finger into your lawn. If there\'s a spongy layer more than half an inch thick above the soil, it\'s time to dethatch.',
      },
      {
        question: 'Will dethatching damage my lawn?',
        answer:
          'It can cause temporary stress, but a healthy lawn recovers quickly — especially if followed by overseeding and watering.',
      },
    ],
    featured: false,
  },
  {
    slug: 'overseeding',
    name: 'Overseeding',
    tagline: 'Fill in the gaps for a fuller lawn.',
    description:
      'Thin, patchy lawns benefit enormously from overseeding. We spread premium grass seed over your existing turf to thicken it up, improve drought resistance, and crowd out weeds naturally.',
    heroImage: '/images/stock-photos/michael-kahn-xWAsrLw_1hk-unsplash.jpg',
    icon: '🌱',
    includes: [
      'Soil preparation and light scarification',
      'Premium seed blend matched to your lawn type',
      'Even spread across target areas',
      'Starter fertilizer application',
      'Watering instructions provided',
    ],
    idealFor: [
      'Thin or worn lawns',
      'Lawns recovering from drought or disease',
      'Properties wanting to crowd out weeds naturally',
    ],
    pricingNote:
      'Based on area to be seeded and seed variety. Bundled pricing available with aeration.',
    faqs: [
      {
        question: 'When should I overseed?',
        answer:
          'Early fall is the ideal window for cool-season grasses — warm soil, cool air, and reliable moisture.',
      },
      {
        question: 'How long until I see results?',
        answer:
          'Most seed germinates in 7–14 days with consistent watering. Full fill-in takes 4–6 weeks.',
      },
    ],
    featured: false,
  },
  {
    slug: 'fertilizing-weed-control',
    name: 'Fertilizing & Weed Control',
    tagline: 'Feed the good, fight the bad.',
    description:
      'A tailored fertilization and weed control program gives your lawn the nutrients it needs while keeping invasive weeds from taking over. We create a plan specific to your soil and grass type.',
    heroImage: '/images/stock-photos/michael-smith-1MNJ9y1Wr50-unsplash.jpg',
    icon: '💧',
    includes: [
      'Soil assessment and customized treatment plan',
      'Slow-release granular fertilizer application',
      'Broadleaf weed spot treatment',
      'Pre-emergent weed control (seasonal)',
      'Application records and notes provided',
    ],
    idealFor: [
      'Lawns with visible nutrient deficiencies (yellowing, slow growth)',
      'Properties with persistent broadleaf weeds',
      'Anyone wanting a season-long program',
    ],
    pricingNote:
      'Available as a one-time service or seasonal program (spring, summer, fall applications).',
    faqs: [
      {
        question: 'Is the fertilizer safe for pets and kids?',
        answer:
          'Yes. We use professional-grade, low-toxicity products and always advise a short re-entry window after application.',
      },
      {
        question: 'Will one application fix my weeds?',
        answer:
          'Persistent weeds often need multiple treatments. Our seasonal program is the most effective long-term solution.',
      },
    ],
    featured: false,
  },
  {
    slug: 'sod-installation',
    name: 'Sod Installation',
    tagline: 'Instant lawn, lasting results.',
    description:
      'When you need a full lawn fast, sod delivers. We handle everything from site preparation and grading to laying and rolling premium sod, so you can enjoy a lush yard without the wait.',
    heroImage: '/images/stock-photos/adlan-D5yUNyV30oE-unsplash.jpg',
    icon: '🟩',
    includes: [
      'Site preparation and existing turf removal',
      'Grading and leveling',
      'Premium sod selection and delivery',
      'Professional laying and seam alignment',
      'Rolling and initial watering',
      'Aftercare instructions',
    ],
    idealFor: [
      'New construction properties',
      'Lawns damaged beyond repair by drought, disease, or wear',
      'Homeowners wanting instant results',
    ],
    pricingNote:
      'Custom quoted based on area, grading requirements, and sod variety.',
    faqs: [
      {
        question: 'How soon can I use my lawn after sod installation?',
        answer:
          'We recommend staying off the lawn for 2–3 weeks to allow roots to establish. We\'ll give you a detailed aftercare plan.',
      },
      {
        question: 'What type of sod do you use?',
        answer:
          'We source premium locally-grown sod varieties suited to our climate and your specific conditions.',
      },
    ],
    featured: false,
  },
  {
    slug: 'garden-bed-maintenance',
    name: 'Garden & Bed Maintenance',
    tagline: 'Polished beds, zero effort from you.',
    description:
      'Overgrown garden beds drag down an otherwise great yard. We keep your beds weeded, edged, and mulched so they frame your home beautifully all season long.',
    heroImage: '/images/stock-photos/anastasiya-badun-ZsWQ9cK9kKo-unsplash.jpg',
    icon: '🌸',
    includes: [
      'Hand weeding of all bed areas',
      'Deadheading and light pruning',
      'Sharp bed edging',
      'Mulch top-up (material extra)',
      'Plant health assessment',
    ],
    idealFor: [
      'Homeowners with established garden beds',
      'Properties with ornamental plantings',
      'Anyone who loves the look of clean beds but hates the work',
    ],
    pricingNote:
      'Per-visit pricing based on number and size of beds. Seasonal maintenance packages available.',
    faqs: [
      {
        question: 'Do you plant annuals or perennials?',
        answer:
          'We focus on maintenance. For planting new plants, we can provide a referral to a local garden center.',
      },
    ],
    featured: false,
  },
  {
    slug: 'snow-removal',
    name: 'Snow Removal',
    tagline: 'Safe, clear, and stress-free all winter.',
    description:
      'Don\'t battle the cold yourself. Our snow removal service keeps your driveway, walkways, and steps clear after every significant snowfall — so you can get on with your day.',
    heroImage: '/images/stock-photos/daniel-watson-8vBpYpTGo90-unsplash.jpg',
    icon: '❄️',
    includes: [
      'Driveway clearing after every 2cm+ snowfall',
      'Walkway and front step shoveling',
      'Ice melt application on high-risk surfaces',
      'Priority service after major storms',
      'Seasonal contracts available',
    ],
    idealFor: [
      'Homeowners who want reliable winter coverage',
      'Elderly or mobility-limited residents',
      'Rental property owners needing liability management',
    ],
    pricingNote:
      'Available as per-visit or full-season contract. Season contracts offer the best value and priority scheduling.',
    faqs: [
      {
        question: 'What\'s the trigger depth for a visit?',
        answer:
          'We clear after 2cm of accumulation by default. Custom triggers can be arranged for seasonal contracts.',
      },
      {
        question: 'Do you offer seasonal contracts?',
        answer:
          'Yes — seasonal contracts lock in your rate and ensure you\'re first on our route after a storm.',
      },
    ],
    featured: false,
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getFeaturedServices(): Service[] {
  return services.filter((s) => s.featured)
}
