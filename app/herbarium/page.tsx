import Image from 'next/image';
import Link from 'next/link';
import BungaPotong from '@/components/BungaPotong';
import PlateHero from '@/components/PlateHero';
import { PELAT } from '@/lib/herbarium';

export const metadata = {
  title: 'Herbarium Kesegaran',
  description:
    'Delapan pelat komoditas segar — pisang, apel, pir, mangga, jeruk, anggur, stroberi, dan bunga potong — dengan sifat etilen, suhu simpan, dan kapan sachet EthyleneGuard benar-benar dibutuhkan.',
  alternates: { canonical: 'https://absorber-divine.pintuweb.id/herbarium' },
};

export default function HerbariumIndex() {
  return (
    <>
      <PlateHero
        no="—"
        label="Herbarium Kesegaran"
        title={<>Delapan pelat, <em className="italic text-leaf">delapan cara menua</em></>}
        lead="Setiap komoditas bereaksi berbeda terhadap etilen. Sebagian melepaskannya, sebagian rusak karenanya, dan sebagian tidak terlalu peduli. Pelat-pelat ini mencatat sifat masing-masing — termasuk kapan sachet kami tidak terlalu diperlukan."
      />

      <section className="laid bg-paper pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
            {PELAT.map((p) => (
              <li key={p.slug}>
                <figure className="group relative">
                  <div className="arch relative overflow-hidden border border-ink/15 bg-paper p-2">
                    <div className="arch-sm relative aspect-[3/4] overflow-hidden bg-paper-deep">
                      {p.image ? (
                        <Image src={p.image} alt={`Spesimen ${p.nama}`} fill sizes="(min-width: 1024px) 22vw, 45vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                      ) : (
                        <div className="grid h-full place-items-center p-6 text-ink">
                          <BungaPotong className="h-full max-h-60 w-auto" />
                        </div>
                      )}
                    </div>
                  </div>
                  <figcaption className="mt-5 text-center">
                    <p className="font-serif text-sm text-brass-ink italic">Pelat {p.no}</p>
                    <h2 className="mt-1.5 font-serif text-xl text-ink">
                      <Link href={`/herbarium/${p.slug}`} className="after:absolute after:inset-0">{p.nama}</Link>
                    </h2>
                    <p className="mt-1 font-serif text-sm text-ink-soft italic">{p.latin}</p>
                    <p className="sc mt-3 text-ink-soft">{p.klimakterik ? 'Klimakterik' : 'Non-klimakterik'}</p>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-ink py-20 text-paper">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-2">
          <div>
            <p className="font-serif text-brass-soft italic">Cara membaca pelat</p>
            <h2 className="mt-3 font-serif text-[2rem] leading-tight font-normal text-paper">Klimakterik dan non-klimakterik</h2>
          </div>
          <div className="space-y-4 leading-relaxed text-paper/80">
            <p>
              <span className="text-paper">Klimakterik</span> — buah yang terus matang setelah dipetik dan melepas etilen
              saat melakukannya. Di sinilah sachet paling berpengaruh.
            </p>
            <p>
              <span className="text-paper">Non-klimakterik</span> — buah yang tidak lagi matang setelah dipetik. Etilen dari
              luar tetap bisa merusaknya, tetapi masalah utamanya sering kelembapan.
            </p>
            <Link href="/jurnal/buah-yang-terus-bernapas" className="sc inline-block text-brass-soft hover:text-paper">
              Esai I — Buah yang terus bernapas →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
