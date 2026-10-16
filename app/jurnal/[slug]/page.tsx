import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BungaPotong from '@/components/BungaPotong';
import PlateHero from '@/components/PlateHero';
import { ESAI, esaiBySlug, type Blok } from '@/lib/catatan';
import { pelatBySlug } from '@/lib/herbarium';
import { meta, SITE } from '@/lib/seo';

export function generateStaticParams() {
  return ESAI.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = esaiBySlug(slug);
  if (!e) return {};
  return meta({ title: `Esai ${e.no} · ${e.judul}`, description: e.ringkas, path: `/jurnal/${e.slug}`, type: 'article' });
}

function Isi({ b, pertama }: { b: Blok; pertama: boolean }) {
  if ('h' in b) return <h2 className="mt-12 font-serif text-[1.7rem] leading-tight font-normal text-ink italic">{b.h}</h2>;
  if ('kutip' in b)
    return (
      <figure className="my-12 text-ink">
        <hr aria-hidden="true" className="rule-double" />
        <blockquote className="px-2 py-7 text-center font-serif text-[1.5rem] leading-snug italic md:text-[1.75rem]">{b.kutip}</blockquote>
        <hr aria-hidden="true" className="rule-double" />
      </figure>
    );
  if ('pelat' in b)
    return (
      <aside className="mt-14">
        <p className="sc text-center text-ink-soft">Pelat yang disebut dalam esai ini</p>
        <ul className="mt-6 grid grid-cols-3 gap-4">
          {b.pelat.map((s) => {
            const p = pelatBySlug(s);
            if (!p) return null;
            return (
              <li key={s}>
                <Link href={`/herbarium/${p.slug}`} className="group block text-center">
                  <span className="arch-sm relative block aspect-[3/4] overflow-hidden border border-ink/15 bg-paper-deep">
                    {p.image ? (
                      <Image src={p.image} alt="" fill sizes="(min-width: 768px) 200px, 30vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                      <span className="grid h-full place-items-center p-4 text-ink"><BungaPotong className="h-full w-auto" /></span>
                    )}
                  </span>
                  <span className="mt-2 block font-serif text-sm text-brass-ink italic">Pelat {p.no}</span>
                  <span className="block font-serif text-ink group-hover:text-leaf">{p.nama}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    );
  return (
    <p
      className={`mt-6 text-[1.075rem] leading-[1.9] text-ink-soft ${
        pertama ? 'first-letter:float-left first-letter:mt-1 first-letter:mr-3 first-letter:font-serif first-letter:text-[4rem] first-letter:leading-[0.8] first-letter:text-leaf' : ''
      }`}
    >
      {b.p}
    </p>
  );
}

export default async function EsaiPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = esaiBySlug(slug);
  if (!e) notFound();
  const i = ESAI.findIndex((x) => x.slug === e.slug);
  const berikut = ESAI[(i + 1) % ESAI.length];
  const iPertama = e.isi.findIndex((b) => 'p' in b);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: e.judul,
    description: e.ringkas,
    author: { '@type': 'Organization', name: 'PT Dickson Synergy' },
    mainEntityOfPage: `${SITE}/jurnal/${e.slug}`,
  };

  return (
    <article>
      <PlateHero no={e.no} label="Catatan Herbarium" title={e.judul} lead={e.ringkas}>
        <p className="sc mt-6 text-ink-soft">{e.menit} menit baca</p>
      </PlateHero>
      <div className="laid bg-paper pb-24">
        <div className="mx-auto max-w-2xl px-6">
          {e.isi.map((b, k) => <Isi key={k} b={b} pertama={k === iPertama} />)}
          <Link href={`/jurnal/${berikut.slug}`} className="group mt-20 block border-t border-ink/15 pt-8 text-center">
            <span className="sc block text-ink-soft">Esai berikutnya · {berikut.no}</span>
            <span className="mt-3 block font-serif text-2xl text-ink italic group-hover:text-leaf">{berikut.judul}</span>
          </Link>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  );
}
