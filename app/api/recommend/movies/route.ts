import { NextResponse } from "next/server";
import type {
  TmdbMovieApiItem,
  TmdbMovieApiResponse,
} from "../../../lib/tmdb.types";

export async function GET(req: Request) {
  const key = process.env.TMDB_API_KEY;
  if (!key) {
    return NextResponse.json({ items: [], error: "missing_tmdb_api_key" });
  }

  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || "inception";

  const url =
    `https://api.themoviedb.org/3/search/movie` +
    `?api_key=${encodeURIComponent(key)}` +
    `&query=${encodeURIComponent(q)}` +
    `&include_adult=false` +
    `&language=tr-TR` +
    `&page=1`;

  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    return NextResponse.json({ items: [], error: "movies_fetch_failed" });
  }

  const data = (await res.json()) as TmdbMovieApiResponse;

  const items =
    data.results?.slice(0, 8).map((m: TmdbMovieApiItem) => ({
      id: m.id,
      title: m.title ?? "Untitled",
      overview: m.overview ?? "",
      releaseDate: m.release_date ?? null,
      poster: m.poster_path
        ? `https://image.tmdb.org/t/p/w500${m.poster_path}`
        : null,
      vote: m.vote_average ?? null,
    })) ?? [];

  return NextResponse.json({ items });
}
