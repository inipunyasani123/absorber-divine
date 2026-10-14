import LegalBotani from '@/components/LegalBotani';
import { DIPERBARUI, KETENTUAN } from '@/lib/legal';

export const metadata = {
  title: 'Syarat & Ketentuan',
  description: 'Ketentuan sample, perhitungan dosis, pemesanan, dan klaim mutu produk EthyleneGuard dan desiccant PT Dickson Synergy.',
  alternates: { canonical: 'https://absorber-divine.pintuweb.id/terms' },
};

export default function TermsPage() {
  return <LegalBotani judul="Syarat & Ketentuan" updated={DIPERBARUI} intro={KETENTUAN.intro} bagian={KETENTUAN.bagian} />;
}
