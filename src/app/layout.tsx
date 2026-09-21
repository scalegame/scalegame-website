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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-[#050505] text-white">
      <body className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black antialiased">
        <NoiseOverlay />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
