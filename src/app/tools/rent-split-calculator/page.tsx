import type { Metadata } from 'next';
import RentSplitCalculatorContent from './RentSplitCalculatorContent';

export const metadata: Metadata = {
  title: 'Rent Split Calculator — Fair Split by Income or Room Size | Find MyRoomie',
  description:
    'Calculate a fair rent split three ways: equal, by income, or by room size. Free calculator for Bay Area roommates. See exactly what each person should pay.',
  alternates: {
    canonical: 'https://findmyroomy.com/tools/rent-split-calculator/',
  },
  openGraph: {
    title: 'Rent Split Calculator — Fair Split by Income or Room Size',
    description:
      'Stop guessing. Calculate a fair rent split by equal share, income proportion, or room square footage. Free tool for Bay Area roommates.',
    url: 'https://findmyroomy.com/tools/rent-split-calculator/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rent Split Calculator | Find MyRoomie',
    description: 'Equal, income-based, or room-size-based rent splits. Free calculator.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do you split rent fairly between roommates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There are three fair methods: (1) Equal split — everyone pays the same. Simple, but ignores room size differences. (2) Income-based split — each person pays a proportion of their income. Fairer when incomes differ significantly. (3) Room-size split — proportional to square footage. Best when rooms are noticeably different sizes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the fairest way to split rent with unequal rooms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The room-size method is most defensible: divide each room's square footage by the total square footage of all rooms, then multiply by total rent. For a 2BR where one room is 200 sqft and the other is 150 sqft: the larger room pays 200/350 = 57% of rent, the smaller pays 43%.",
      },
    },
    {
      '@type': 'Question',
      name: 'Should rent be split by income?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Income-based splitting is fairest when roommates have significantly different salaries. It means each person pays the same percentage of their income on housing — which many people consider the most equitable approach. Use our income-based calculator to see what that looks like for your specific situation.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a roommate save you in the Bay Area?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "San Francisco median rent is $3,545/month (Dec 2025). Splitting a 2BR saves approximately $1,772/month — or $21,264/year. In Oakland, splitting a 2BR saves roughly $1,200–$1,400/month vs living alone. Use the Bay Area savings section of our calculator to see your specific savings.",
      },
    },
    {
      '@type': 'Question',
      name: 'What should a roommate agreement cover beyond rent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A complete roommate agreement should cover: rent amount and due date per person, utility split method, guest policy, cleaning responsibilities, quiet hours, kitchen use, and what happens if one person needs to leave early. Find MyRoomie offers a free California-compliant roommate agreement template.",
      },
    },
  ],
};

export default function RentSplitCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <RentSplitCalculatorContent />
    </>
  );
}
