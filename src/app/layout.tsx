import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/hooks/useTheme";
import { CursorProvider } from "@/hooks/useCursor";
import { SmoothScroll } from "@/hooks/useLenis";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://qfive.in"),
  title: {
    default: "Qfive — Digital & Creative Agency in Chandigarh",
    template: "%s | Qfive Agency",
  },
  description:
    "Qfive is a Chandigarh-based digital and creative agency bringing Marketing, Software Development, and Video Production together under one in-house team. 15+ years experience.",
  keywords: [
    "Qfive",
    "Digital Agency Chandigarh",
    "Software Development Chandigarh",
    "Performance Marketing India",
    "Video Production Chandigarh",
    "React Native App Developers",
    "Next.js Agency",
    "AI Automation",
    "Meta Ads Agency",
  ],
  authors: [{ name: "Qfive Digital & Creative Studio" }],
  creator: "Qfive",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://qfive.in",
    siteName: "Qfive",
    title: "Qfive — Digital & Creative Agency in Chandigarh",
    description:
      "One team. Three disciplines. Strategic marketing, custom software engineering, and high-production video under one in-house team.",
    images: [
      {
        url: "/logo/qmark.png",
        width: 600,
        height: 600,
        alt: "Qfive Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qfive — Digital & Creative Agency in Chandigarh",
    description:
      "Marketing, software engineering, and video production under one accountable in-house team.",
    images: ["/logo/qmark.png"],
  },
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Qfive",
  alternateName: "Qfive Digital & Creative Agency",
  description:
    "Chandigarh-based digital agency offering marketing, software development, and video editing under one in-house team.",
  url: "https://qfive.in",
  logo: "https://qfive.in/logo/qmark.png",
  image: "https://qfive.in/logo/qmark.png",
  email: "hello@qfive.in",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot No. 25, Industrial Area Phase I",
    addressLocality: "Chandigarh",
    postalCode: "160002",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "30.7046",
    longitude: "76.7985",
  },
  areaServed: ["Chandigarh", "India", "Global"],
  sameAs: [
    "https://www.linkedin.com/in/q-five-a399403a5/",
    "https://www.instagram.com/qfive_creative/",
    "https://www.facebook.com/profile.php?id=61587769658360",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased selection:bg-accent selection:text-white">
        <ThemeProvider>
          <CursorProvider>
            <SmoothScroll />
            <CustomCursor />
            <Navbar />
            <main id="main-content" className="flex-grow">
              {children}
            </main>
            <Footer />
          </CursorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
