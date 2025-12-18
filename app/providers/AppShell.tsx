"use client";

import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const { status } = useSession();
  const pathname = usePathname();

  const isAuthPage = pathname === "/login" || pathname === "/register";

  if (status === "loading") {
    return (
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-zinc-500">
        Yükleniyor...
      </div>
    );
  }

  if (status === "unauthenticated") {
    return (
      <main className="mx-auto w-full max-w-6xl px-6 py-10">{children}</main>
    );
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-6xl px-6 py-10">{children}</main>
      <Footer />
    </>
  );
}
