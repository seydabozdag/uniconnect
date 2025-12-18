"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { pushActivity } from "../../lib/activity";


type EventItem = {
  id: string;
  title: string;
  date: string;
  place: string;
  tag: string;
};

const MOCK_EVENTS: EventItem[] = [
  { id: "e1", title: "Hackathon", date: "2025-12-28", place: "Kampüs - B Blok", tag: "coding" },
  { id: "e2", title: "Kariyer Günü", date: "2025-12-22", place: "Konferans Salonu", tag: "career" },
  { id: "e3", title: "AI Talk: Öneri Sistemleri", date: "2025-12-26", place: "Online", tag: "ai" },
];

const LS_FAV = "uniconnect:favs";
const LS_JOIN = "uniconnect:joins";

function loadSet(key: string) {
  try {
    const raw = localStorage.getItem(key);
    const arr = raw ? (JSON.parse(raw) as string[]) : [];
    return new Set(arr);
  } catch {
    return new Set<string>();
  }
}

function saveSet(key: string, set: Set<string>) {
  try {
    localStorage.setItem(key, JSON.stringify(Array.from(set)));
  } catch {
    // ignore
  }
}

export default function EventsPage() {
  const events = useMemo(() => MOCK_EVENTS, []);

  const [fav, setFav] = useState<Set<string>>(() => new Set<string>());
  const [join, setJoin] = useState<Set<string>>(() => new Set<string>());
  const [hydrated, setHydrated] = useState(false);

  // localStorage → state
  useEffect(() => {
    setFav(loadSet(LS_FAV));
    setJoin(loadSet(LS_JOIN));
    setHydrated(true);
  }, []);

  // state → localStorage
  useEffect(() => {
    if (!hydrated) return;
    saveSet(LS_FAV, fav);
  }, [fav, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    saveSet(LS_JOIN, join);
  }, [join, hydrated]);

  const toggleFav = (id: string, title: string) => {
    setFav((prev) => {
      const next = new Set(prev);
      const willFav = !next.has(id);

      if (willFav) next.add(id);
      else next.delete(id);

      pushActivity({
        type: willFav ? "event_favorited" : "event_unfavorited",
        title: willFav ? "Etkinlik favorilendi" : "Favoriden çıkarıldı",
        detail: title,
      });

      return next;
    });
  };

  const toggleJoin = (id: string, title: string) => {
    setJoin((prev) => {
      const next = new Set(prev);
      const willJoin = !next.has(id);

      if (willJoin) next.add(id);
      else next.delete(id);

      pushActivity({
        type: willJoin ? "event_joined" : "event_unjoined",
        title: willJoin ? "Etkinliğe katıldın" : "Etkinlikten ayrıldın",
        detail: title,
      });

      return next;
    });
  };

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Etkinlik Takibi</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          Şimdilik mock etkinlikler. Katıl/Favorile durumları cihazında kaydedilir.
        </p>
        <Link className="text-sm underline text-zinc-600 dark:text-zinc-400" href="/dashboard">
          ← Dashboard
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {events.map((e) => {
          const isFav = fav.has(e.id);
          const isJoined = join.has(e.id);

          return (
            <div
              key={e.id}
              className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-black"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-lg font-semibold">{e.title}</p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{e.place}</p>
                </div>

                <span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
                  {e.tag}
                </span>
              </div>

              <p className="mt-3 text-sm text-zinc-700 dark:text-zinc-300">
                Tarih: <span className="font-medium">{e.date}</span>
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  onClick={() => toggleJoin(e.id, e.title)} 
                  className={[
                    "rounded-md px-3 py-2 text-sm transition focus:outline-none",
                    isJoined
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "bg-zinc-900 text-white hover:bg-black dark:bg-zinc-100 dark:text-black dark:hover:bg-white",
                  ].join(" ")}
                >
                  {isJoined ? "Katıldın ✓" : "Katıl"}
                </button>

                <button
                  onClick={() => toggleFav(e.id, e.title)}
                  className={[
                    "rounded-md border px-3 py-2 text-sm transition focus:outline-none",
                    isFav
                      ? "border-amber-300 bg-amber-50 text-amber-800 hover:bg-amber-100 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200"
                      : "border-zinc-200 hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900",
                  ].join(" ")}
                >
                  {isFav ? "Favorilendi ★" : "Favorile"}
                </button>
              </div>

              {/* küçük durum etiketi */}
              <div className="mt-3 text-xs text-zinc-500 dark:text-zinc-500">
                Durum:{" "}
                {isJoined ? "Katılıyor" : "Katılmıyor"}
                {" • "}
                {isFav ? "Favoride" : "Favoride değil"}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
