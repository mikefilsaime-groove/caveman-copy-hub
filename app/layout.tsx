import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "caveman-copy-hub.mikefilsaime.chatgpt.site";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") || host.startsWith("127.0.0.1")
      ? "http"
      : "https");
  const origin = `${protocol}://${host}`;
  const socialImage = `${origin}/caveman-copy-hub-social.png`;

  return {
    metadataBase: new URL(origin),
    title: "Caveman Copy Hub — Mike Filsaime",
    description:
      "A six-skill system that turns product features into clear reasons to buy, then proves every claim with the real product.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "Caveman Copy Hub — Mike Filsaime",
      description:
        "Turn product features into clear reasons to buy—and prove every claim with the real product.",
      type: "website",
      url: origin,
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: "Caveman Copy Hub — Caveman Copy turns features into reasons to buy.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Caveman Copy Hub — Mike Filsaime",
      description:
        "Turn product features into clear reasons to buy—and prove every claim with the real product.",
      images: [socialImage],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} ${geistMono.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
