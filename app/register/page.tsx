"use client";

import { useState } from "react";
import Link from "next/link";

const inputClass =
  "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder:text-zinc-400 " +
  "focus:outline-none focus:border-zinc-900 " +
  "dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-100";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setDone(false);

    // Şimdilik demo: gerçek kayıt backend’i yok.
    // Buraya /api/register endpoint ekleyince gerçek kayıt yapacağız.
    await new Promise((r) => setTimeout(r, 600));

    setDone(true);
    setLoading(false);
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-4">
      <h1 className="text-2xl font-semibold">Kayıt Ol</h1>

      <form
        onSubmit={onSubmit}
        className="space-y-3 rounded-lg border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-black"
      >
        <div className="space-y-1">
          <label className="text-sm text-zinc-700 dark:text-zinc-300">
            Ad Soyad
          </label>
          <input
            name="name"
            placeholder="Ad Soyad"
            className={inputClass}
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm text-zinc-700 dark:text-zinc-300">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="ornek@mail.com"
            className={inputClass}
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm text-zinc-700 dark:text-zinc-300">
            Şifre
          </label>
          <input
            name="password"
            type="password"
            placeholder="••••••••"
            className={inputClass}
            required
          />
        </div>

        {done && (
          <p className="text-sm text-green-700 dark:text-green-400">
            Demo kayıt tamamlandı. Şimdi giriş yapabilirsin.
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-zinc-900 py-2 text-white hover:bg-black disabled:opacity-70 dark:bg-zinc-100 dark:text-black dark:hover:bg-white"
        >
          {loading ? "Oluşturuluyor..." : "Hesap Oluştur"}
        </button>

        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Zaten hesabın var mı?{" "}
          <Link className="underline" href="/login">
            Giriş Yap
          </Link>
        </p>
      </form>
    </div>
  );
}
