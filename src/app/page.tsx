import { clubs, courses, events } from "@/lib/mockData";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight">UniConnect</h1>
        <p className="text-zinc-700 dark:text-zinc-300">
          Ders, etkinlik ve kulüp önerileri için hibrit öneri sistemi.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Dersler</h2>
        <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300">
          {courses.map((c) => (
            <li key={c.id}>{c.title}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Kulüpler</h2>
        <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300">
          {clubs.map((k) => (
            <li key={k.id}>{k.name}</li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Etkinlikler</h2>
        <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300">
          {events.map((e) => (
            <li key={e.id}>
              {e.title} <span className="text-zinc-500">({e.date})</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
