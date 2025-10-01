import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getPostsByCategory, formatPostDate, getExcerpt, type WordPressPost } from '@/lib/wordpress';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog de IA e Tecnologia - Franciney Freitas',
  description: 'Últimas novidades sobre Inteligência Artificial, desenvolvimento web e tecnologia.',
  keywords: 'inteligência artificial, IA, tecnologia, desenvolvimento web, blog, notícias tech',
};

interface BlogPageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = await searchParams;
  const currentPage = parseInt(resolvedSearchParams.page || '1');
  const { posts, totalPages } = await getPostsByCategory('ia', currentPage, 12);

  return (
    <section className="py-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 text-foreground tracking-tight">
              Blog de IA e Tecnologia
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Últimas novidades sobre Inteligência Artificial
            </p>
          </div>

          {/* Posts Grid */}
          {posts.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {posts.map((post) => {
                const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
                const author = post._embedded?.author?.[0];
                const excerpt = getExcerpt(post.excerpt.rendered, 120);

                return (
                  <div key={post.id}>
                    <Link href={`/blog/${post.slug}`} prefetch={true}>
                      <Card className="h-full overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:-translate-y-2">
                        {/* Featured Image */}
                        {featuredImage && (
                          <div className="relative h-48 w-full overflow-hidden bg-muted">
                            <Image
                              src={featuredImage.source_url}
                              alt={featuredImage.alt_text || post.title.rendered}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              priority={false}
                              loading="lazy"
                            />
                          </div>
                        )}

                        <CardHeader>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                            <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                          </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-4">
                          {/* Excerpt */}
                          <p className="text-muted-foreground text-sm line-clamp-3">
                            {excerpt}
                          </p>

                          {/* Meta Information */}
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            {author && (
                              <div className="flex items-center gap-1">
                                <User className="h-3 w-3" />
                                <span>{author.name}</span>
                              </div>
                            )}
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{formatPostDate(post.date, 'pt-BR')}</span>
                            </div>
                          </div>

                          {/* Read More */}
                          <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-4 transition-all">
                            <span>Ler mais</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                );
              })}
            </div>
          )}

          {/* No Posts Found */}
          {posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">Nenhum post encontrado</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-4 mt-12">
              <Button
                variant="outline"
                disabled={currentPage === 1}
                asChild
              >
                <Link href={`/blog?page=${Math.max(1, currentPage - 1)}`}>
                  Anterior
                </Link>
              </Button>
              <span className="flex items-center text-muted-foreground">
                Página {currentPage} de {totalPages}
              </span>
              <Button
                variant="outline"
                disabled={currentPage === totalPages}
                asChild
              >
                <Link href={`/blog?page=${Math.min(totalPages, currentPage + 1)}`}>
                  Próxima
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}