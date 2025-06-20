// app/apartment/[city]/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers Page Not Available | MyRoomie',
  description: 'We do not currently have a careers page. Check back later for opportunities at MyRoomie.',
};

export default function NoCareersPage() {
  return (
    <main className="bg-[#FDFBF7] text-gray-900 pt-24 pb-16 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">No Careers Page Available</h1>
        <p className="text-lg text-gray-700">
          Thanks for your interest in working with us! We currently do not have a careers page or any job listings.
          Please check back in the future for opportunities at MyRoomie.
        </p>
      </div>
    </main>
  );
}
