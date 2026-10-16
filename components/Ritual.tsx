import Link from 'next/link';
import { PlateHead } from '@/components/ui';

const steps = [
  {
    no: 'I',
    title: 'Ditempatkan',
    desc: 'Sachet diletakkan di dalam kemasan, peti, atau kontainer — di antara buah, tanpa menyentuh kulitnya.',
  },
  {
    no: 'II',
    title: 'Diserap',
    desc: 'Media berpori di dalamnya menarik molekul etilen dari udara sekeliling, tenang dan tanpa suara.',
  },
  {
    no: 'III',
    title: 'Diubah',
    desc: 'Kalium permanganat mengoksidasi etilen menjadi karbon dioksida dan air. Perubahan ini searah — tidak ada jalan kembali.',
  },
  {
    no: 'IV',
    title: 'Dijaga',
    desc: 'Kadar etilen ditekan di bawah ambang pemicu. Rasa, aroma, dan tekstur tidak tersentuh sama sekali.',
  },
];

export default function Ritual() {
  return (
    <section id="cara-kerja" className="relative overflow-hidden bg-paper py-16 md:py-32">
      <div aria-hidden="true" className="laid absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <PlateHead
          no="IV"
          label="Cara Kerja"
          center
          title={
            <>
              Empat langkah yang <em className="italic text-leaf">tenang</em>
            </>
          }
          lead="Bukan pengawet, bukan pelapis, dan tidak menempel pada buah. Yang dikerjakan sachet ini hanyalah membersihkan udara di sekitarnya."
          className="mb-10 md:mb-16"
        />

        <ol className="grid gap-x-12 gap-y-12 sm:grid-cols-2">
          {steps.map((s) => (
            <li key={s.no} className="flex gap-6">
              <span
                aria-hidden="true"
                className="font-serif text-[1.75rem] leading-none text-brass-ink italic"
              >
                {s.no}
              </span>
              <div className="border-t border-ink/12 pt-4">
                <h3 className="font-serif text-xl text-ink">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-10 border border-ink/15 bg-paper-deep px-6 py-7 text-center sm:px-8 sm:py-8 md:mt-16">
          <p className="mx-auto max-w-2xl font-serif text-lg leading-relaxed text-ink italic">
            &ldquo;Reaksi oksidasi bersifat satu arah — gas yang telah terserap tidak akan terlepas
            kembali, meski suhu berubah sepanjang perjalanan.&rdquo;
          </p>
          <Link
            href="/faq"
            className="sc mt-6 inline-block text-brass-ink underline-offset-8 hover:underline"
          >
            Pertanyaan teknis selengkapnya
          </Link>
        </div>
      </div>
    </section>
  );
}
