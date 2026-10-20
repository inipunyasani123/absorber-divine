/* ============================================================================
   "Herbarium Kesegaran" — konsep Plate Botani. Delapan pelat, satu per
   komoditas, dengan sifat pascapanen yang berlaku umum (literatur
   pascapanen): klimakterik atau tidak, seberapa banyak melepas etilen,
   seberapa peka, dan suhu simpan. Rekomendasi sachet mengikuti sifat itu —
   termasuk mengatakan "tidak perlu" bila masalahnya bukan etilen.
   ========================================================================== */

export type Tingkat = 'Sangat rendah' | 'Rendah' | 'Sedang' | 'Tinggi' | 'Sangat tinggi'

export type Pelat = {
  slug: string
  no: string
  nama: string
  latin: string
  suku: string
  image: string | null
  klimakterik: boolean
  melepas: Tingkat
  peka: Tingkat
  simpan: string
  catatan: string
  saran: 'Sangat disarankan' | 'Disarankan' | 'Tidak utama'
  alasan: string
}

export const PELAT: Pelat[] = [
  {
    slug: 'pisang',
    no: 'I',
    nama: 'Pisang',
    latin: 'Musa × paradisiaca',
    suku: 'Musaceae',
    image: '/images/herbarium/pisang.webp',
    klimakterik: true,
    melepas: 'Tinggi',
    peka: 'Tinggi',
    simpan: '13–15 °C; jangan dimasukkan kulkas',
    catatan: 'Menguning serempak dalam satu tandan karena buah yang lebih dulu matang memicu yang lain. Di bawah 12 °C kulitnya menghitam (kerusakan dingin).',
    saran: 'Sangat disarankan',
    alasan: 'Penghasil sekaligus sangat peka — sachet memutus rantai pematangan di dalam peti.',
  },
  {
    slug: 'apel',
    no: 'II',
    nama: 'Apel',
    latin: 'Malus domestica',
    suku: 'Rosaceae',
    image: '/images/herbarium/apel.webp',
    klimakterik: true,
    melepas: 'Sangat tinggi',
    peka: 'Tinggi',
    simpan: '0–4 °C, kelembapan tinggi',
    catatan: 'Salah satu penghasil etilen terbesar. Satu peti apel dapat mematangkan komoditas lain di ruangan yang sama.',
    saran: 'Sangat disarankan',
    alasan: 'Terutama bila dikirim atau disimpan bersama komoditas lain.',
  },
  {
    slug: 'pir',
    no: 'III',
    nama: 'Pir',
    latin: 'Pyrus communis',
    suku: 'Rosaceae',
    image: '/images/herbarium/pir.webp',
    klimakterik: true,
    melepas: 'Tinggi',
    peka: 'Tinggi',
    simpan: '−1–2 °C; dimatangkan di suhu ruang setelah dikeluarkan',
    catatan: 'Dipetik keras dan dimatangkan kemudian. Sekali proses dimulai, daging buahnya cepat melunak.',
    saran: 'Sangat disarankan',
    alasan: 'Menunda pelunakan selama perjalanan sampai buah memang ingin dimatangkan.',
  },
  {
    slug: 'mangga',
    no: 'IV',
    nama: 'Mangga',
    latin: 'Mangifera indica',
    suku: 'Anacardiaceae',
    image: '/images/herbarium/mangga.webp',
    klimakterik: true,
    melepas: 'Sedang',
    peka: 'Tinggi',
    simpan: '10–13 °C; di bawahnya rentan kerusakan dingin',
    catatan: 'Komoditas ekspor unggulan yang sering menempuh pelayaran 3–4 minggu. Pematangan yang terlalu cepat membuat kulit berbintik dan daging lembek.',
    saran: 'Sangat disarankan',
    alasan: 'Pelayaran laut selesai sebelum batas 30 hari masa efektif sachet.',
  },
  {
    slug: 'jeruk',
    no: 'V',
    nama: 'Jeruk',
    latin: 'Citrus sinensis',
    suku: 'Rutaceae',
    image: '/images/herbarium/jeruk.webp',
    klimakterik: false,
    melepas: 'Sangat rendah',
    peka: 'Sedang',
    simpan: '3–9 °C, tergantung varietas',
    catatan: 'Tidak lagi matang setelah dipetik. Etilen dari luar dapat menguningkan kulit dan mempercepat busuk pangkal.',
    saran: 'Disarankan',
    alasan: 'Hanya bila disimpan bersama penghasil etilen tinggi.',
  },
  {
    slug: 'anggur',
    no: 'VI',
    nama: 'Anggur',
    latin: 'Vitis vinifera',
    suku: 'Vitaceae',
    image: '/images/herbarium/anggur.webp',
    klimakterik: false,
    melepas: 'Sangat rendah',
    peka: 'Rendah',
    simpan: '−1–0 °C, kelembapan 90–95%',
    catatan: 'Masalah utamanya bukan etilen, melainkan jamur dan butir yang rontok dari tangkainya.',
    saran: 'Tidak utama',
    alasan: 'Kendalikan kelembapan lebih dulu — desiccant di kontainer lebih berpengaruh daripada sachet etilen.',
  },
  {
    slug: 'stroberi',
    no: 'VII',
    nama: 'Stroberi',
    latin: 'Fragaria × ananassa',
    suku: 'Rosaceae',
    image: '/images/herbarium/stroberi.webp',
    klimakterik: false,
    melepas: 'Rendah',
    peka: 'Rendah',
    simpan: '0 °C, secepatnya setelah panen',
    catatan: 'Umur simpannya pendek karena jamur, bukan karena pematangan. Setiap jam di suhu ruang memperpendek umurnya.',
    saran: 'Tidak utama',
    alasan: 'Dinginkan segera; etilen hanya berpengaruh kecil.',
  },
  {
    slug: 'bunga-potong',
    no: 'VIII',
    nama: 'Bunga potong',
    latin: 'mis. Dianthus caryophyllus',
    suku: 'Caryophyllaceae',
    image: '/images/herbarium/bunga-potong.webp',
    klimakterik: false,
    melepas: 'Rendah',
    peka: 'Sangat tinggi',
    simpan: '1–4 °C, batang di air bersih',
    catatan: 'Paling peka di antara semuanya: sedikit etilen dari buah di dekatnya cukup untuk membuat kelopak layu dan rontok.',
    saran: 'Sangat disarankan',
    alasan: 'Terutama bila dikirim atau dipajang di dekat buah.',
  },
]

export const pelatBySlug = (slug: string) => PELAT.find((p) => p.slug === slug)
