import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Test Site",
  description: "A small test site with contact and notices",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="w-full border-b py-4 bg-white dark:bg-black">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-6">
            <Link href="/" className="text-lg font-semibold">
              Test Site
            </Link>
            <nav className="flex gap-4">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/notice" className="hover:underline">
                Notices
              </Link>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <main className="mx-auto w-full max-w-4xl px-6 py-8">{children}</main>

        <footer className="w-full border-t py-6 bg-white dark:bg-black">
          <div className="mx-auto max-w-4xl px-6 text-sm text-zinc-600">
            © {new Date().getFullYear()} Test Site. For testing purposes only.
          </div>
        </footer>
      </body>
    </html>
  );
}
