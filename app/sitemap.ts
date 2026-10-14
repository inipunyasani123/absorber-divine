import type { MetadataRoute } from "next";
import { PELAT } from "@/lib/herbarium";
import { ESAI } from "@/lib/catatan";

const BASE = "https://absorber-divine.pintuweb.id";

const routes: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/herbarium", priority: 0.9 },
  ...PELAT.map((p) => ({ path: `/herbarium/${p.slug}`, priority: 0.7 })),
  { path: "/jurnal", priority: 0.7 },
  ...ESAI.map((e) => ({ path: `/jurnal/${e.slug}`, priority: 0.6 })),
  { path: "/faq", priority: 0.8 },
  { path: "/kontak", priority: 0.8 },
  { path: "/privacy", priority: 0.3 },
  { path: "/terms", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}
