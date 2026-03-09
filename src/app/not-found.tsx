'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', backgroundColor: '#FDFBF7', color: '#111' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>404</h1>
          <p style={{ fontSize: '1.25rem', color: '#555', marginBottom: '2rem' }}>Page not found.</p>
          <Link href="/" style={{ backgroundColor: '#6d28d9', color: '#fff', padding: '0.75rem 2rem', borderRadius: '0.5rem', fontWeight: 700, textDecoration: 'none' }}>
            Go home →
          </Link>
        </main>
      </body>
    </html>
  );
}
