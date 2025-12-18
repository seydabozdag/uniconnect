export type ActivityType =
  | "event_joined"
  | "event_unjoined"
  | "event_favorited"
  | "event_unfavorited";

export type Activity = {
  id: string;
  type: ActivityType;
  title: string;
  detail?: string;
  timestamp: string; // ISO
};

const LS_ACT = "uniconnect:activities";

export function loadActivities(): Activity[] {
  try {
    const raw = localStorage.getItem(LS_ACT);
    const arr = raw ? (JSON.parse(raw) as Activity[]) : [];
    return Array.isArray(arr) ? arr : [];
  } catch {
    return [];
  }
}

export function pushActivity(a: Omit<Activity, "id" | "timestamp">): void {
  try {
    const next: Activity = {
      ...a,
      id: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
    };
    const current = loadActivities();
    // en üste ekle
    const updated = [next, ...current].slice(0, 60);
    localStorage.setItem(LS_ACT, JSON.stringify(updated));
  } catch {
    // ignore
  }
}
