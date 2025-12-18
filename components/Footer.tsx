export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-10 text-sm dark:border-zinc-800">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <p className="text-zinc-600 dark:text-zinc-400">
          © {new Date().getFullYear()} UniConnect
        </p>
        <p className="text-zinc-600 dark:text-zinc-400">        </p>
      </div>
    </footer>
  );
}
