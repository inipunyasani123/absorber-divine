import LegalBotani from '@/components/LegalBotani';
import { DIPERBARUI, KETENTUAN } from '@/lib/legal';
import { meta } from '@/lib/seo';

export const metadata = meta({
  title: 'Syarat & Ketentuan',
  description:
    'Ketentuan sample, perhitungan dosis, pemesanan, dan klaim mutu produk EthyleneGuard dan desiccant PT Dickson Synergy.',
  path: '/terms',
});

export default function TermsPage() {
  return <LegalBotani judul="Syarat & Ketentuan" updated={DIPERBARUI} intro={KETENTUAN.intro} bagian={KETENTUAN.bagian} />;
}
