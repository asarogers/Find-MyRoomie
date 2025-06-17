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

export const metadata = {
  title: "Find MyRoomy - Find your vibe. Find your space.",
  description: "The safe, real, and functional way to find compatible roommates and apply to apartments together. No fake profiles, no hidden fees, no broken filters.",
  metadataBase: new URL("https://findmyroomy.com"),
  openGraph: {
    type: "website",
    url: "https://findmyroomy.com/",
    title: "Find Roommates Near You | Find MyRoomy",
    description: "Find compatible roommates in your city. Safe, easy, and free roommate matching and apartment finding.",
    images: ["https://findmyroomy.com/og-preview.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Your Ideal Roommate | Find MyRoomy",
    description: "No drama. No bots. Just real people looking for real roommates.",
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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
