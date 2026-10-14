// /kontak adalah client component, jadi metadatanya dipasang di layout ini.
export const metadata = {
  title: 'Permintaan Sample',
  description: 'Sebutkan komoditas, volume ruang, dan rute Anda — kami hitung kebutuhan sachet EthyleneGuard dan kirim sample.',
  alternates: { canonical: 'https://absorber-divine.pintuweb.id/kontak' },
};

export default function KontakLayout({ children }: { children: React.ReactNode }) {
  return children;
}
