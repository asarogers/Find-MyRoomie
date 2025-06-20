// app/apartment/[city]/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy Coming Soon | MyRoomie',
  description: 'Our privacy policy is currently being prepared. We’ll publish it soon to ensure transparency and compliance.',
};

export default function PrivacyPolicyComingSoon() {
  return (
    <main className="bg-[#FDFBF7] text-gray-900 pt-24 pb-16 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy Coming Soon</h1>
        <p className="text-lg text-gray-700">
          We’re currently working on our privacy policy to ensure transparency and compliance with data protection laws.
          Please check back soon for the full details.
        </p>
      </div>
    </main>
  );
}
