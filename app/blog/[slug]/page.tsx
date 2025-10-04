import React from 'react';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getPostBySlug, getRelatedPosts, formatPostDate, type WordPressPost } from '@/lib/wordpress';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SocialShareButtons } from '@/components/SocialShareButtons';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  
  if (!post) {
    return {
      title: 'Post não encontrado',
    };
  }

  const title = post.title.rendered.replace(/<[^>]*>/g, '');
  const description = post.excerpt.rendered.replace(/<[^>]*>/g, '').substring(0, 160);
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];

  return {
    title: `${title} - Blog Franciney Freitas`,
    description,
    openGraph: {
      title,
      description,
      images: featuredImage ? [featuredImage.source_url] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = post.categories.length > 0 
    ? await getRelatedPosts(post.categories, post.id, 3)
    : [];


  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
  const author = post._embedded?.author?.[0];

  return (
    <section className="py-20 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/blog" prefetch={true}>
              <Button variant="ghost" className="group">
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Voltar ao Blog
              </Button>
            </Link>
          </div>

          {/* Article Header */}
          <article>
            {/* Featured Image */}
            {featuredImage && (
              <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-2xl mb-8 bg-muted">
                <Image
                  src={featuredImage.source_url}
                  alt={featuredImage.alt_text || post.title.rendered}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 896px"
                />
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-black mb-6 text-foreground tracking-tight">
              <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-muted-foreground">
              {author && (
                <div className="flex items-center gap-2">
                  {author.avatar_urls?.['48'] && (
                    <Image
                      src={author.avatar_urls['48']}
                      alt={author.name}
                      width={32}
                      height={32}
                      className="rounded-full"
                    />
                  )}
                  <div>
                    <p className="text-xs text-muted-foreground">Autor</p>
                    <p className="font-medium text-foreground">{author.name}</p>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <div>
                  <p className="text-xs text-muted-foreground">Publicado em</p>
                  <p className="font-medium text-foreground">
                    {formatPostDate(post.date, 'pt-BR')}
                  </p>
                </div>
              </div>
            </div>

            {/* Post Content */}
            <div
              className="prose prose-lg dark:prose-invert max-w-none mb-12
                prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-foreground
                prose-h1:text-4xl prose-h1:mt-12 prose-h1:mb-8
                prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-6
                prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3
                prose-h5:text-lg prose-h5:mt-4 prose-h5:mb-2
                prose-h6:text-base prose-h6:mt-4 prose-h6:mb-2
                prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6 prose-p:text-base
                prose-a:text-primary prose-a:no-underline prose-a:font-medium hover:prose-a:underline hover:prose-a:text-primary/80
                prose-strong:text-foreground prose-strong:font-bold
                prose-em:text-foreground prose-em:italic
                prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
                prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
                prose-li:text-muted-foreground prose-li:mb-3 prose-li:leading-relaxed
                prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-muted/30
                prose-blockquote:pl-6 prose-blockquote:pr-4 prose-blockquote:py-4 prose-blockquote:my-8
                prose-blockquote:italic prose-blockquote:text-muted-foreground
                prose-code:bg-muted prose-code:text-foreground prose-code:px-2 prose-code:py-1 
                prose-code:rounded prose-code:text-sm prose-code:font-mono
                prose-pre:bg-muted prose-pre:text-foreground prose-pre:p-6 prose-pre:rounded-xl 
                prose-pre:overflow-x-auto prose-pre:my-8
                prose-hr:border-border prose-hr:my-8
                prose-table:w-full prose-table:my-8
                prose-thead:border-b prose-thead:border-border
                prose-th:p-3 prose-th:text-left prose-th:font-semibold prose-th:text-foreground
                prose-td:p-3 prose-td:border-b prose-td:border-border prose-td:text-muted-foreground
                prose-figure:my-8
                prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-muted-foreground 
                prose-figcaption:mt-3 prose-figcaption:italic
                [&_img]:rounded-xl [&_img]:shadow-lg [&_img]:my-8 [&_img]:mx-auto [&_img]:max-w-full [&_img]:h-auto
                [&_.wp-caption]:my-8 [&_.wp-caption]:max-w-full
                [&_.wp-caption-text]:text-center [&_.wp-caption-text]:text-sm [&_.wp-caption-text]:text-muted-foreground 
                [&_.wp-caption-text]:mt-3 [&_.wp-caption-text]:italic
                [&_iframe]:w-full [&_iframe]:aspect-video [&_iframe]:rounded-xl [&_iframe]:shadow-lg [&_iframe]:my-8
                [&_.embed-responsive]:relative [&_.embed-responsive]:my-8 [&_.embed-responsive]:rounded-xl 
                [&_.embed-responsive]:overflow-hidden [&_.embed-responsive]:shadow-lg
                [&_.wp-block-embed]:my-8 [&_.wp-block-embed]:rounded-xl [&_.wp-block-embed]:overflow-hidden
                [&_.wp-block-embed__wrapper]:relative [&_.wp-block-embed__wrapper]:pb-[56.25%] [&_.wp-block-embed__wrapper]:h-0
                [&_.wp-block-embed__wrapper_iframe]:absolute [&_.wp-block-embed__wrapper_iframe]:top-0 
                [&_.wp-block-embed__wrapper_iframe]:left-0 [&_.wp-block-embed__wrapper_iframe]:w-full 
                [&_.wp-block-embed__wrapper_iframe]:h-full
                [&_.wp-block-image]:my-8 [&_.wp-block-image]:text-center
                [&_.wp-block-gallery]:my-8 [&_.wp-block-gallery]:grid [&_.wp-block-gallery]:gap-4
                [&_.alignleft]:float-left [&_.alignleft]:mr-6 [&_.alignleft]:mb-4
                [&_.alignright]:float-right [&_.alignright]:ml-6 [&_.alignright]:mb-4
                [&_.aligncenter]:mx-auto [&_.aligncenter]:block [&_.aligncenter]:text-center
                [&_.size-full]:w-full [&_.size-full]:h-auto
                [&_video]:w-full [&_video]:rounded-xl [&_video]:shadow-lg [&_video]:my-8"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />

            {/* Social Share Buttons */}
            <SocialShareButtons 
              postTitle={post.title.rendered.replace(/<[^>]*>/g, '')}
              postUrl={`${process.env.NEXT_PUBLIC_SITE_URL || 'https://francineyfreitas.dev'}/blog/${post.slug}`}
            />
          </article>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Posts Relacionados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => {
                  const relatedImage = relatedPost._embedded?.['wp:featuredmedia']?.[0];

                  return (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} prefetch={true}>
                      <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-1">
                        {relatedImage && (
                          <div className="relative h-40 w-full overflow-hidden bg-muted">
                            <Image
                              src={relatedImage.source_url}
                              alt={relatedImage.alt_text || relatedPost.title.rendered}
                              fill
                              className="object-cover group-hover:scale-110 transition-transform duration-500"
                              sizes="(max-width: 768px) 100vw, 33vw"
                              loading="lazy"
                            />
                          </div>
                        )}
                        <CardContent className="p-4">
                          <h3 className="font-bold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                            <div dangerouslySetInnerHTML={{ __html: relatedPost.title.rendered }} />
                          </h3>
                          <p className="text-xs text-muted-foreground mt-2">
                            {formatPostDate(relatedPost.date, 'pt-BR')}
                          </p>
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}