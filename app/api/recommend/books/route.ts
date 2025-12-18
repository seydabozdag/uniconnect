import { NextResponse } from "next/server";
import type {
  GoogleBooksApiItem,
  GoogleBooksApiResponse,
} from "../../../lib/googleBooks.types";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") || "yapay zeka";

  const key = process.env.GOOGLE_BOOKS_API_KEY;

  const url =
    `https://www.googleapis.com/books/v1/volumes` +
    `?q=${encodeURIComponent(q)}` +
    `&maxResults=8` +
    (key ? `&key=${encodeURIComponent(key)}` : "");

  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    return NextResponse.json({ items: [], error: "books_fetch_failed" });
  }

  const data = (await res.json()) as GoogleBooksApiResponse;

  const items =
    data.items?.map((it: GoogleBooksApiItem) => ({
      id: it.id,
      title: it.volumeInfo?.title ?? "Untitled",
      authors: it.volumeInfo?.authors ?? [],
      publishedDate: it.volumeInfo?.publishedDate ?? null,
      thumbnail:
        it.volumeInfo?.imageLinks?.thumbnail ??
        it.volumeInfo?.imageLinks?.smallThumbnail ??
        null,
      infoLink: it.volumeInfo?.infoLink ?? null,
    })) ?? [];

  return NextResponse.json({ items });
}
