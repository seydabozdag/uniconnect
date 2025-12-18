export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-md space-y-4">
      <h1 className="text-2xl font-semibold">Kayıt Ol</h1>

      <form className="space-y-3 rounded-lg border border-zinc-200 p-5 dark:border-zinc-800">
        <input placeholder="Ad Soyad" className="w-full rounded-md border px-3 py-2" />
        <input placeholder="Email" className="w-full rounded-md border px-3 py-2" />
        <input type="password" placeholder="Şifre" className="w-full rounded-md border px-3 py-2" />
        <button className="w-full rounded-md bg-black py-2 text-white">
          Hesap Oluştur
        </button>
      </form>
    </div>
  );
}
