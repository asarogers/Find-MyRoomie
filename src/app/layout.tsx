import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Find MyRoomy - Find your vibe. Find your space.",
    template: "%s - Find MyRoomy"
  },
  description:
    "The safe, real, and functional way to find compatible roommates and apply to apartments together. No fake profiles, no hidden fees, no broken filters.",
  metadataBase: new URL("https://findmyroomy.com"),
  openGraph: {
    type: "website",
    url: "https://findmyroomy.com/",
    title: "Find Roommates Near You | Find MyRoomy",
    description:
      "Find compatible roommates in your city. Safe, easy, and free roommate matching and apartment finding.",
    images: ["https://findmyroomy.com/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Your Ideal Roommate | Find MyRoomy",
    description:
      "No drama. No bots. Just real people looking for real roommates.",
    images: ["https://findmyroomy.com/og-preview.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isProduction = process.env.NODE_ENV === 'production';
  
  return (
    <html lang="en">
      <head>
        {/* Charset and Viewport */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Title and Meta Description */}
        <title>Find MyRoomy – Find your vibe. Find your space.</title>
        <meta
          name="description"
          content="The safe, real, and functional way to find compatible roommates and apply to apartments together."
        />

        {/* Keywords, Author, Publisher */}
        <meta
          name="keywords"
          content="roommate finder, find roommates, apartment share, verified roommates, roommate app"
        />
        <meta name="author" content="Find MyRoomy" />
        <meta name="publisher" content="Find MyRoomy" />

        {/* Canonical */}
        <link rel="canonical" href="https://findmyroomy.com" />

        {/* Sitemap and RSS */}
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS Feed"
          href="/rss.xml"
        />

        {/* Favicon & Manifest */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Find MyRoomy – Find your vibe. Find your space."
        />
        <meta
          property="og:description"
          content="The safe, real, and functional way to find compatible roommates and apply to apartments together."
        />
        <meta property="og:url" content="https://findmyroomy.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://findmyroomy.com/social-preview.png"
        />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Find MyRoomy – Find your vibe. Find your space."
        />
        <meta
          name="twitter:description"
          content="The safe, real, and functional way to find compatible roommates and apply to apartments together."
        />
        <meta
          name="twitter:image"
          content="https://findmyroomy.com/social-preview.png"
        />

        {/* Structured Data – JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "FindMyRoomy",
              url: "https://findmyroomy.com",
              description:
                "The safe, real, and functional way to find compatible roommates and apply to apartments together.",
              logo: "https://findmyroomy.com/logo.png",
              sameAs: [
                "https://facebook.com/findmyroomy",
                "https://instagram.com/findmyroomy",
                "https://twitter.com/findmyroomy",
                "https://linkedin.com/company/findmyroomy",
              ],
            }),
          }}
        />

        {/* Performance Hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        /> */}
        
        {/* Only preload in production or if file exists */}
        {isProduction && (
          <link rel="preload" as="image" href="/social-preview.png" />
        )}

        {/* Content Security Policy - Only in production */}
        {isProduction && (
  <meta
    httpEquiv="Content-Security-Policy"
    content="
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com;
      style-src 'self' 'unsafe-inline';
      img-src * data:;
      connect-src 'self' https://www.google-analytics.com https://api.mapbox.com https://viscgyefdktuymldptuz.supabase.co;
      frame-src https://www.googletagmanager.com;
      worker-src 'self' blob:;
    "
  />
)}


        {/* Google Analytics - Only in production */}
        {isProduction && (
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-DZ7XR9RW3T"
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-DZ7XR9RW3T');
                `,
              }}
            />
          </>
        )}
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}