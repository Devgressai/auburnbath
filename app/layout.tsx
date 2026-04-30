import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { MobileStickyCTA } from "@/components/mobile-sticky-cta";
import { jsonLdScript, localBusinessSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Bathroom Remodeling in Auburn, CA`,
    template: `%s | ${site.name}`,
  },
  description: site.defaultDescription,
  applicationName: site.name,
  keywords: [
    "bathroom remodeling Auburn CA",
    "shower remodeling Auburn CA",
    "tub to shower conversion Auburn CA",
    "walk-in shower Auburn CA",
    "bathroom contractor Auburn CA",
    "Placer County bathroom remodel",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Bathroom Remodeling in Auburn, CA`,
    description: site.defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Bathroom Remodeling in Auburn, CA`,
    description: site.defaultDescription,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
  verification: {
    google: site.gscVerification,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-forest focus:text-white focus:px-4 focus:py-2"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1 pb-24 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileStickyCTA />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(localBusinessSchema())}
        />
      </body>
    </html>
  );
}
