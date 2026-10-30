import Image from 'next/image';
import Link from 'next/link';
import { PlateHead } from '@/components/ui';

const specimens = [
  {
    no: 'II',
    title: 'Buah tropis ekspor',
    image: '/images/spesimen-tropis.webp',
    desc: 'Manggis, pisang, dan mangga yang harus melewati tiga hingga empat minggu pelayaran sebelum sampai ke tangan pembeli.',
  },
  {
    no: 'III',
    title: 'Ritel & meja pajang',
    image: '/images/spesimen-ritel.webp',
    desc: 'Rak yang harus tetap tampak menggoda dari pagi sampai toko ditutup, tanpa penyortiran berulang di tengah hari.',
  },
  {
    no: 'IV',
    title: 'Olahan & minuman segar',
    image: '/images/spesimen-olahan.webp',
    desc: 'Produk turunan yang mutunya ditentukan sejak bahan bakunya — buah yang lewat matang tidak dapat diperbaiki di dapur.',
  },
];

export default function Specimens() {
  return (
    <section id="penerapan" className="relative overflow-hidden bg-paper-deep py-16 md:py-32">
      <div aria-hidden="true" className="laid absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <PlateHead
          no="V"
          label="Lembar Spesimen"
          center
          title={
            <>
              Di mana selisih hari itu <em className="italic text-leaf">paling berharga</em>
            </>
          }
          className="mb-10 md:mb-16"
        />

        {/* Di ponsel spesimen dibaca sebagai daftar: pelat lengkung kecil di kiri,
            keterangan di kanan — lengkungnya tetap, tingginya tidak tiga layar. */}
        <div className="grid gap-6 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          {specimens.map((s) => (
            <figure key={s.title} className="group grid grid-cols-[6.5rem_minmax(0,1fr)] items-center gap-5 sm:block">
              <div className="arch relative overflow-hidden border border-ink/15 bg-paper p-1.5 sm:p-2.5">
                <div className="arch-sm relative aspect-[3/4] overflow-hidden bg-paper-deep">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 104px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
              </div>
              <figcaption className="sm:mt-5 sm:text-center">
                <p className="sc text-brass-ink">Spesimen {s.no}</p>
                <h3 className="mt-1.5 font-serif text-lg text-ink sm:mt-2 sm:text-xl">{s.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-10 text-center md:mt-14">
          <Link href="/herbarium" className="sc inline-block border-b border-brass pb-1 text-ink hover:text-leaf sentuh-x">
            Buka herbarium lengkap — delapan pelat komoditas
          </Link>
        </p>
      </div>
    </section>
  );
}
