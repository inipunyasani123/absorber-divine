import { PlateHead } from '@/components/ui';

const marks = [
  { authority: 'BPOM RI', code: 'NA18191100273', scope: 'Registrasi peredaran Indonesia' },
  { authority: 'FDA', code: '21 CFR 175.300', scope: 'Pelapis kontak pangan' },
  { authority: 'Uni Eropa', code: 'EU No 10/2011', scope: 'Material kontak pangan' },
  { authority: 'JHOSPA', code: 'Jepang', scope: 'Standar higiene kemasan' },
];

export default function Assurance() {
  return (
    <section id="jaminan" className="relative overflow-hidden bg-paper py-16 md:py-32">
      <div aria-hidden="true" className="laid absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <PlateHead
          no="VI"
          label="Jaminan"
          center
          title={
            <>
              Keanggunan yang <em className="italic text-leaf">bisa diperiksa</em>
            </>
          }
          lead="Bahan aktifnya terbungkus material food-grade dan tidak pernah bersentuhan langsung dengan buah. Pernyataan itu tidak berdiri sendiri — empat otoritas sudah memeriksanya."
          className="mb-10 md:mb-14"
        />

        {/* Cap kuningan */}
        <div className="mb-10 flex justify-center md:mb-12">
          <div className="flex h-24 w-24 flex-col sm:h-28 sm:w-28 items-center justify-center rounded-full border border-brass/45 text-center">
            <span className="font-serif text-[1.65rem] leading-none text-brass-ink italic">IV</span>
            <span className="sc mt-2 text-brass-ink">Otoritas</span>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-px border border-ink/12 bg-ink/12">
          {marks.map((m) => (
            <div key={m.authority} className="bg-paper px-4 py-5 sm:px-7 sm:py-7">
              <dt className="font-serif text-lg text-ink">{m.authority}</dt>
              <dd className="sc mt-2 text-brass-ink">{m.code}</dd>
              <dd className="mt-2.5 text-sm leading-relaxed text-ink-soft">{m.scope}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-8 text-center text-sm leading-relaxed text-ink-soft">
          Sachet yang belum dibuka dapat disimpan hingga <strong className="font-semibold text-ink">2 tahun</strong> dalam
          kemasan aslinya, di tempat sejuk dan kering.
        </p>
      </div>
    </section>
  );
}
