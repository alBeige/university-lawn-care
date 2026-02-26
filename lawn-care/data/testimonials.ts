export interface Testimonial {
  id: string
  name: string
  location: string
  rating: number
  text: string
  service: string
  date: string
  initials: string
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Margaret T.',
    location: 'Waterloo, ON',
    rating: 5,
    text: "I've been using University Lawn Care for two seasons now and they never miss a beat. My lawn has never looked better — the neighbours keep asking who does my yard.",
    service: 'Lawn Mowing',
    date: '2024-08-12',
    initials: 'MT',
  },
  {
    id: '2',
    name: 'Derek L.',
    location: 'Kitchener, ON',
    rating: 5,
    text: 'Booked spring cleanup on short notice and they came within three days. Thorough, professional, and left the yard spotless. Will be calling them every spring.',
    service: 'Spring Cleanup',
    date: '2024-05-03',
    initials: 'DL',
  },
  {
    id: '3',
    name: 'Susan M.',
    location: 'Cambridge, ON',
    rating: 5,
    text: 'Very impressed. Punctual, communicative, and clearly take pride in their work. The aeration and overseeding combo transformed my patchy back lawn.',
    service: 'Aeration & Overseeding',
    date: '2024-09-18',
    initials: 'SM',
  },
  {
    id: '4',
    name: 'Paul R.',
    location: 'Guelph, ON',
    rating: 4,
    text: "Great value for the quality of work. They flagged a drainage issue I hadn't even noticed. Appreciated the extra attention to detail.",
    service: 'Lawn Mowing',
    date: '2024-07-22',
    initials: 'PR',
  },
  {
    id: '5',
    name: 'Linda K.',
    location: 'Waterloo, ON',
    rating: 5,
    text: "I was skeptical about a student-run company at first, but they're completely professional. Snow removal this past winter was flawless — never had to worry about my driveway once.",
    service: 'Snow Removal',
    date: '2024-02-05',
    initials: 'LK',
  },
  {
    id: '6',
    name: 'James W.',
    location: 'Kitchener, ON',
    rating: 5,
    text: 'Honest pricing, zero upselling, and a really clean finish every time. Exactly what you want from a local lawn care company.',
    service: 'Lawn Mowing',
    date: '2024-06-30',
    initials: 'JW',
  },
  {
    id: '7',
    name: 'Anita B.',
    location: 'Cambridge, ON',
    rating: 5,
    text: 'Sod installation was seamless. They handled everything from removing the old lawn to laying and rolling the new sod. Within a month it looked like it had always been there.',
    service: 'Sod Installation',
    date: '2024-06-10',
    initials: 'AB',
  },
  {
    id: '8',
    name: 'Tom H.',
    location: 'Guelph, ON',
    rating: 4,
    text: "Reliable, affordable, and they actually show up when they say they will. That alone puts them ahead of most services I've tried.",
    service: 'Fall Cleanup',
    date: '2024-10-28',
    initials: 'TH',
  },
]
