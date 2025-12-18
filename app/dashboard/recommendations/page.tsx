import Link from "next/link";
import type { BooksResponse, MoviesResponse } from "@/app/lib/types";

async function getBooks(q: string): Promise<BooksResponse> {
  const base = process.env.NEXTAUTH_URL || "http://localhost:3000";
  const res = await fetch(
    `${base}/api/recommend/books?q=${encodeURIComponent(q)}`,
    { cache: "no-store" }
  );
  return res.json();
}

async function getMovies(q: string): Promise<MoviesResponse> {
  const base = process.env.NEXTAUTH_URL || "http://localhost:3000";
  const res = await fetch(
    `${base}/api/recommend/movies?q=${encodeURIComponent(q)}`,
    { cache: "no-store" }
  );
  return res.json();
}

export default async function RecommendationsPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const q = searchParams.q || "yapay zeka";

  const [books, movies] = await Promise.all([getBooks(q), getMovies(q)]);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Sana Özel Öneriler</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Google Books + TMDB üzerinden arama yapar. (Şu an:{" "}
          <span className="font-medium">{q}</span>)
        </p>

        <form
          className="flex gap-2"
          action="/dashboard/recommendations"
          method="get"
        >
          <input
            name="q"
            defaultValue={q}
            className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-900 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-100"
            placeholder="Örn: bilim kurgu, girişimcilik, veri bilimi..."
          />
          <button className="rounded-md bg-zinc-900 px-4 py-2 text-white hover:bg-black dark:bg-zinc-100 dark:text-black dark:hover:bg-white">
            Ara
          </button>
        </form>

        <Link
          className="text-sm underline text-zinc-600 dark:text-zinc-400"
          href="/dashboard"
        >
          ← Dashboard
        </Link>
      </div>

      {/* MOVIES */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">🎬 Film Önerileri (TMDB)</h2>

        {movies.error && (
          <p className="text-sm text-red-600 dark:text-red-400">
            TMDB hata: {movies.error} (ENV’de TMDB_API_KEY gerekli)
          </p>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {movies.items.map((m) => (
            <div
              key={m.id}
              className="rounded-xl border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-black"
            >
              <div className="aspect-[2/3] overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
                {m.poster ? (
                  <img
                    src={m.poster}
                    alt={m.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs text-zinc-500">
                    Poster yok
                  </div>
                )}
              </div>

              <p className="mt-2 font-medium">{m.title}</p>

              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                {m.releaseDate ?? "Tarih yok"} • ⭐{" "}
                {m.vote !== null ? m.vote.toFixed(1) : "-"}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BOOKS */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">📚 Kitap Önerileri (Google Books)</h2>

        {books.error && (
          <p className="text-sm text-red-600 dark:text-red-400">
            Books hata: {books.error}
          </p>
        )}

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {books.items.map((b) => (
            <a
              key={b.id}
              href={b.infoLink || "#"}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-zinc-200 bg-white p-3 hover:shadow-sm dark:border-zinc-800 dark:bg-black"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
                {b.thumbnail ? (
                  <img
                    src={b.thumbnail}
                    alt={b.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-xs text-zinc-500">
                    Kapak yok
                  </div>
                )}
              </div>

              <p className="mt-2 font-medium">{b.title}</p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                {b.authors.length ? b.authors.slice(0, 2).join(", ") : "Yazar yok"}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
