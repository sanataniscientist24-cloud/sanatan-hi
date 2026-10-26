import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

/*
 * Fonts are resolved from local system stacks defined in globals.css
 * (:root → --font-geist-sans / --font-geist-mono / --font-deva / --font-display).
 * This keeps the app 100 % offline — no Google Fonts fetch at build or
 * runtime — so it builds and runs identically in air-gapped servers,
 * restricted sandboxes, and any production host (see DEPLOY-HOSTINGER.md).
 */

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_SITE_URL ? new URL(process.env.NEXT_SITE_URL) : undefined,
  title: "SANATAN HI [ HUMAN INTELLIGENCE ] — Offline Sanatan Dharma AI · Gita, Ramayan, Mahabharat, Vedas",
  description:
    "SANATAN HI — a fully offline AI corpus of Sanatan Dharma: Bhagavad Gita, Valmiki Ramayana, Mahabharata, Bhagavata & Shiva Purana, the four Vedas, Upanishads, Hanuman Chalisa — with verses in Sanskrit, Hindi and English. No internet required.",
  keywords: [
    "Sanatan Dharma", "Bhagavad Gita", "Ramayana", "Mahabharata", "Shiv Puran",
    "Vedas", "Upanishads", "Hanuman Chalisa", "Hindi", "Sanskrit", "offline AI",
  ],
  authors: [{ name: "SANATAN HI [ HUMAN INTELLIGENCE ]" }],
};

export const viewport: Viewport = {
  themeColor: "#69200f",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-sanatan-cream text-foreground">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
