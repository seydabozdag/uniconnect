import "./globals.css";
import type { ReactNode } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-white text-zinc-900 antialiased dark:bg-black dark:text-zinc-50">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl px-6 py-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
