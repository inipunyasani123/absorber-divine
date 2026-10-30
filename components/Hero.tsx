import Image from 'next/image';
import Link from 'next/link';
import { Figure } from '@/components/ui';

const figures = [
  { value: '1–2 m³', label: 'Dirawat per sachet' },
  { value: '30 hari', label: 'Masa kerja, ideal 45' },
  { value: '2–3×', label: 'Umur simpan bertambah' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper pt-28 pb-14 md:pt-40 md:pb-28">
      <div aria-hidden="true" className="laid absolute inset-0" />

      {/* Sepasang sulur tipis di latar — ornamen pelat, bukan gambar */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 -right-16 hidden w-[26rem] text-leaf/12 lg:block"
        viewBox="0 0 400 400"
        fill="none"
      >
        <path
          d="M200 390C200 250 140 190 40 170M200 390C200 250 260 190 360 170M200 330c0-70-40-110-110-125M200 330c0-70 40-110 110-125"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle cx="200" cy="120" r="52" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="200" cy="120" r="30" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 md:gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20">
        {/* ------------------------------------------------------------------ */}
        {/* Pernyataan                                                          */}
        {/* ------------------------------------------------------------------ */}
        <div>
          <p className="sc tendril mb-8 inline-block text-brass-ink">EthyleneGuard</p>

          <h1 className="font-serif text-[2.6rem] leading-[1.06] font-normal text-ink sm:text-5xl lg:text-[3.5rem]">
            Kesegaran yang <em className="not-italic text-leaf italic">dirawat</em>,
            <br />
            bukan dipaksa.
          </h1>

          <p className="mt-7 max-w-lg leading-relaxed text-ink-soft/85">
            Buah tidak perlu diawetkan. Ia hanya perlu dijauhkan dari gas yang membuatnya tergesa
            menua. Satu sachet kecil menenangkan udara di sekelilingnya — dan waktu pun melambat.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center bg-ink px-8 py-4 text-sm font-semibold tracking-wide text-paper transition-colors duration-300 hover:bg-ink-soft"
            >
              Minta Sample
            </Link>
            <Link
              href="/#kurva"
              className="group inline-flex items-center justify-center gap-2 text-sm font-semibold text-ink underline-offset-8 transition-colors hover:text-brass min-h-11"
            >
              Lihat kurva kesegaran
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-ink/12 pt-7 sm:mt-14 sm:gap-8 sm:pt-8">
            {figures.map((f) => (
              <div key={f.label}>
                <dt className="sr-only">{f.label}</dt>
                <dd>
                  <Figure value={f.value} label={f.label} />
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Pelat spesimen                                                      */}
        {/* ------------------------------------------------------------------ */}
        <figure className="relative mx-auto w-full max-w-[17rem] sm:max-w-sm lg:mx-0 lg:max-w-none">
          {/* Bingkai berpuncak lengkung */}
          <div className="arch relative overflow-hidden border border-ink/15 bg-paper-deep p-3">
            <div className="arch-sm relative aspect-[4/5] overflow-hidden bg-paper">
              <Image
                src="/images/hero-pelat.webp"
                alt="Pelat botani: mangga dan sesisir pisang bergaya cat air bersama sachet EthyleneGuard"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 384px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Keterangan pelat, gaya kartu herbarium */}
          <figcaption className="mx-auto mt-5 max-w-xs border border-ink/12 bg-paper px-6 py-5 text-center">
            <p className="sc text-brass-ink">Spesimen I</p>
            <p className="mt-2 font-serif text-lg text-ink italic">Sachet dalam kemasan</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">
              Diletakkan di antara buah, tanpa bersentuhan langsung dengan kulitnya.
            </p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
