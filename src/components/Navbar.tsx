import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-black/60">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          UniConnect
        </Link>

        <nav className="hidden items-center gap-4 text-sm md:flex">
          <Link href="/" className="hover:underline">Ana Sayfa</Link>
          <Link href="/about" className="hover:underline">Hakkında</Link>
          <Link href="/login" className="hover:underline">Giriş</Link>
          <Link
            href="/register"
            className="rounded-md border border-zinc-200 px-3 py-1.5 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
          >
            Kayıt Ol
          </Link>
        </nav>

        <div className="md:hidden text-sm text-zinc-600 dark:text-zinc-400">
          Menü
        </div>
      </div>
    </header>
  );
}
