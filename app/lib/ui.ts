import { Home, Info, User, Sparkles, Calendar } from "lucide-react";

export const NAV_ITEMS = [
  { href: "/dashboard", label: "Ana Sayfa", icon: Home },
  { href: "/about", label: "Hakkında", icon: Info },
  { href: "/profile", label: "Profil", icon: User },
] as const;

export const DASH_CARDS = [
  {
    title: "Sana Özel Öneriler",
    desc: "Film ve kitap önerilerini görüntüle.",
    icon: Sparkles,
    href: "/dashboard/recommendations",
  },
  {
    title: "Etkinlik Takibi",
    desc: "Mock etkinlikleri takip et, katıl, favorile.",
    icon: Calendar,
    href: "/dashboard/events",
  },
  {
    title: "Profil & Aktivite",
    desc: "Geçmiş etkileşimlerini gör.",
    icon: User,
    href: "/profile",
  },
] as const;
