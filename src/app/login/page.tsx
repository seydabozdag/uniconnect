export default function LoginPage() {
  return (
    <div className="mx-auto w-full max-w-md space-y-4">
      <h1 className="text-2xl font-semibold">Giriş</h1>

      <form className="space-y-3 rounded-lg border border-zinc-200 p-5 dark:border-zinc-800">
        <div className="space-y-1">
          <label className="text-sm">Email</label>
          <input className="w-full rounded-md border border-zinc-200 px-3 py-2 dark:border-zinc-800 dark:bg-black" />
        </div>
        <div className="space-y-1">
          <label className="text-sm">Şifre</label>
          <input type="password" className="w-full rounded-md border border-zinc-200 px-3 py-2 dark:border-zinc-800 dark:bg-black" />
        </div>
        <button className="w-full rounded-md bg-black px-3 py-2 text-white dark:bg-white dark:text-black">
          Giriş Yap
        </button>
      </form>
    </div>
  );
}
