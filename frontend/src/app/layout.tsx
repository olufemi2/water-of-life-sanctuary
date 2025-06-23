import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Link from 'next/link';

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Water of Life Sanctuary - A Place Where Faith Grows",
  description: "Welcome to Water of Life Sanctuary - a place where faith grows, community thrives, and everyone belongs. Join us for worship, fellowship, and service.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <Header />
          <nav className="bg-gray-100 py-2">
            <div className="max-w-7xl mx-auto flex gap-6 px-4">
              <Link href="/gallery" className="text-gray-700 hover:text-purple-600 font-medium">Gallery</Link>
              <Link href="/services" className="text-gray-700 hover:text-purple-600 font-medium">Our Services</Link>
              <Link href="/prayer-request" className="text-gray-700 hover:text-purple-600 font-medium">Prayer Request & Testimony</Link>
            </div>
          </nav>
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
