// src/app/neighborhoods/page.tsx
import { getAllNeighborhoods } from '@/components/_data/neighborhoods'
import NeighborhoodListClient from './NeighborhoodListClient'

export const dynamic = 'force-static'

export const metadata = {
  title: 'Bay Area Neighborhood Guides for Roommate Seekers (2026) | MyRoomy',
  description:
    'SoMa, Mission, Hayes Valley, Rockridge, North San Jose — rent ranges, transit, employer proximity, and how to find a verified roommate in each Bay Area neighborhood.',
  alternates: { canonical: 'https://findmyroomy.com/neighborhoods' },
}

export default function NeighborhoodListPage() {
  const neighborhoods = getAllNeighborhoods()
  return <NeighborhoodListClient neighborhoods={neighborhoods} />
}
