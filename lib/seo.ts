import type { Metadata } from 'next'

/* Satu sumber untuk metadata halaman. Setiap halaman memberi judul, deskripsi,
   dan path-nya sendiri; Open Graph dan Twitter ikut disusun dari situ supaya
   pratinjau tautan tidak lagi mewarisi judul & alamat beranda. */
export const SITE = 'https://absorber-divine.pintuweb.id'
export const SITE_NAME = 'EthyleneGuard · Dickson Synergy'
const SUFFIX = ' · EthyleneGuard'
const OG = { url: '/og.jpg', width: 1200, height: 630 }

/** Akhiran merek dipasang bila muat dalam 60 karakter; bila tidak, judul berdiri sendiri. */
export function judul(dasar: string) {
  return dasar.length + SUFFIX.length <= 60 ? dasar + SUFFIX : dasar
}

/** Deskripsi dijaga ≤155 karakter: potong di tanda pisah, bila perlu di batas kata. */
export function ringkas(teks: string, maks = 155) {
  if (teks.length <= maks) return teks
  const pisah = teks.indexOf(' — ')
  if (pisah > 50 && pisah <= maks - 1) return teks.slice(0, pisah) + '.'
  return teks.slice(0, teks.lastIndexOf(' ', maks - 1)) + '…'
}

export function meta({
  title,
  description,
  path = '',
  type = 'website',
}: {
  title: string
  description: string
  path?: string
  type?: 'website' | 'article'
}): Metadata {
  const t = judul(title)
  const d = ringkas(description)
  const url = SITE + path
  return {
    title: { absolute: t },
    description: d,
    alternates: { canonical: url },
    openGraph: { type, locale: 'id_ID', url, siteName: SITE_NAME, title: t, description: d, images: [{ ...OG, alt: t }] },
    twitter: { card: 'summary_large_image', title: t, description: d, images: [OG.url] },
  }
}
