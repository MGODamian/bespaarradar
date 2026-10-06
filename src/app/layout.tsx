import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
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
  other: {
    "3a495045efabbbc": "388250604da295b1fdb886202c04be38",
  },
  title: {
    default: "BespaarRadar | Ontdek waar je kunt besparen",
    template: "%s | BespaarRadar",
  },
  description:
    "Controleer je vaste lasten voor energie, internet, mobiel en abonnementen en ontdek wat het vergelijken waard is.",
  applicationName: "BespaarRadar",
  keywords: [
    "besparen",
    "vaste lasten",
    "energie vergelijken",
    "internet vergelijken",
    "sim only vergelijken",
    "abonnementen",
    "BespaarRadar",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <div className="flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}