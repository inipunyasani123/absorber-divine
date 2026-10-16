import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BungaPotong from '@/components/BungaPotong';
import Skala from '@/components/Skala';
import { PlateMark, Rule } from '@/components/ui';
import { PELAT, pelatBySlug } from '@/lib/herbarium';
import { meta } from '@/lib/seo';

export function generateStaticParams() {
  return PELAT.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = pelatBySlug(slug);
  if (!p) return {};
  return meta({
    title: `Pelat ${p.no} · ${p.nama} (${p.latin})`,
    description: `${p.nama}: ${p.klimakterik ? 'klimakterik' : 'non-klimakterik'}, melepas etilen ${p.melepas.toLowerCase()}, kepekaan ${p.peka.toLowerCase()}. ${p.alasan}`,
    path: `/herbarium/${p.slug}`,
  });
}

export default async function PelatPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = pelatBySlug(slug);
  if (!p) notFound();
  const i = PELAT.findIndex((x) => x.slug === p.slug);
  const sebelum = PELAT[(i - 1 + PELAT.length) % PELAT.length];
  const sesudah = PELAT[(i + 1) % PELAT.length];

  return (
    <article className="laid bg-paper pt-32 pb-24 md:pt-40">
      <div className="mx-auto max-w-6xl px-6">
        <nav aria-label="Remah roti" className="sc mb-10 text-center text-ink-soft">
          <Link href="/herbarium" className="hover:text-leaf">Herbarium</Link> · Pelat {p.no}
        </nav>

        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          {/* Spesimen */}
          <figure className="mx-auto w-full max-w-md">
            <div className="arch relative overflow-hidden border border-ink/15 bg-paper p-3">
              <div className="arch-sm relative aspect-[3/4] overflow-hidden bg-paper-deep">
                {p.image ? (
                  <Image src={p.image} alt={`Spesimen ${p.nama}`} fill priority sizes="(min-width: 1024px) 40vw, 90vw" className="object-cover" />
                ) : (
                  <div className="grid h-full place-items-center p-10 text-ink">
                    <BungaPotong className="h-full w-auto" />
                  </div>
                )}
              </div>
            </div>
            <figcaption className="mt-4 text-center font-serif text-sm text-ink-soft italic">
              Gbr. {p.no} — {p.latin}
            </figcaption>
          </figure>

          <div>
            <PlateMark no={p.no}>{p.suku}</PlateMark>
            <h1 className="font-serif text-[2.6rem] leading-[1.05] font-normal text-ink md:text-[3.4rem]">{p.nama}</h1>
            <p className="mt-2 font-serif text-xl text-leaf italic">{p.latin}</p>
            <p className="mt-6 leading-relaxed text-ink-soft">{p.catatan}</p>

            {/* Label spesimen — seperti label di pojok lembar herbarium */}
            <dl className="mt-10 border border-ink/20 bg-paper">
              <div className="border-b border-ink/15 px-5 py-3 text-center">
                <dt className="sc text-ink-soft">Label spesimen</dt>
                <dd className="sr-only">{p.nama}</dd>
              </div>
              {[
                ['Nama', p.nama],
                ['Nama ilmiah', p.latin],
                ['Suku', p.suku],
                ['Sifat', p.klimakterik ? 'Klimakterik — terus matang setelah dipetik' : 'Non-klimakterik — tidak matang setelah dipetik'],
                ['Suhu simpan', p.simpan],
              ].map(([k, v]) => (
                <div key={k} className="grid gap-1 border-b border-ink/10 px-5 py-3 last:border-0 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-5">
                  <dt className="sc pt-0.5 text-ink-soft">{k}</dt>
                  <dd className={`text-sm text-ink ${k === 'Nama ilmiah' ? 'font-serif italic' : ''}`}>{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <Skala label="Melepas etilen" nilai={p.melepas} warna="bg-plum" />
              <Skala label="Kepekaan" nilai={p.peka} warna="bg-leaf" />
            </div>

            <aside className={`mt-10 border-l-2 px-6 py-5 ${p.saran === 'Tidak utama' ? 'border-brass bg-paper-deep' : 'border-leaf bg-leaf/10'}`}>
              <p className="sc text-ink-soft">Sachet EthyleneGuard</p>
              <p className="mt-2 font-serif text-2xl text-ink">{p.saran}</p>
              <p className="mt-2 leading-relaxed text-ink-soft">{p.alasan}</p>
            </aside>
          </div>
        </div>

        <Rule className="mx-auto mt-20 max-w-xl" />
        <nav aria-label="Pelat lain" className="mt-10 grid gap-4 sm:grid-cols-2">
          <Link href={`/herbarium/${sebelum.slug}`} className="group border border-ink/15 p-6 transition-colors hover:border-leaf">
            <span className="sc block text-ink-soft">← Pelat {sebelum.no}</span>
            <span className="mt-2 block font-serif text-2xl text-ink group-hover:text-leaf">{sebelum.nama}</span>
          </Link>
          <Link href={`/herbarium/${sesudah.slug}`} className="group border border-ink/15 p-6 text-right transition-colors hover:border-leaf">
            <span className="sc block text-ink-soft">Pelat {sesudah.no} →</span>
            <span className="mt-2 block font-serif text-2xl text-ink group-hover:text-leaf">{sesudah.nama}</span>
          </Link>
        </nav>
      </div>
    </article>
  );
}
