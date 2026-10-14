import LegalBotani from '@/components/LegalBotani';
import { DIPERBARUI, PRIVASI } from '@/lib/legal';

export const metadata = {
  title: 'Kebijakan Privasi',
  description: 'Data apa yang diminta saat Anda meminta sample EthyleneGuard, untuk apa dipakai, dan berapa lama disimpan.',
  alternates: { canonical: 'https://absorber-divine.pintuweb.id/privacy' },
};

export default function PrivacyPage() {
  return <LegalBotani judul="Kebijakan Privasi" updated={DIPERBARUI} intro={PRIVASI.intro} bagian={PRIVASI.bagian} />;
}
