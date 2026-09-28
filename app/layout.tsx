import type { Metadata } from "next";
import { Kreon } from "next/font/google";
import "./globals.css";
import { profile } from "@/data/content";

const kreon = Kreon({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-kreon",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.domain),
  title: {
    default: `${profile.name} · AI Solutions Architect`,
    template: `%s · ${profile.name}`,
  },
  description: profile.blurb,
  openGraph: {
    title: `${profile.name} · AI Solutions Architect`,
    description: profile.blurb,
    url: profile.domain,
    siteName: profile.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · AI Solutions Architect`,
    description: profile.blurb,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={kreon.variable}>
      <body>{children}</body>
    </html>
  );
}
