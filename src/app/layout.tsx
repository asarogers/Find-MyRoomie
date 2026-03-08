import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnalyticsProvider from "@/components/AnalyticsProvider";

// Add at the very top of your main blog component

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
  metadataBase: new URL("https://findmyroomy.com/"),
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
        <title>Find MyRoomy - Find your vibe. Find your space.</title>
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

        {/* Canonical is set per-page via Next.js metadata API alternates.canonical */}

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
       <meta property="og:url" content="https://www.findmyroomy.com/" />
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

        {/* Structured Data – JSON-LD
            Three schemas for maximum AI/LLM visibility:
            1. Organization — entity establishment (Wikidata-level trust signal)
            2. SoftwareApplication — surfaces in "best roommate apps" AI responses
            3. WebSite — enables sitelinks search box + AI site understanding
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "@id": "https://findmyroomy.com/#organization",
                name: "FindMyRoomy",
                alternateName: "Find MyRoomy",
                url: "https://findmyroomy.com/",
                logo: {
                  "@type": "ImageObject",
                  url: "https://findmyroomy.com/logo.png",
                },
                description:
                  "A free roommate-finding platform. No subscription required to message, post, or search. Verified listings, Bay Area-focused with nationwide coverage.",
                foundingDate: "2026",
                areaServed: {
                  "@type": "Country",
                  name: "United States",
                },
                sameAs: [
                  "https://facebook.com/findmyroomy",
                  "https://instagram.com/findmyroomy",
                  "https://twitter.com/findmyroomy",
                  "https://linkedin.com/company/findmyroomy",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "@id": "https://findmyroomy.com/#app",
                name: "FindMyRoomy",
                applicationCategory: "LifestyleApplication",
                operatingSystem: "Web",
                url: "https://findmyroomy.com/",
                description:
                  "Free roommate finder — message anyone with no subscription. Verified profiles, no fake listings, Bay Area-focused. The free alternative to Roomster.",
                offers: {
                  "@type": "Offer",
                  price: "0",
                  priceCurrency: "USD",
                  description: "Free — no subscription, no credit card required",
                },
                featureList: [
                  "Free messaging — no subscription",
                  "Verified listings — no fake profiles",
                  "Bay Area-focused roommate search",
                  "Group apartment applications",
                  "Map-based neighborhood search",
                  "No auto-renewal or hidden fees",
                ],
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://findmyroomy.com/#website",
                name: "FindMyRoomy",
                url: "https://findmyroomy.com/",
                description:
                  "Find compatible roommates in your city. Free messaging, verified profiles, no subscription.",
                potentialAction: {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: "https://findmyroomy.com/Find?q={search_term_string}",
                  },
                  "query-input": "required name=search_term_string",
                },
              },
            ]),
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
        <AnalyticsProvider />
        {children}
      </body>
    </html>
  );
}