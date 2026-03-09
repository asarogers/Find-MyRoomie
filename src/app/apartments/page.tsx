import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Bay Area Apartments & Roommate Guides — All Neighborhoods | Find MyRoomie',
  description:
    'Browse verified roommate guides for every Bay Area city, neighborhood, and apartment complex. Free messaging, no subscription. SF, Oakland, San Jose, Cupertino, Sunnyvale, Fremont.',
  alternates: {
    canonical: 'https://findmyroomy.com/apartments/',
  },
  openGraph: {
    title: 'Bay Area Apartments & Roommate Guides | Find MyRoomie',
    description:
      'Verified roommate guides for every Bay Area city and apartment complex. Free to contact — no paywall, no subscription.',
    url: 'https://findmyroomy.com/apartments/',
    type: 'website',
  },
};

const CITY_PAGES = [
  { slug: 'san-francisco-ca', name: 'San Francisco', desc: 'Median rent $3,545 — roommate math makes it livable.' },
  { slug: 'oakland-ca', name: 'Oakland', desc: '40% lower rent than SF. Direct BART. Rooms from $900/mo.' },
  { slug: 'berkeley-ca', name: 'Berkeley', desc: 'UC Berkeley campus housing and shared flats.' },
  { slug: 'san-jose-ca', name: 'San Jose', desc: "Silicon Valley's most livable city. 20–25 min to Apple Park." },
  { slug: 'cupertino-ca', name: 'Cupertino', desc: 'Apple campus corridor. 2BR split saves $10,800/yr.' },
  { slug: 'sunnyvale-ca', name: 'Sunnyvale', desc: 'LinkedIn, Yahoo, Apple shuttle hub. Best commute math.' },
  { slug: 'santa-clara-ca', name: 'Santa Clara', desc: 'Intel campus, Levi\'s Stadium area. Strong value.' },
  { slug: 'fremont-ca', name: 'Fremont', desc: 'Lowest Bay Area per-person cost. Strong South Asian community.' },
  { slug: 'palo-alto-ca', name: 'Palo Alto', desc: 'Stanford corridor. Premium pricing, zero room to negotiate solo.' },
  { slug: 'mountain-view-ca', name: 'Mountain View', desc: 'Google campus. Caltrain. Tight supply.' },
];

const SF_GUIDES = [
  { slug: 'rooms-for-rent-san-francisco', name: 'Rooms for Rent in SF', desc: 'Every SF neighborhood with verified rent ranges.' },
  { slug: 'soma-788-san-francisco', name: 'SOMA 788', desc: '1 block from Caltrain. Rooftop pool. SoMa premium building.' },
  { slug: 'soma-residences-san-francisco', name: 'SOMA Residences', desc: 'Mid-market SoMa — transit access, honest pricing.' },
  { slug: 'soma-square-san-francisco', name: 'SOMA Square', desc: 'Large-format SoMa complex near Oracle Park.' },
  { slug: 'venn-on-market-san-francisco', name: 'Venn on Market', desc: 'Mission/Castro border. Best SF price arbitrage.' },
  { slug: 'ansel-hayes-valley-sf', name: 'Ansel Hayes Valley', desc: 'Design-forward Hayes Valley. Walkable to Civic Center.' },
  { slug: 'most-overrated-sf-apartments', name: 'Most Overrated SF Apartments', desc: 'Honest guide to which SF buildings charge too much.' },
  { slug: 'sf-apartment-value-guide', name: 'SF Apartment Value Guide', desc: 'Per-dollar breakdown of every SF neighborhood.' },
];

const SUNNYVALE_COMPLEXES = [
  { slug: 'the-crossings-sunnyvale', name: 'The Crossings Sunnyvale', desc: 'Near LinkedIn and Yahoo campus. Best Sunnyvale value.' },
  { slug: 'montclaire-sunnyvale', name: 'Montclaire Sunnyvale', desc: 'Near Caltrain. Quiet, well-managed complex.' },
  { slug: 'mission-pointe-sunnyvale', name: 'Mission Pointe Sunnyvale', desc: 'New construction near Apple shuttles.' },
  { slug: 'americana-sunnyvale', name: 'Americana Sunnyvale', desc: '55+ age-restricted. Not for tech workers — honest review.' },
  { slug: 'sunnyvale-no-ac-apartments', name: 'Sunnyvale No-AC Apartments', desc: 'Which Sunnyvale complexes lack air conditioning.' },
];

const SAN_JOSE_COMPLEXES = [
  { slug: 'miro-san-jose', name: 'Miro San Jose', desc: 'Downtown SJ high-rise. Walkable, transit-rich.' },
  { slug: 'neo-on-first-san-jose', name: 'Neo on First San Jose', desc: 'Modern downtown San Jose. Near SAP Center.' },
  { slug: 'crescent-village-san-jose', name: 'Crescent Village San Jose', desc: 'North SJ tech corridor. Near Cisco.' },
  { slug: 'the-fay-san-jose', name: 'The Fay San Jose', desc: 'Willow Glen-adjacent. Local neighborhood feel.' },
  { slug: 'north-san-jose-vs-downtown', name: 'North SJ vs Downtown', desc: 'Commute vs cost tradeoffs mapped.' },
  { slug: 'san-jose-foreclosure-tracker', name: 'SJ Foreclosure Tracker', desc: 'SJ distressed property data for opportunistic renters.' },
  { slug: 'reserve-mountain-view', name: 'Reserve Mountain View', desc: 'Near Google campus. Quiet residential, strong management.' },
];

