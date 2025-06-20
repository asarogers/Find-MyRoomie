// app/cookie-policy/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy Coming Soon | MyRoomie',
  description: 'Our cookie policy is currently being finalized. Check back soon to learn how we use cookies on our site.',
};

export default function CookiePolicyComingSoon() {
  return (
    <main className="bg-[#FDFBF7] text-gray-900 pt-24 pb-16 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Cookie Policy Coming Soon</h1>
        <p className="text-lg text-gray-700">
          We’re working on our cookie policy to explain how we use cookies to enhance your experience on MyRoomie.
          Please check back soon for full details.
        </p>
      </div>
    </main>
  );
}
