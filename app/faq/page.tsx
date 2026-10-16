'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const FAQS = [
  {
    q: 'Apa itu ethylene absorber?',
    a: 'Sachet penyerap gas etilen — hormon gas yang dilepas buah dan sayur selama pematangan. Dengan menahan gas itu, kesegaran dapat bertahan dua sampai tiga kali lebih lama dibanding tanpa perlakuan.',
  },
  {
    q: 'Bagaimana cara penggunaannya?',
    a: 'Letakkan sachet di dalam kemasan buah atau sayur yang ingin dijaga. Satu sachet merawat ruang bervolume 1–2 m³. Kemasan perlu tertutup rapat agar penyerapan berjalan optimal, dan sachet mulai bekerja segera setelah dikeluarkan dari kemasan aslinya.',
  },
  {
    q: 'Berapa lama masa kerjanya?',
    a: 'Tiga puluh hari sejak dibuka. Pada kondisi penyimpanan ideal — suhu ruang dengan kelembapan normal — masa itu memanjang hingga empat puluh lima hari. Indikator warna pada sachet berubah ketika daya serapnya habis.',
  },
  {
    q: 'Apakah aman untuk produk pangan?',
    a: 'Aman. Terdaftar di BPOM RI dengan nomor NA18191100273 dan memenuhi FDA 21 CFR 175.300, EU No 10/2011, serta JHOSPA Jepang. Bahan aktifnya terbungkus material food-grade dan tidak bersentuhan langsung dengan pangan.',
  },
  {
    q: 'Apakah memengaruhi rasa buah?',
    a: 'Tidak sama sekali. Sachet hanya menyerap gas dari udara di sekitarnya tanpa mengubah komposisi kimia buah. Uji organoleptik tidak menemukan perbedaan rasa, aroma, maupun tekstur.',
  },
  {
    q: 'Dapatkah dipakai untuk pengiriman ekspor?',
    a: 'Justru di situlah manfaatnya paling terasa. Pelayaran laut umumnya menempuh tiga sampai empat minggu — selesai sebelum sachet mencapai batas tiga puluh hari, sehingga satu sachet menutup seluruh perjalanan tanpa penggantian.',
  },
  {
    q: 'Berapa lama sampai hasilnya terlihat?',
    a: 'Perbedaan mulai tampak dalam 24–48 jam pertama. Buah yang biasanya menunjukkan tanda pembusukan pada hari ketiga umumnya masih segar hingga hari ketujuh atau lebih, bergantung jenis dan kondisi penyimpanan.',
  },
  {
    q: 'Bagaimana menyimpan sachet yang belum dipakai?',
    a: 'Dalam kemasan aslinya, di tempat sejuk dan kering, jauh dari sinar matahari langsung. Sachet yang belum dibuka bertahan hingga dua tahun. Setelah dibuka, gunakan segera — reaksinya sudah berjalan dan tidak dapat dihentikan.',
  },
]

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="bg-paper">
      <header className="relative overflow-hidden bg-ink text-paper">
        <div aria-hidden="true" className="laid absolute inset-0 opacity-40" />
        <div className="relative z-10 mx-auto max-w-3xl px-6 pt-36 pb-20 text-center md:pt-44 md:pb-24">
          <p className="sc tendril mb-7 inline-block text-brass-soft">Pelat VII</p>
          <h1 className="font-serif text-[2.3rem] leading-[1.08] text-paper md:text-[3rem]">
            Delapan pertanyaan,
            <br />
            <em className="italic text-brass-soft">delapan jawaban</em>
          </h1>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-paper/70">
            Disusun menurut urutan yang biasanya ditanyakan: apa benda ini, bagaimana memakainya,
            berapa lama bekerja, dan seberapa aman untuk pangan.
          </p>
        </div>
      </header>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div aria-hidden="true" className="laid absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <dl className="border-t border-ink/15">
            {FAQS.map((f, i) => {
              const terbuka = open === i
              return (
                <div key={f.q} className="border-b border-ink/15">
                  <dt>
                    <button
                      onClick={() => setOpen(terbuka ? null : i)}
                      aria-expanded={terbuka}
                      aria-controls={`jwb-${i}`}
                      className="flex w-full items-start gap-5 py-7 text-left"
                    >
                      <span aria-hidden="true" className="mt-1 shrink-0 font-serif text-sm text-brass-ink italic">
                        {['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'][i]}
                      </span>
                      <span className="flex-1 font-serif text-lg text-ink md:text-xl">{f.q}</span>
                      <span
                        aria-hidden="true"
                        className={`mt-1.5 h-4 w-4 shrink-0 border-t border-r border-ink/50 transition-transform duration-300 ${
                          terbuka ? '-rotate-45' : 'rotate-135'
                        }`}
                      />
                    </button>
                  </dt>
                  <AnimatePresence initial={false}>
                    {terbuka && (
                      <motion.dd
                        id={`jwb-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-8 pl-10 text-sm leading-relaxed text-ink-soft/85">{f.a}</p>
                      </motion.dd>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </dl>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink text-paper">
        <div aria-hidden="true" className="laid absolute inset-0 opacity-40" />
        <div className="relative z-10 mx-auto max-w-2xl px-6 py-20 text-center md:py-24">
          <h2 className="font-serif text-[1.9rem] leading-[1.14] text-paper md:text-[2.4rem]">
            Pertanyaan Anda mungkin
            <br />
            <em className="italic text-brass-soft">lebih khusus dari ini</em>
          </h2>
          <p className="mx-auto mt-6 max-w-lg leading-relaxed text-paper/70">
            Komoditas dan rute setiap pengirim berbeda. Sampaikan kondisi Anda, kami jawab dengan
            perhitungan.
          </p>
          <Link
            href="/kontak"
            className="mt-9 inline-flex items-center justify-center bg-paper px-8 py-4 text-sm font-semibold tracking-wide text-ink transition-colors hover:bg-brass-soft"
          >
            Kirim Pertanyaan
          </Link>
        </div>
      </section>
    </div>
  )
}
