import Link from 'next/link';
import PlateHero from '@/components/PlateHero';
import { ESAI } from '@/lib/catatan';

export const metadata = {
  title: 'Catatan Herbarium',
  description:
    'Esai pendek tentang buah yang terus bernapas setelah dipetik, komoditas yang berbagi ruang, dan warna indikator yang menandai waktu.',
  alternates: { canonical: 'https://absorber-divine.pintuweb.id/jurnal' },
};

export default function JurnalIndex() {
  return (
    <>
      <PlateHero
        no="—"
        label="Catatan Herbarium"
        title={<>Pengamatan dulu, <em className="italic text-leaf">penjelasan kemudian</em></>}
        lead="Tiga esai pendek tentang cara buah menua — ditulis seperti keterangan di bawah pelat botani lama."
      />
      <section className="laid bg-paper pb-24">
        <ol className="mx-auto max-w-4xl divide-y divide-ink/15 border-y border-ink/15 px-6">
          {ESAI.map((e) => (
            <li key={e.slug} className="group relative grid gap-4 py-10 sm:grid-cols-[6rem_minmax(0,1fr)] sm:gap-8">
              <p className="font-serif text-5xl leading-none text-brass italic" aria-hidden="true">{e.no}</p>
              <div>
                <h2 className="font-serif text-[1.9rem] leading-tight font-normal text-ink">
                  <Link href={`/jurnal/${e.slug}`} className="after:absolute after:inset-0 group-hover:text-leaf">{e.judul}</Link>
                </h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-ink-soft">{e.ringkas}</p>
                <p className="sc mt-4 text-ink-soft">Esai {e.no} · {e.menit} menit</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
