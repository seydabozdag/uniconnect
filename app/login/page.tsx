"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  async function handleLogin(formData: FormData) {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      callbackUrl: "/",
    });
  }

  return (
    <div className="mx-auto max-w-md space-y-4">
      <h1 className="text-2xl font-semibold">Giriş</h1>

      <form action={handleLogin} className="space-y-3">
        <input name="email" placeholder="Email" className="w-full border px-3 py-2" />
        <input name="password" type="password" placeholder="Şifre" className="w-full border px-3 py-2" />
        <button className="w-full bg-black py-2 text-white">Giriş Yap</button>
      </form>
    </div>
  );
}
