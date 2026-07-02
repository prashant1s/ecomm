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
  metadataBase: new URL("https://jiyajr.com"), 
  
  title: {
    default: "Jiya JR | Premium Collections & Craftsmanship",
    template: "%s | Jiya JR", // This makes other pages look like "Shop | Jiya JR"
  },
  description: "Discover Jiya JR's carefully curated premium collections and custom craftsmanship. Decades of trusted service delivering excellence across India.",
  keywords: ["Jiya JR", "Premium Collections", "Custom Craftsmanship", "India", "E-commerce"],
  authors: [{ name: "Jiya JR" }],
  creator: "Jiya JR",
  
  // Controls how your link looks when shared on WhatsApp, Facebook, LinkedIn, etc.
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jiyajr.com",
    title: "Jiya JR | Premium Collections",
    description: "Decades of craftsmanship, trusted service, and carefully curated premium collections.",
    siteName: "Jiya JR",
    images: [
      {
        url: "/icon512x512.png",
        width: 512,
        height: 512,
        alt: "Jiya JR Logo",
      },
    ],
  },
  
  // Controls how your link looks when shared on Twitter/X
  twitter: {
    card: "summary_large_image",
    title: "Jiya JR | Premium Collections",
    description: "Decades of craftsmanship, trusted service, and carefully curated premium collections.",
    images: ["/icon512x512.png"],
  },
  
  // Search engine crawler instructions
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  
  icons: {
    icon: "/icon512x512.png",
    apple: "/apple-touch-icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}