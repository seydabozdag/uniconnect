export type Course = { id: string; title: string; tags: string[] };
export type Club = { id: string; name: string; tags: string[] };
export type EventItem = { id: string; title: string; date: string; tags: string[] };

export const courses: Course[] = [
  { id: "c1", title: "Veri Yapıları", tags: ["cs", "temel"] },
  { id: "c2", title: "Makine Öğrenmesi", tags: ["ai", "ml"] },
];

export const clubs: Club[] = [
  { id: "k1", name: "Yapay Zeka Kulübü", tags: ["ai", "topluluk"] },
  { id: "k2", name: "Girişimcilik Kulübü", tags: ["startup", "network"] },
];

export const events: EventItem[] = [
  { id: "e1", title: "Kariyer Günü", date: "2025-12-20", tags: ["career"] },
  { id: "e2", title: "Hackathon", date: "2025-12-28", tags: ["coding"] },
];
