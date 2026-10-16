import { meta } from '@/lib/seo';

// /kontak adalah client component, jadi metadatanya dipasang di layout ini.
export const metadata = meta({
  title: 'Permintaan Sample',
  description:
    'Sebutkan komoditas, volume ruang, dan rute Anda — kami hitung kebutuhan sachet EthyleneGuard dan siapkan sample untuk diuji sendiri.',
  path: '/kontak',
});

export default function KontakLayout({ children }: { children: React.ReactNode }) {
  return children;
}
