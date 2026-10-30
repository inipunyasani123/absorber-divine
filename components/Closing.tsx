import Link from 'next/link';

const faqs = [
  {
    q: 'Berapa sachet untuk satu ruang?',
    a: 'Satu sachet merawat volume 1–2 m³. Kemasan perlu tertutup rapat agar penyerapan berjalan sempurna.',
  },
  {
    q: 'Apakah memengaruhi rasa buah?',
    a: 'Tidak sama sekali. Uji organoleptik tidak menemukan perbedaan rasa, aroma, maupun tekstur.',
  },
  {
    q: 'Berapa lama masa kerjanya?',
    a: 'Tiga puluh hari sejak dibuka, dan hingga empat puluh lima hari pada kondisi penyimpanan ideal.',
  },
];

export default function Closing() {
  return (
    <>
      {/* Pelat VII — tanya jawab ringkas */}
      <section id="tanya" className="relative overflow-hidden bg-paper py-16 md:py-32">
        <div aria-hidden="true" className="laid absolute inset-0" />

        <div className="relative z-10 mx-auto grid max-w-5xl gap-10 px-6 md:gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-6 flex items-center gap-3.5">
              <span aria-hidden="true" className="font-serif text-sm text-brass-ink italic">
                Pelat VII
              </span>
              <span aria-hidden="true" className="h-px w-8 bg-brass/50" />
              <span className="sc text-ink-soft">Tanya Jawab</span>
            </p>
            <h2 className="font-serif text-[2rem] leading-[1.14] text-ink md:text-[2.6rem]">
              Tiga hal yang paling sering ditanyakan
            </h2>
            <Link
              href="/faq"
              className="sc mt-8 inline-block border-b border-brass/50 pb-1 text-brass-ink hover:border-brass sentuh-x"
            >
              Baca semuanya
            </Link>
          </div>

          <dl>
            {faqs.map((f) => (
              <div key={f.q} className="border-b border-ink/12 py-7 first:border-t first:border-ink/12">
                <dt className="font-serif text-lg text-ink">{f.q}</dt>
                <dd className="mt-2.5 text-sm leading-relaxed text-ink-soft">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Penutup */}
      <section id="penutup" className="relative overflow-hidden bg-ink text-paper">
        <div aria-hidden="true" className="laid absolute inset-0 opacity-40" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 text-center md:py-32">
          <p className="sc tendril mb-8 inline-block text-brass-soft">Langkah berikutnya</p>

          <h2 className="font-serif text-[2.1rem] leading-[1.12] text-paper md:text-[2.9rem]">
            Coba pada satu peti.
            <br />
            <em className="italic text-brass-soft">Biarkan hasilnya yang berbicara.</em>
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-relaxed text-paper/70">
            Sebutkan komoditas, volume ruang, dan rute pengiriman Anda. Kami menghitung kebutuhannya
            dan mengirim sample untuk diuji berdampingan dengan peti tanpa perlakuan.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center bg-paper px-8 py-4 text-sm font-semibold tracking-wide text-ink transition-colors duration-300 hover:bg-brass-soft"
            >
              Minta Sample
            </Link>
            <Link
              href="/#kurva"
              className="inline-flex items-center justify-center border border-paper/40 px-8 py-4 text-sm font-semibold tracking-wide text-paper transition-colors duration-300 hover:bg-paper/10"
            >
              Tinjau Kurva Kesegaran
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
