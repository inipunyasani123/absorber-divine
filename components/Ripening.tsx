import { PlateHead, Figure } from '@/components/ui';

const observations = [
  { value: 'Hari ke-3', label: 'Tanda pertama muncul' },
  { value: '3–4 minggu', label: 'Lama pelayaran ekspor' },
  { value: '24–48 jam', label: 'Perbedaan mulai terlihat' },
];

export default function Ripening() {
  return (
    <section id="pematangan" className="relative overflow-hidden bg-ink text-paper">
      <div aria-hidden="true" className="laid absolute inset-0 opacity-40" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-32">
        <div className="grid gap-10 md:gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-20">
          <div>
            <PlateHead
              no="II"
              label="Anatomi Pematangan"
              tone="dark"
              title={
                <>
                  Setiap buah menyimpan
                  <br />
                  <em className="italic text-brass-soft">tanggal akhirnya sendiri</em>
                </>
              }
              lead="Etilen adalah hormon gas yang dilepas buah untuk memberi tahu dirinya bahwa waktunya matang telah tiba. Di kebun, pesan itu terbawa angin. Di dalam peti tertutup, ia terkurung — dan buah membaca pesannya berulang kali, semakin keras, sampai tergesa menua."
            />

            <p className="mt-7 max-w-xl leading-relaxed text-paper/70">
              Yang dilakukan sachet bukan menghentikan pesan itu, melainkan menyerapnya dari udara.
              Buah tetap matang menurut kodratnya, hanya saja tidak lagi dipaksa oleh gasnya
              sendiri — maupun oleh gas dari peti di sebelahnya.
            </p>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-paper/20 pt-7 sm:mt-12 sm:gap-8 sm:pt-8">
              {observations.map((o) => (
                <div key={o.label}>
                  <dt className="sr-only">{o.label}</dt>
                  <dd>
                    <Figure value={o.value} label={o.label} tone="dark" />
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Diagram sulur — molekul etilena digambar sebagai ornamen botani */}
          <div className="flex items-center justify-center">
            <svg
              viewBox="0 0 320 380"
              className="w-full max-w-[9rem] text-brass-soft sm:max-w-[17rem]"
              role="img"
              aria-label="Diagram: molekul etilena dengan ikatan rangkap, dikelilingi sulur daun."
            >
              <g stroke="currentColor" fill="none" strokeWidth="1.2" opacity="0.45">
                <path d="M160 370C160 250 110 200 30 180M160 370C160 250 210 200 290 180" />
                <path d="M160 320c0-60-34-95-95-108M160 320c0-60 34-95 95-108" />
                <ellipse cx="52" cy="176" rx="26" ry="12" transform="rotate(-24 52 176)" />
                <ellipse cx="268" cy="176" rx="26" ry="12" transform="rotate(24 268 176)" />
                <ellipse cx="76" cy="210" rx="22" ry="10" transform="rotate(-18 76 210)" />
                <ellipse cx="244" cy="210" rx="22" ry="10" transform="rotate(18 244 210)" />
              </g>

              {/* Lingkaran pelat */}
              <circle cx="160" cy="112" r="86" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.5" />
              <circle cx="160" cy="112" r="70" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.28" />

              {/* Ikatan rangkap C=C */}
              <g>
                <circle cx="126" cy="112" r="9" fill="currentColor" />
                <circle cx="194" cy="112" r="9" fill="currentColor" />
                <path d="M133 104h54M133 120h54" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
              </g>

              <text
                x="160"
                y="232"
                textAnchor="middle"
                fill="currentColor"
                fontSize="15"
                fontStyle="italic"
                fontFamily="var(--font-display), Georgia, serif"
              >
                Ethylene
              </text>
              <text
                x="160"
                y="252"
                textAnchor="middle"
                fill="currentColor"
                fontSize="12"
                letterSpacing="3"
                opacity="0.7"
                fontFamily="var(--font-body), sans-serif"
              >
                C₂H₄
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
