"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { loadActivities } from "../lib/activity";
import type { Activity, ActivityType } from "../lib/activity";

function badge(type: ActivityType) {
  const base = "inline-flex items-center rounded-full border px-2 py-0.5 text-xs";

  switch (type) {
    case "event_joined":
      return `${base} border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-200`;
    case "event_unjoined":
      return `${base} border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-200`;
    case "event_favorited":
      return `${base} border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200`;
    case "event_unfavorited":
      return `${base} border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200`;
    default:
      return `${base} border-zinc-200 bg-zinc-50 text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200`;
  }
}

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    setActivities(loadActivities());

    // Aynı tarayıcı sekmesinde güncellemeyi yakalamak için
    const onFocus = () => setActivities(loadActivities());
    window.addEventListener("focus", onFocus);

    // Başka tab/sekme değiştirirse
    const onStorage = () => setActivities(loadActivities());
    window.addEventListener("storage", onStorage);

    return () => {
      window.removeEventListener("focus", onFocus);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  if (status === "loading") {
    return <div className="text-sm text-zinc-500">Yükleniyor...</div>;
  }

  if (!session) {
    return (
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Profil</h1>
        <p className="text-zinc-700 dark:text-zinc-300">
          Bu sayfayı görmek için giriş yapmalısın.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-semibold">Profil</h1>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {session.user?.email ?? "Kullanıcı"}
        </p>
      </header>

      <section className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm dark:border-zinc-800 dark:bg-black">
        <h2 className="mb-3 text-lg font-semibold">Aktiviteler</h2>

        {activities.length === 0 ? (
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Henüz aktivite yok. Etkinliklerden <span className="font-medium">Katıl</span> veya{" "}
            <span className="font-medium">Favorile</span> yapınca burada görünecek.
          </p>
        ) : (
          <ul className="space-y-3">
            {activities.map((a) => (
              <li
                key={a.id}
                className="flex items-start justify-between gap-4 rounded-md border border-zinc-200 p-4 dark:border-zinc-800"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className={badge(a.type)}>{a.type}</span>
                    <p className="font-medium">{a.title}</p>
                  </div>
                  {a.detail && (
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {a.detail}
                    </p>
                  )}
                </div>

                <time className="whitespace-nowrap text-xs text-zinc-500 dark:text-zinc-500">
                  {new Date(a.timestamp).toLocaleString("tr-TR")}
                </time>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
