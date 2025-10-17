import { Metadata } from 'next';
import GoogleAdsCourse from '@/components/landing-pages/GoogleAdsCourse';

export const metadata: Metadata = {
  title: 'Curso Google Ads Descomplicado – Aprenda a anunciar com segurança',
  description: 'Domine o Google Ads e crie campanhas que vendem com pouco investimento. Aprenda passo a passo com Franciney Freitas.',
  keywords: 'Google Ads, curso, marketing digital, anúncios, tráfego pago, Franciney Freitas',
  openGraph: {
    title: 'Curso Google Ads Descomplicado – Aprenda a anunciar com segurança',
    description: 'Domine o Google Ads e crie campanhas que vendem com pouco investimento. Aprenda passo a passo com Franciney Freitas.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Curso Google Ads Descomplicado – Aprenda a anunciar com segurança',
    description: 'Domine o Google Ads e crie campanhas que vendem com pouco investimento. Aprenda passo a passo com Franciney Freitas.',
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📊</text></svg>",
  },
};

export default function GoogleAdsCoursePage() {
  return <GoogleAdsCourse />;
}
