import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";

import AuthProvider from "./providers/AuthProvider";
import AppShell from "./providers/AppShell";

export const metadata: Metadata = {
  title: "UniConnect",
  description: "Üniversite öğrencileri için hibrit öneri sistemi",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tr">
      <body className="min-h-screen bg-white text-zinc-900 antialiased dark:bg-black dark:text-zinc-50">
        <AuthProvider>
          <AppShell>{children}</AppShell>
        </AuthProvider>
      </body>
    </html>
  );
}
