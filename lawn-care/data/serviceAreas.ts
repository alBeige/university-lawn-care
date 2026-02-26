export interface ServiceArea {
  city: string
  region: string
  postalPrefixes: string[]
  description: string
  active: boolean
}

export const serviceAreas: ServiceArea[] = [
  {
    city: 'Waterloo',
    region: 'Waterloo Region',
    postalPrefixes: ['N2J', 'N2K', 'N2L', 'N2T', 'N2V'],
    description: 'Full service coverage across all Waterloo neighbourhoods.',
    active: true,
  },
  {
    city: 'Kitchener',
    region: 'Waterloo Region',
    postalPrefixes: ['N2A', 'N2B', 'N2C', 'N2E', 'N2G', 'N2H', 'N2M', 'N2N', 'N2P', 'N2R'],
    description: 'Complete residential coverage throughout Kitchener.',
    active: true,
  },
  {
    city: 'Cambridge',
    region: 'Waterloo Region',
    postalPrefixes: ['N1P', 'N1R', 'N1S', 'N1T', 'N3C', 'N3E', 'N3H'],
    description: 'Serving Cambridge and surrounding areas.',
    active: true,
  },
  {
    city: 'Guelph',
    region: 'Wellington County',
    postalPrefixes: ['N1E', 'N1G', 'N1H', 'N1K', 'N1L'],
    description: 'Growing coverage across Guelph residential neighbourhoods.',
    active: true,
  },
]

export function isPostalCodeServiceable(postalCode: string): boolean {
  const prefix = postalCode.toUpperCase().replace(/\s/g, '').slice(0, 3)
  return serviceAreas.some((area) =>
    area.active && area.postalPrefixes.includes(prefix)
  )
}
