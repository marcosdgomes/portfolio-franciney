import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { ThemeProvider } from '@/contexts/ThemeContext'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Franciney Sales de Freitas - Web Designer & Full Stack Developer',
  description: 'Multidisciplinary professional with experience in web development, process automation and digital marketing. Specialist in React, Next.js, WordPress and Tailwind CSS.',
  keywords: 'web designer, full stack developer, react, next.js, wordpress, tailwind css, seo, digital marketing, automation',
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
    canonical: '/eng',
    languages: {
      'pt-BR': '/',
      'en-US': '/eng',
    },
  },
  openGraph: {
    title: 'Franciney Sales de Freitas - Web Designer & Full Stack Developer',
    description: 'Multidisciplinary professional with experience in web development, process automation and digital marketing.',
    url: 'https://francineyfreitas.dev/eng',
    siteName: 'Franciney Freitas Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Franciney Sales de Freitas - Web Designer & Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Franciney Sales de Freitas - Web Designer & Full Stack Developer',
    description: 'Multidisciplinary professional with experience in web development, process automation and digital marketing.',
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

export default function EngLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
}
