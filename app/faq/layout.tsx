import { meta } from '@/lib/seo';

// /faq adalah client component, jadi metadatanya dipasang di layout ini.
export const metadata = meta({
  title: 'Tanya Jawab',
  description:
    'Delapan pertanyaan yang paling sering diajukan tentang EthyleneGuard: cara pakai, masa efektif, keamanan pangan, dan pengiriman ekspor.',
  path: '/faq',
});

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