const TECH_CAMPUS = [
  { slug: 'roommates-near-apple', name: 'Near Apple Park', desc: 'Cupertino + Sunnyvale commute and cost map.' },
  { slug: 'roommates-near-google', name: 'Near Google', desc: 'Mountain View campus. Commute corridors + split math.' },
  { slug: 'roommates-near-meta', name: 'Near Meta', desc: 'Menlo Park campus. Palo Alto corridor guide.' },
  { slug: 'roommates-near-nvidia', name: 'Near Nvidia', desc: 'Santa Clara campus. Roommate guide.' },
  { slug: 'roommates-near-cisco', name: 'Near Cisco', desc: 'North San Jose campus. Affordable corridor.' },
  { slug: 'roommates-near-salesforce', name: 'Near Salesforce', desc: 'SF Transbay district. Commute-first guide.' },
  { slug: 'roommates-near-oracle', name: 'Near Oracle', desc: 'Redwood City campus. Peninsula corridor.' },
  { slug: 'roommates-near-stanford', name: 'Near Stanford', desc: 'Palo Alto and Menlo Park. Student + postdoc guide.' },
  { slug: 'roommates-near-ucsf', name: 'Near UCSF', desc: 'Mission Bay and Parnassus campuses. Med student guide.' },
  { slug: 'roommates-near-stripe', name: 'Near Stripe', desc: 'South of Market SF. Startup corridor guide.' },
  { slug: 'roommates-near-uber', name: 'Near Uber', desc: 'Mission Bay SF campus. Roommate splits.' },
  { slug: 'roommates-near-airbnb', name: 'Near Airbnb', desc: 'SoMa SF campus. Verified roommate guide.' },
];

function PageGrid({ items }: { items: { slug: string; name: string; desc: string }[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {items.map((item) => (
        <Link
          key={item.slug}
          href={`/apartments/${item.slug}/`}
          className="block p-5 border border-gray-200 rounded-xl hover:border-purple-300 hover:bg-purple-50 transition-colors"
        >
          <div className="font-bold mb-1 text-gray-900">{item.name}</div>
          <div className="text-gray-500 text-sm">{item.desc}</div>
        </Link>
      ))}
    </div>
  );
}

export default function ApartmentsIndexPage() {
  return (
    <>
      <Navbar setIsOpen={() => {}} />

      <main className="min-h-screen bg-[#FDFBF7] text-gray-900">

        {/* Hero */}
        <section className="pt-28 pb-16 px-4 bg-white border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-amber-500 rounded-full" />
              <span className="text-sm font-semibold text-amber-700">No Subscription · No Paywall · Free to Message</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
              Bay Area Apartment &amp; Roommate Guides
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Verified guides for every Bay Area city, apartment complex, and tech campus corridor. Free to browse, free to message — no Roomster paywall.
            </p>
            <a
              href="https://forms.gle/qJQXtqEgHb45Y2Y8A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-purple-700 text-white font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-800 transition-colors"
            >
              Get Early Access — Free →
            </a>
          </div>
        </section>

        {/* Bay Area Cities */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-2">Bay Area Cities</h2>
            <p className="text-gray-600 mb-8">City-level roommate guides with neighborhood breakdowns, price data, and verified listings.</p>
            <PageGrid items={CITY_PAGES} />
          </div>
        </section>

        {/* SF Apartment Guides */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-2">San Francisco Apartment Guides</h2>
            <p className="text-gray-600 mb-8">Neighborhood-specific guides for SF buildings and rental markets.</p>
            <PageGrid items={SF_GUIDES} />
          </div>
        </section>

        {/* Sunnyvale Complexes */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-2">Sunnyvale Apartment Complexes</h2>
            <p className="text-gray-600 mb-8">Individual building reviews with roommate math for Sunnyvale&apos;s major complexes.</p>
            <PageGrid items={SUNNYVALE_COMPLEXES} />
          </div>
        </section>

        {/* San Jose Complexes */}
        <section className="py-16 px-4 bg-white border-y border-gray-100">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-2">San Jose Apartment Complexes</h2>
            <p className="text-gray-600 mb-8">Downtown, North SJ, and Willow Glen apartment guides with roommate context.</p>
            <PageGrid items={SAN_JOSE_COMPLEXES} />
          </div>
        </section>

        {/* Tech Campus Corridors */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-2">Roommates Near Tech Campuses</h2>
            <p className="text-gray-600 mb-8">Commute time + cost maps for every major Bay Area employer campus.</p>
            <PageGrid items={TECH_CAMPUS} />
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-20 px-4 bg-purple-700 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Find your verified Bay Area roommate — free</h2>
            <p className="text-purple-200 mb-8">
              Find MyRoomie is free to browse, post, and message. No Roomster paywall ($29.99/month). No Roomi subscription. Verified profiles only.
            </p>
            <a
              href="https://forms.gle/qJQXtqEgHb45Y2Y8A"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-4 rounded-lg text-lg hover:bg-purple-50 transition-colors"
            >
              Join the Verified Waitlist — Free →
            </a>
            <p className="text-purple-300 text-sm mt-3">Free messaging · Verified profiles · No subscription</p>
          </div>
        </section>

      </main>

      <Footer setIsOpen={() => {}} />
    </>
  );
}
