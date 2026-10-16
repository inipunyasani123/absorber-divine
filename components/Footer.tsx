import Link from 'next/link'

const plates = [
  { label: 'Anatomi Pematangan', href: '/#pematangan' },
  { label: 'Kurva Kesegaran', href: '/#kurva' },
  { label: 'Cara Kerja', href: '/#cara-kerja' },
  { label: 'Lembar Spesimen', href: '/#penerapan' },
  { label: 'Jaminan', href: '/#jaminan' },
  { label: 'Herbarium Kesegaran', href: '/herbarium' },
  { label: 'Catatan Herbarium', href: '/jurnal' },
  { label: 'Tanya Jawab', href: '/faq' },
  { label: 'Hubungi Kami', href: '/kontak' },
]

const standards = [
  ['BPOM RI', 'NA18191100273'],
  ['FDA', '21 CFR 175.300'],
  ['Uni Eropa', 'EU No 10/2011'],
  ['JHOSPA', 'Jepang'],
]

export default function Footer() {
  const tahun = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-ink text-paper/70">
      <div aria-hidden="true" className="laid absolute inset-0 opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)_minmax(0,0.8fr)_minmax(0,1fr)]">
          <div>
            <p className="flex items-baseline gap-2.5">
              <span className="font-serif text-xl text-paper italic">Ethylene</span>
              <span className="font-serif text-xl text-brass-soft">Guard</span>
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/60">
              Sachet penyerap etilen untuk buah dan sayur yang harus menempuh jarak sebelum sampai
              ke meja. Dipasok oleh PT Dickson Synergy.
            </p>
            <p className="sc mt-7 text-paper/70">
              Reg. BPOM RI
              <span className="mt-1.5 block text-brass-soft">NA18191100273</span>
            </p>
          </div>

          <nav aria-label="Navigasi footer">
            <h2 className="sc mb-5 border-b border-paper/20 pb-3 text-paper">Pelat</h2>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:block sm:space-y-3">
              {plates.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="text-sm transition-colors hover:text-brass-soft">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="sc mb-5 border-b border-paper/20 pb-3 text-paper">Standar</h2>
            <dl className="grid grid-cols-2 gap-x-6 gap-y-3.5 sm:block sm:space-y-3.5">
              {standards.map(([k, v]) => (
                <div key={k}>
                  <dt className="text-sm text-paper/75">{k}</dt>
                  <dd className="sc mt-1 text-paper/70">{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2 className="sc mb-5 border-b border-paper/20 pb-3 text-paper">Permintaan</h2>
            <p className="max-w-xs text-sm leading-relaxed text-paper/75">
              Sample dan perhitungan kebutuhan sachet diminta lewat satu lembar formulir: komoditas,
              volume ruang, dan rute pengiriman.
            </p>
            <Link
              href="/kontak"
              className="sc mt-6 inline-block border-b border-brass-soft/60 pb-1 text-brass-soft transition-colors hover:border-brass-soft"
            >
              Isi lembar permintaan
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-paper/15 pt-7 md:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p className="sc text-paper/70">© {tahun} EthyleneGuard · PT Dickson Synergy</p>
          <p className="sc flex flex-wrap gap-x-5 gap-y-2 text-paper/70">
            <Link href="/privacy" className="hover:text-brass-soft">Kebijakan Privasi</Link>
            <Link href="/terms" className="hover:text-brass-soft">Syarat & Ketentuan</Link>
            <span>Herbarium Edisi {tahun}</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
