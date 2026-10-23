import type { Metadata, Viewport } from "next";
import "./globals.css";
import { NoiseOverlay } from "@/components/common/NoiseOverlay";
import { CustomCursor } from "@/components/common/CustomCursor";
import { SmoothScroll } from "@/components/common/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.scalegame.digital"),
  title: "Scale Game — Best Digital Marketing Agency in Tamil Nadu | Performance, Meta & Google Ads",
  description:
    "Scale Game is the best performance digital marketing agency based in Karaikudi, Tamil Nadu. Specializing in Meta Ads, Google Ads, SEO, social media marketing, and high-converting lead generation for high-growth brands.",
  keywords: [
    "Scale Game",
    "scalegame",
    "scalegame digital",
    "Scale Game digital marketing",
    "scalegame.digital",
    "best digital marketing",
    "best digital marketing agency",
    "best digital marketing agency in Tamil Nadu",
    "best digital marketing company in Tamil Nadu",
    "best digital marketing agency Karaikudi",
    "top digital marketing agency Tamil Nadu",
    "performance marketing agency Tamil Nadu",
    "Meta Ads agency Tamil Nadu",
    "Google Ads agency Tamil Nadu",
    "SEO agency Tamil Nadu",
    "social media marketing agency Tamil Nadu",
    "lead generation agency Tamil Nadu",
    "marketing agency Karaikudi",
    "growth marketing Tamil Nadu",
  ],
  authors: [{ name: "Scale Game" }],
  alternates: {
    canonical: "https://www.scalegame.digital",
  },
  openGraph: {
    title: "Scale Game — Best Digital Marketing Agency in Tamil Nadu",
    description:
      "Scale Game is the best performance digital marketing agency based in Karaikudi, Tamil Nadu. Meta Ads, Google Ads, SEO, content creation, and revenue-driven lead generation.",
    url: "https://www.scalegame.digital",
    siteName: "Scale Game",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scale Game — Best Digital Marketing Agency in Tamil Nadu",
    description:
      "Scale Game is the best performance digital marketing agency in Tamil Nadu. Meta Ads, Google Ads, SEO, and lead generation.",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050505",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ProfessionalService", "LocalBusiness"],
      "@id": "https://www.scalegame.digital/#organization",
      name: "Scale Game",
      alternateName: [
        "scalegame",
        "Scale Game",
        "SCALE GAME",
        "scalegame.digital",
        "ScaleGame Digital",
        "Scale Game Marketing"
      ],
      url: "https://www.scalegame.digital",
      email: "scalegame001@gmail.com",
      telephone: "+919360512623",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Karaikudi",
        addressRegion: "Tamil Nadu",
        addressCountry: "IN",
      },
      areaServed: [
        {
          "@type": "City",
          name: "Karaikudi",
        },
        {
          "@type": "AdministrativeArea",
          name: "Tamil Nadu",
        },
        {
          "@type": "City",
          name: "Chennai",
        },
        {
          "@type": "Country",
          name: "India",
        },
      ],
      sameAs: [
        "https://www.instagram.com/scale.game/?hl=en",
        "https://www.facebook.com/profile.php?id=61593448861778",
      ],
      description:
        "Scale Game is the best performance digital marketing agency based in Karaikudi, Tamil Nadu. We engineer Meta Ads, Google Ads, SEO, social media marketing, and lead generation systems for businesses across Tamil Nadu.",
      knowsAbout: [
        "Digital Marketing",
        "Performance Marketing",
        "Meta Ads (Facebook & Instagram Ads)",
        "Google Ads & Search Marketing",
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "Lead Generation",
        "Web & App Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.scalegame.digital/#website",
      url: "https://www.scalegame.digital",
      name: "Scale Game",
      alternateName: ["scalegame", "Scale Game Digital Marketing"],
      publisher: {
        "@id": "https://www.scalegame.digital/#organization",
      },
      inLanguage: "en-IN",
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.scalegame.digital/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Why is Scale Game the best digital marketing agency in Tamil Nadu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scale Game combines high-performance Meta and Google Ads, precision audience targeting, conversion-focused creative production, and revenue-driven lead generation to deliver measurable ROI for brands in Tamil Nadu and India."
          }
        },
        {
          "@type": "Question",
          name: "What services does Scale Game provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Scale Game provides Meta Ads (Instagram & Facebook), Google Ads, Search Engine Optimization (SEO), high-converting landing pages, creative ad copy & video production, and CRM lead nurturing systems."
          }
        },
        {
          "@type": "Question",
          name: "How can I contact Scale Game for digital marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can visit https://www.scalegame.digital, call +91 93605 12623, or email scalegame001@gmail.com to book a strategic growth briefing."
          }
        }
      ]
    }
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light bg-white text-zinc-900">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white antialiased">
        <NoiseOverlay />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
