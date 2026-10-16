import React from 'react';

/* ============================================================================
   Primitif "Plate Botani".
   Tiap bagian halaman diperlakukan sebagai satu pelat bernomor Romawi,
   seperti lembar-lembar dalam sebuah buku herbarium.
   ========================================================================== */

type Tone = 'light' | 'dark';

/** Penanda pelat: angka Romawi diapit sulur, lalu nama pelat. */
export function PlateMark({
  no,
  children,
  tone = 'light',
  center = false,
}: {
  no: string;
  children: React.ReactNode;
  tone?: Tone;
  center?: boolean;
}) {
  const accent = tone === 'dark' ? 'text-brass-soft' : 'text-brass-ink';
  return (
    <p className={`mb-6 flex items-center gap-3.5 ${center ? 'justify-center' : ''}`}>
      <span
        className={`font-serif text-sm italic ${accent}`}
        aria-hidden="true"
      >
        Pelat {no}
      </span>
      <span aria-hidden="true" className={`h-px w-8 ${tone === 'dark' ? 'bg-brass-soft/50' : 'bg-brass/50'}`} />
      <span className={`sc ${tone === 'dark' ? 'text-paper/70' : 'text-ink-soft'}`}>{children}</span>
    </p>
  );
}

/** Kepala pelat: penanda, judul serif, dan pengantar. */
export function PlateHead({
  no,
  label,
  title,
  lead,
  tone = 'light',
  center = false,
  className = '',
}: {
  no: string;
  label: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  tone?: Tone;
  center?: boolean;
  className?: string;
}) {
  const titleColor = tone === 'dark' ? 'text-paper' : 'text-ink';
  const leadColor = tone === 'dark' ? 'text-paper/70' : 'text-ink-soft';
  return (
    <div className={`${center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      <PlateMark no={no} tone={tone} center={center}>
        {label}
      </PlateMark>
      <h2
        className={`font-serif text-[2rem] leading-[1.14] font-normal md:text-[2.6rem] ${titleColor}`}
      >
        {title}
      </h2>
      {lead && <p className={`mt-5 leading-relaxed ${leadColor}`}>{lead}</p>}
    </div>
  );
}

/** Garis rambut ganda — pemisah antar pelat. */
export function Rule({ tone = 'light', className = '' }: { tone?: Tone; className?: string }) {
  return (
    <hr
      aria-hidden="true"
      className={`rule-double ${tone === 'dark' ? 'text-brass-soft' : 'text-ink'} ${className}`}
    />
  );
}

/** Angka dengan keterangan, disusun seperti keterangan pada pelat cetak. */
export function Figure({
  value,
  label,
  tone = 'light',
}: {
  value: string;
  label: string;
  tone?: Tone;
}) {
  return (
    <div>
      <div
        className={`font-serif text-[1.3rem] leading-none sm:text-[1.75rem] ${
          tone === 'dark' ? 'text-brass-soft' : 'text-leaf'
        }`}
      >
        {value}
      </div>
      <div className={`sc mt-2.5 leading-[1.5] ${tone === 'dark' ? 'text-paper/70' : 'text-ink-soft'}`}>
        {label}
      </div>
    </div>
  );
}
