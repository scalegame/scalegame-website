import type { Metadata, Viewport } from "next";
import "./globals.css";
import { NoiseOverlay } from "@/components/common/NoiseOverlay";
import { CustomCursor } from "@/components/common/CustomCursor";
import { SmoothScroll } from "@/components/common/SmoothScroll";

export const metadata: Metadata = {
  metadataBase: new URL("https://scalegame.digital"),
  title: "SCALE GAME — Digital Marketing & Growth Agency | We Play. You Win.",
  description:
    "We target your ideal audience, build authentic trust in your product, and convert engagement into high-value sales.",
  keywords: [
    "Scale Game",
    "scalegame.digital",
    "Digital Marketing Agency",
    "Growth Agency",
    "Creative Agency",
    "Performance Marketing",
    "AI Automation",
    "Hospital CRMs",
    "Brand Scaling",
  ],
  authors: [{ name: "Scale Game" }],
  alternates: {
    canonical: "https://scalegame.digital",
  },
  openGraph: {
    title: "SCALE GAME — Digital Marketing & Growth Agency",
    description:
      "We target your ideal audience, build authentic trust in your product, and convert engagement into high-value sales.",
    url: "https://scalegame.digital",
    siteName: "SCALE GAME",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SCALE GAME — Digital Marketing & Growth Agency",
    description:
      "We target your ideal audience, build authentic trust in your product, and convert engagement into high-value sales.",
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
      "@type": "Organization",
      "@id": "https://scalegame.digital/#organization",
      name: "Scale Game",
      url: "https://scalegame.digital",
      email: "scalegame001@gmail.com",
      telephone: "+919360512623",
      sameAs: [
        "https://www.instagram.com/scale.game/?hl=en",
        "https://www.facebook.com/profile.php?id=61593448861778",
      ],
      description:
        "We target your ideal audience, build authentic trust in your product, and convert engagement into high-value sales.",
    },
    {
      "@type": "WebSite",
      "@id": "https://scalegame.digital/#website",
      url: "https://scalegame.digital",
      name: "Scale Game",
      publisher: {
        "@id": "https://scalegame.digital/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-[#050505] text-white">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black antialiased">
        <NoiseOverlay />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
