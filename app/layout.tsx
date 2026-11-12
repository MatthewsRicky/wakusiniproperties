import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";

import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/shared/FloatingWhatsApp";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Wakusini Properties | Coastal Property Development",
    template: "%s | Wakusini Properties",
  },
  description:
    "Property development, architectural design, construction and villa management in Diani Beach, Kenya.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://wakusini.com",
  ),
  openGraph: {
    type: "website",
    siteName: "Wakusini Properties",
    title: "Wakusini Properties | Coastal Property Development",
    description:
      "Explore property development, architecture and villa management on Kenya's South Coast.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
