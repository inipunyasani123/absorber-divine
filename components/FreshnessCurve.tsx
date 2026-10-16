import { PlateHead } from '@/components/ui';

/* ============================================================================
   Pelat III — Kurva Kesegaran.
   Perbandingan laju penurunan mutu dengan dan tanpa perawatan, digambar
   sebagai kurva pada kertas berpetak halus. Angkanya bersandar pada klaim
   di halaman FAQ: tanda pembusukan muncul hari ke-3 dan buah tak lagi layak
   sekitar hari ke-7 tanpa perawatan, sementara masa simpan bertambah 2–3×.
   ========================================================================== */

const W = 720;
const H = 300;
const DAYS = 21;
const THRESHOLD = 40; // ambang layak jual, dalam persen mutu

const x = (d: number) => (d / DAYS) * W;
const y = (p: number) => ((100 - p) / 100) * H;

const tanpa: [number, number][] = [
  [0, 100], [3, 78], [5, 55], [7, 40], [10, 20], [14, 8], [18, 3], [21, 0],
];

const dengan: [number, number][] = [
  [0, 100], [3, 97], [5, 93], [7, 88], [10, 80], [14, 66], [17, 52], [19, 44], [21, 38],
];

/** Catmull-Rom → kubik Bezier, supaya kurvanya mengalir seperti tarikan tangan. */
function smooth(points: [number, number][]) {
  const p = points.map(([d, v]) => [x(d), y(v)] as [number, number]);
  if (p.length < 2) return '';
  let path = `M${p[0][0].toFixed(1)},${p[0][1].toFixed(1)}`;
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[i - 1] ?? p[i];
    const p1 = p[i];
    const p2 = p[i + 1];
    const p3 = p[i + 2] ?? p2;
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    path += ` C${c1x.toFixed(1)},${c1y.toFixed(1)} ${c2x.toFixed(1)},${c2y.toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return path;
}

const dayMarks = [0, 7, 14, 21];

export default function FreshnessCurve() {
  return (
    <section id="kurva" className="relative overflow-hidden bg-paper-deep py-16 md:py-32">
      <div aria-hidden="true" className="laid absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <PlateHead
          no="III"
          label="Kurva Kesegaran"
          center
          title={
            <>
              Waktu yang sama, <em className="italic text-leaf">hasil yang berbeda</em>
            </>
          }
          lead="Dua peti berangkat pada hari yang sama. Yang satu dibiarkan bersama gasnya sendiri, yang lain ditemani sebuah sachet. Inilah jaraknya setelah tiga minggu."
          className="mb-10 md:mb-14"
        />

        <figure className="border border-ink/15 bg-paper p-6 sm:p-10">
          {/* Keterangan kurva — HTML, bukan teks SVG, agar tetap terbaca di layar kecil */}
          <figcaption className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <span className="sc text-ink-soft">Mutu buah · sumbu datar dalam hari</span>
            <span className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <span className="flex items-center gap-2.5">
                <span aria-hidden="true" className="h-[3px] w-7 rounded-full bg-leaf" />
                <span className="sc text-ink">Dengan EthyleneGuard</span>
              </span>
              <span className="flex items-center gap-2.5">
                <span aria-hidden="true" className="h-[3px] w-7 rounded-full bg-plum" />
                <span className="sc text-ink-soft">Tanpa perawatan</span>
              </span>
            </span>
          </figcaption>

          <div className="relative">
            <svg
              viewBox={`0 0 ${W} ${H}`}
              className="block h-auto w-full overflow-visible"
              role="img"
              aria-label="Grafik: tanpa perawatan mutu buah jatuh ke ambang layak jual pada hari ketujuh, sedangkan dengan EthyleneGuard ambang itu baru tercapai sekitar hari kedua puluh."
            >
              {/* Petak halus */}
              <g stroke="currentColor" className="text-ink/10">
                {[0, 1, 2, 3, 4].map((i) => (
                  <line
                    key={`h${i}`}
                    x1="0"
                    y1={(H / 4) * i}
                    x2={W}
                    y2={(H / 4) * i}
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
                {dayMarks.map((d) => (
                  <line
                    key={`v${d}`}
                    x1={x(d)}
                    y1="0"
                    x2={x(d)}
                    y2={H}
                    strokeWidth="1"
                    vectorEffect="non-scaling-stroke"
                  />
                ))}
              </g>

              {/* Ambang layak jual */}
              <line
                x1="0"
                y1={y(THRESHOLD)}
                x2={W}
                y2={y(THRESHOLD)}
                stroke="currentColor"
                className="text-brass-ink"
                strokeWidth="1.5"
                strokeDasharray="7 6"
                vectorEffect="non-scaling-stroke"
              />

              {/* Kurva tanpa perawatan */}
              <path
                d={smooth(tanpa)}
                fill="none"
                stroke="currentColor"
                className="text-plum"
                strokeWidth="2.5"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
              {/* Kurva dengan perawatan */}
              <path
                d={smooth(dengan)}
                fill="none"
                stroke="currentColor"
                className="text-leaf"
                strokeWidth="2.5"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />

              {/* Titik potong dengan ambang */}
              <circle cx={x(7)} cy={y(THRESHOLD)} r="5" className="fill-plum" />
              <circle cx={x(20.3)} cy={y(THRESHOLD)} r="5" className="fill-leaf" />
            </svg>

            {/* Penanda hari — HTML supaya ukurannya tetap terbaca di layar sempit.
                Hanya angkanya, karena "Hari 14" dan "Hari 21" bertabrakan di ~340px;
                satuannya sudah disebut pada keterangan gambar. */}
            <div className="relative mt-3 h-5">
              {dayMarks.map((d, i) => (
                <span
                  key={d}
                  className={`sc absolute top-0 text-ink-soft ${
                    i === dayMarks.length - 1 ? '-translate-x-full' : ''
                  }`}
                  style={{ left: `${(d / DAYS) * 100}%` }}
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Bacaan kurva */}
          <div className="mt-10 grid gap-8 border-t border-ink/12 pt-8 sm:grid-cols-2">
            <div>
              <p className="font-serif text-[1.6rem] leading-none text-plum">Hari ke-7</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Tanpa perawatan, mutu sudah menyentuh ambang layak jual. Tanda pertama biasanya
                muncul sejak hari ketiga.
              </p>
            </div>
            <div>
              <p className="font-serif text-[1.6rem] leading-none text-leaf">Hari ke-20</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                Dengan sachet di dalam kemasan, ambang yang sama baru tercapai hampir tiga minggu
                kemudian — selisih yang menentukan sampai atau tidaknya sebuah pengapalan.
              </p>
            </div>
          </div>

          <p className="sc mt-8 leading-[1.7] text-ink-soft">
            Garis putus kuningan menandai ambang layak jual. Kurva menggambarkan pola umum, bukan
            hasil satu pengujian tunggal.
          </p>
        </figure>
      </div>
    </section>
  );
}
