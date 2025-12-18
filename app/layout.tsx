import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";

import AuthProvider from "./providers/AuthProvider";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "UniConnect",
  description: "Üniversite öğrencileri için hibrit öneri sistemi",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-white text-zinc-900 antialiased dark:bg-black dark:text-zinc-50">
        <AuthProvider>
          <Navbar />
          <main className="mx-auto w-full max-w-6xl px-6 py-10">
            {children}
          </main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
