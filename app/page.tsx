import Hero from '@/components/Hero'
import Ripening from '@/components/Ripening'
import FreshnessCurve from '@/components/FreshnessCurve'
import Ritual from '@/components/Ritual'
import Specimens from '@/components/Specimens'
import Assurance from '@/components/Assurance'
import Closing from '@/components/Closing'

/* Halaman disusun sebagai kumpulan pelat bernomor Romawi:
   I pernyataan · II anatomi pematangan · III kurva kesegaran · IV cara kerja
   V spesimen · VI jaminan · VII tanya jawab.
   Pelat "catatan lapangan" (kutipan bernama + foto wajah) dihapus: kutipan
   itu karangan, sedangkan isi konsep hanya boleh berasal dari brief. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Ripening />
      <FreshnessCurve />
      <Ritual />
      <Specimens />
      <Assurance />
      <Closing />
    </>
  )
}
