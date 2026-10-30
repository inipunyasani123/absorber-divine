import Link from 'next/link';
import PlateHero from '@/components/PlateHero';

export const metadata = {
  title: { absolute: 'Pelat tidak ditemukan · EthyleneGuard' },
  robots: { index: false, follow: true },
};

/* 404 bergaya herbarium: pelat yang dicari tidak ada di buku. */
export default function NotFound() {
  return (
    <>
      <PlateHero
        no="—"
        label="Halaman tidak ditemukan"
        title={<>Pelat ini <em className="italic text-leaf">belum pernah dicetak</em></>}
        lead="Alamatnya mungkin salah ketik, atau halamannya sudah dipindah ke bagian lain buku ini."
      />
      <section className="laid bg-paper pb-20">
        <ul className="mx-auto flex max-w-xl flex-col items-center gap-4 px-6 text-center sm:flex-row sm:justify-center sm:gap-8">
          {[
            ['Beranda', '/'],
            ['Herbarium', '/herbarium'],
            ['Minta sample', '/kontak'],
          ].map(([label, href]) => (
            <li key={href}>
              <Link href={href} className="sc inline-block border-b border-brass/50 pb-1 text-brass-ink hover:border-brass sentuh-x">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
