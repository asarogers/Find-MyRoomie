'use client';

export default function Error() {
  return (
    <html lang="en">
      <body>
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', backgroundColor: '#FDFBF7', color: '#111' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 800, marginBottom: '1rem' }}>500</h1>
          <p style={{ fontSize: '1.25rem', color: '#555', marginBottom: '2rem' }}>Something went wrong.</p>
          <a href="/" style={{ backgroundColor: '#6d28d9', color: '#fff', padding: '0.75rem 2rem', borderRadius: '0.5rem', fontWeight: 700, textDecoration: 'none' }}>
            Go home →
          </a>
        </main>
      </body>
    </html>
  );
}
