import { DASH_CARDS } from "@/app/lib/ui";
import { SketchPeopleHero } from "@/components/illustrations/SketchPeople";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="grid gap-6 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-black md:grid-cols-2 md:p-10">
        <div className="space-y-4">
          <p className="inline-flex w-fit items-center rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
            Hibrit Öneri Sistemi • UniConnect
          </p>

          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Kampüs hayatın için
            <span className="text-zinc-600 dark:text-zinc-300"> kişisel öneriler</span>
          </h1>

          <p className="text-zinc-700 dark:text-zinc-300">
            Ders, kulüp ve etkinlikleri davranış + içerik + sosyal sinyallerle birleştirerek öneriyoruz.
          </p>

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
              🎯 Kişiselleştirme
            </span>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
              ⚡ Hızlı keşif
            </span>
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
              🧠 Akıllı öneri
            </span>
          </div>
        </div>

        <div className="min-h-[220px] rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-50">
          <SketchPeopleHero />
        </div>
      </section>

      {/* Cards */}
      <section className="grid gap-4 md:grid-cols-3">
        {DASH_CARDS.map((c) => {
          const Icon = c.icon;
          return (
            <Link
              key={c.title}
              href={c.href}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-black"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{c.desc}</p>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
