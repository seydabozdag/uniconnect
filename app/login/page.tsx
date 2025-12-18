"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

const inputClass =
  "w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder:text-zinc-400 " +
  "focus:outline-none focus:border-zinc-900 " +
  "dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-100";

export default function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg(null);
    setLoading(true);

    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") ?? "");
    const password = String(form.get("password") ?? "");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: true,
      callbackUrl: "/dashboard",
    });

    // redirect:true olduğunda çoğu zaman burası çalışmadan yönlenir.
    // Yönlenmezse hata mesajı göstermek için:
    if (res?.error) setErrorMsg("Giriş başarısız. Bilgileri kontrol et.");

    setLoading(false);
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-4">
      <h1 className="text-2xl font-semibold">Giriş</h1>

      <form
        onSubmit={onSubmit}
        className="space-y-3 rounded-lg border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-black"
      >
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

        {errorMsg && (
          <p className="text-sm text-red-600 dark:text-red-400">{errorMsg}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-zinc-900 py-2 text-white hover:bg-black disabled:opacity-70 dark:bg-zinc-100 dark:text-black dark:hover:bg-white"
        >
          {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
        </button>

        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Hesabın yok mu?{" "}
          <Link className="underline" href="/register">
            Kayıt Ol
          </Link>
        </p>
      </form>
    </div>
  );
}
