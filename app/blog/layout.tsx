import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog de IA e Tecnologia - Franciney Freitas',
  description: 'Últimas novidades sobre Inteligência Artificial, desenvolvimento web e tecnologia.',
  keywords: 'inteligência artificial, IA, tecnologia, desenvolvimento web, blog, notícias tech',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

