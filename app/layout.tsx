import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Motivv — Know your work rhythm",
  description:
    "The Mac focus timer that grades how you actually work. £7.99 one-time. No subscriptions.",
  metadataBase: new URL("https://motivv.app"),
  openGraph: {
    title: "Motivv — Know your work rhythm",
    description:
      "Most timers count your minutes. Motivv tells you what they were worth.",
    url: "https://motivv.app",
    type: "website",
    images: [{ url: "/assets/og.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Motivv — Know your work rhythm",
    description:
      "Most timers count your minutes. Motivv tells you what they were worth.",
    images: ["/assets/og.jpg"],
  },
  other: {
    "theme-color": "#050507",
  },
  icons: {
    icon: {
      url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40' fill='none'%3E%3Ccircle cx='20' cy='20' r='13' stroke='%235B4FFF' stroke-opacity='0.45' stroke-width='2.2'/%3E%3Cpath d='M 7 20 A 13 13 0 0 1 33 20' stroke='%235B4FFF' stroke-width='3.5' stroke-linecap='round'/%3E%3Ccircle cx='33' cy='20' r='3.4' fill='%2300D4A8'/%3E%3C/svg%3E",
      type: "image/svg+xml",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
