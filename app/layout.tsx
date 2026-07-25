import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://advermedia.co"),
  title: "AdverMedia — Communities Are More Powerful Than Advertisements",
  description:
    "AdverMedia is a student-powered creator community helping local businesses in Hyderabad grow through authentic storytelling and hyperlocal reach. Founded by three student founders who believe local marketing belongs to communities, not advertisements.",
  keywords: [
    "AdverMedia",
    "student creator community Hyderabad",
    "hyperlocal marketing Hyderabad",
    "local business marketing",
    "student influencer marketing agency",
    "youth marketing movement",
  ],
  openGraph: {
    title: "AdverMedia — Communities Are More Powerful Than Advertisements",
    description:
      "A student-powered creator community helping local businesses in Hyderabad grow through authentic storytelling and hyperlocal reach.",
    url: "https://advermedia.co",
    siteName: "AdverMedia",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-cream text-ink font-body antialiased selection:bg-gold selection:text-ink">
        {children}
      </body>
    </html>
  );
}
