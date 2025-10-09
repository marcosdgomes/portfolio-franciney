import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { ThemeProvider } from '@/contexts/ThemeContext'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { GlobalBackground } from '@/components/GlobalBackground'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Franciney Sales de Freitas - Web Designer & Desenvolvedor Full Stack',
  description: 'Profissional multidisciplinar com experiência em desenvolvimento web, automação de processos e marketing digital. Especialista em React, Next.js, WordPress e Tailwind CSS.',
  keywords: 'web designer, desenvolvedor full stack, react, next.js, wordpress, tailwind css, seo, marketing digital, automação',
  authors: [{ name: 'Franciney Sales de Freitas' }],
  creator: 'Franciney Sales de Freitas',
  publisher: 'Franciney Sales de Freitas',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://francineyfreitas.dev'),
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/',
      'en-US': '/eng',
    },
  },
  openGraph: {
    title: 'Franciney Sales de Freitas - Web Designer & Desenvolvedor Full Stack',
    description: 'Profissional multidisciplinar com experiência em desenvolvimento web, automação de processos e marketing digital.',
    url: 'https://francineyfreitas.dev',
    siteName: 'Franciney Freitas Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Franciney Sales de Freitas - Web Designer & Desenvolvedor Full Stack',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Franciney Sales de Freitas - Web Designer & Desenvolvedor Full Stack',
    description: 'Profissional multidisciplinar com experiência em desenvolvimento web, automação de processos e marketing digital.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CKD0Z26W3S"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CKD0Z26W3S');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "tnn5szgpkg");
          `}
        </Script>

        <ThemeProvider>
          <LanguageProvider>
            <div className="min-h-screen text-foreground relative">
              <GlobalBackground />
              <div className="relative z-20">
                <Navigation />
                <main>
                  {children}
                </main>
                <Footer />
              </div>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
