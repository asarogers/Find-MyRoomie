// app/apartment/[city]/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Find MyRoomy',
  description:
    'Read the terms and conditions for using Find MyRoomy. Understand your rights, responsibilities, and our policies before using our platform.',
};

export default function TermsAndConditionsPage() {
  return (
    <main className="bg-[#FDFBF7] text-gray-900 pt-24 pb-16 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl px-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Terms and Conditions</h1>

        <p className="text-sm text-gray-600 mb-8 text-center">
          Effective Date: [Insert Date]
        </p>

        <div className="space-y-6 text-gray-800 text-base leading-relaxed">
          <p>
            Welcome to <strong>Find MyRoomy</strong>. By accessing or using our website or mobile application (the "Platform"), you agree to be bound by the following Terms and Conditions.
          </p>

          <h2 className="text-xl font-semibold">1. Eligibility</h2>
          <p>You must be at least 18 years old to use Find MyRoomy.</p>

          <h2 className="text-xl font-semibold">2. Account Registration</h2>
          <p>
            You are responsible for keeping your login credentials secure and for all activity under your account.
          </p>

          <h2 className="text-xl font-semibold">3. Acceptable Use</h2>
          <p>
            You agree not to post harmful, misleading, or illegal content, and not to impersonate others or misuse the platform.
          </p>

          <h2 className="text-xl font-semibold">4. Listings and Matches</h2>
          <p>
            We do not guarantee the accuracy of user profiles or listings. Use caution and good judgment when interacting with others.
          </p>

          <h2 className="text-xl font-semibold">5. Payments</h2>
          <p>
            Premium features may involve payment. All charges are non-refundable unless stated otherwise.
          </p>

          <h2 className="text-xl font-semibold">6. Content Ownership</h2>
          <p>
            You retain rights to your posted content but grant us a license to use it within the Platform.
          </p>

          <h2 className="text-xl font-semibold">7. Privacy</h2>
          <p>
            Please review our <a href="/privacy" className="text-blue-600 underline">Privacy Policy</a> for details on how your data is used.
          </p>

          <h2 className="text-xl font-semibold">8. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access at any time for any violation of these Terms.
          </p>

          <h2 className="text-xl font-semibold">9. Disclaimers</h2>
          <p>
            The Platform is provided "as is" without warranties of any kind.
          </p>

          <h2 className="text-xl font-semibold">10. Limitation of Liability</h2>
          <p>
            Find MyRoomy is not liable for indirect or consequential damages resulting from your use of the Platform.
          </p>

          <h2 className="text-xl font-semibold">11. Governing Law</h2>
          <p>
            These Terms are governed by the laws of [Insert State], without regard to conflicts of law.
          </p>

          <h2 className="text-xl font-semibold">12. Contact Us</h2>
          <p>
            Questions? Email us at <a href="mailto:support@findmyroomy.com" className="text-blue-600 underline">support@findmyroomy.com</a>.
          </p>
        </div>
      </div>
    </main>
  );
}
