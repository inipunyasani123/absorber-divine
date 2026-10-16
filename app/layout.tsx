import "./globals.css"
import { Fraunces, Karla } from "next/font/google"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

/* Fraunces memikul judul — serif dengan sumbu optis dan italic yang lembut,
   pas untuk nada "dirawat" alih-alih "direkayasa". Karla memikul teks isi. */
const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
})

const body = Karla({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const __jsonld = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "EthyleneGuard — EthyleneAbsorber",
      brand: { "@type": "Brand", name: "EthyleneGuard" },
      description:
        "Sachet penyerap gas etilen. Satu sachet merawat ruang 1–2 m³ selama 30 hari, hingga 45 hari pada kondisi ideal.",
      additionalProperty: [
        { "@type": "PropertyValue", name: "Registrasi BPOM RI", value: "NA18191100273" },
        { "@type": "PropertyValue", name: "Cakupan per sachet", value: "1–2 m³" },
        { "@type": "PropertyValue", name: "Masa efektif", value: "30 hari (ideal 45 hari)" },
      ],
    },
    {
      "@type": "CreativeWork",
      name: "EthyleneAbsorber — Konsep Divine",
      description: "Konsep desain situs produk ethylene absorber bergaya pelat botani, dibuat untuk kontes brief PT Dickson Synergy.",
      url: "https://absorber-divine.pintuweb.id",
    },
  ],
};

export const metadata = {
  metadataBase: new URL("https://absorber-divine.pintuweb.id"),
  title: {
    default: "EthyleneAbsorber — Konsep Divine | Dickson Synergy",
    template: "%s · EthyleneGuard",
  },
  description: "Konsep situs EthyleneGuard bergaya pelat botani: kurva kesegaran, herbarium delapan komoditas, dan sachet penyerap etilen terdaftar BPOM RI.",
  applicationName: "EthyleneAbsorber",
  keywords: ["ethylene absorber", "kesegaran buah", "landing page elegan", "desain web"],
  authors: [{ name: "EthyleneAbsorber" }],
  creator: "EthyleneAbsorber",
  publisher: "EthyleneAbsorber",
  alternates: { canonical: "https://absorber-divine.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://absorber-divine.pintuweb.id",
    siteName: "EthyleneGuard · Dickson Synergy",
    title: "EthyleneAbsorber — Konsep Divine | Dickson Synergy",
    description: "Konsep situs EthyleneGuard bergaya pelat botani: kurva kesegaran, herbarium delapan komoditas, dan sachet penyerap etilen terdaftar BPOM RI.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "EthyleneAbsorber — Konsep Divine | Dickson Synergy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EthyleneAbsorber — Konsep Divine | Dickson Synergy",
    description: "Konsep situs EthyleneGuard bergaya pelat botani: kurva kesegaran, herbarium delapan komoditas, dan sachet penyerap etilen terdaftar BPOM RI.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
}

export const viewport = {
  themeColor: "#1b3b2f",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${display.variable} ${body.variable} antialiased bg-paper text-ink-soft selection:bg-brass-soft selection:text-ink overflow-x-hidden max-w-[100vw]`}>
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-paper"
        >
          Lompat ke konten utama
        </a>
        <Navbar />
        <main id="konten">{children}</main>
        <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        <aside aria-label="Tentang situs demo ini" style={{ display: 'block', margin: 0, padding: '12px 16px', background: '#0f1b33', color: '#dfe6f3', font: '400 13px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', textAlign: 'center' }}>
          Konsep desain untuk kontes, buatan PintuWeb — bukan situs resmi merek ini.{' '}
          <a href="https://www.pintuweb.id/kontak?demo=absorber-divine" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Buat yang seperti ini →</a>
        </aside>
        </body>
    </html>
  )
}
