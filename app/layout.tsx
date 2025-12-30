import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Clothing Rental",
  description: "Rent clothes easily online",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-black`}
      >
        {/* Header */}
        <header className="bg-white shadow p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="font-bold text-xl">
              <Image 
              src="/logo.png" 
              alt="Logo"
              width={200}
              height={200}/>
            </Link>
              <form className="flex flex-grow max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Search items..."
        className="flex-grow border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
      />
      <button
        type="submit"
        className="bg-gray-900 text-white px-4 py-2 rounded-r-lg hover:bg-gray-800"
      >
        Search
      </button>
    </form>
            <div className="space-x-4 text-black">
              <Link href="/browse">Browse</Link>
              <Link href="/cart">Cart</Link>
            </div>
          </nav>
        </header>

        {/* Main content */}
        <main className="container mx-auto p-8">{children}</main>

        {/* Footer */}
        <footer className="bg-white shadow p-4 text-center text-sm text-black">
          <div className="space-x-4 text-black">
              <Link href="/">Contact Us</Link>
              <Link href="/">About</Link>
              <Link href="/">Delivery</Link>
              <Link href="/">Returns</Link>
              <Link href="/">FAQs</Link>
            </div>
          © 2025 The Cool Girl Closet
        </footer>
      </body>
    </html>
  );
}

