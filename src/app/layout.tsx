import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Noto_Serif_Devanagari, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const deva = Noto_Serif_Devanagari({
  variable: "--font-deva",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
});

const display = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "सनातन HI — Offline Sanatan Dharma AI · Gita, Ramayan, Mahabharat, Vedas",
  description:
    "SANATAN HI — a fully offline AI corpus of Sanatan Dharma: Bhagavad Gita, Valmiki Ramayana, Mahabharata, Bhagavata & Shiva Purana, the four Vedas, Upanishads, Hanuman Chalisa — with verses in Sanskrit, Hindi and English. No internet required.",
  keywords: [
    "Sanatan Dharma", "Bhagavad Gita", "Ramayana", "Mahabharata", "Shiv Puran",
    "Vedas", "Upanishads", "Hanuman Chalisa", "Hindi", "Sanskrit", "offline AI",
  ],
  authors: [{ name: "SANATAN HI" }],
};

export const viewport: Viewport = {
  themeColor: "#69200f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${deva.variable} ${display.variable} antialiased bg-sanatan-cream text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
