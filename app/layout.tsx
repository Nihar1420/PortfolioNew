import type { Metadata } from "next";
import { Kreon } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { profile } from "@/data/content";

const kreon = Kreon({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-kreon",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.domain),
  title: {
    default: `${profile.name} · Full-Stack & AI Architect`,
    template: `%s · ${profile.name}`,
  },
  description: profile.blurb,
  openGraph: {
    title: `${profile.name} · Full-Stack & AI Architect`,
    description: profile.blurb,
    url: profile.domain,
    siteName: profile.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} · Full-Stack & AI Architect`,
    description: profile.blurb,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={kreon.variable}>
      <body className="font-sans antialiased">
        <Nav />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
