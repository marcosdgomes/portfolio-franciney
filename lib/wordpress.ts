const WORDPRESS_API_URL = 'https://alonerd.com/wp-json/wp/v2';

export interface WordPressPost {
  id: number;
  date: string;
  modified: string;
  slug: string;
  status: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded?: {
    author?: Array<{
      id: number;
      name: string;
      url: string;
      description: string;
      avatar_urls: {
        [key: string]: string;
      };
    }>;
    'wp:featuredmedia'?: Array<{
      id: number;
      source_url: string;
      alt_text: string;
      media_details: {
        width: number;
        height: number;
      };
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
  };
}

export interface WordPressCategory {
  id: number;
  name: string;
  slug: string;
  description: string;
  count: number;
}

export interface WordPressAuthor {
  id: number;
  name: string;
  url: string;
  description: string;
  avatar_urls: {
    [key: string]: string;
  };
}

/**
 * Fetch posts from WordPress by category slug
 */
export async function getPostsByCategory(
  categorySlug: string = 'ia',
  page: number = 1,
  perPage: number = 12
): Promise<{ posts: WordPressPost[]; totalPages: number; total: number }> {
  try {
    // First, get the category ID
    const categoryResponse = await fetch(
      `${WORDPRESS_API_URL}/categories?slug=${categorySlug}`,
      { next: { revalidate: 86400 } } // Cache for 24 hours
    );

    if (!categoryResponse.ok) {
      throw new Error('Failed to fetch category');
    }

    const categories: WordPressCategory[] = await categoryResponse.json();
    
    if (categories.length === 0) {
      return { posts: [], totalPages: 0, total: 0 };
    }

    const categoryId = categories[0].id;

    // Fetch posts with embedded data
    const postsResponse = await fetch(
      `${WORDPRESS_API_URL}/posts?categories=${categoryId}&page=${page}&per_page=${perPage}&_embed`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!postsResponse.ok) {
      throw new Error('Failed to fetch posts');
    }

    const posts: WordPressPost[] = await postsResponse.json();
    const totalPages = parseInt(postsResponse.headers.get('X-WP-TotalPages') || '1');
    const total = parseInt(postsResponse.headers.get('X-WP-Total') || '0');

    return { posts, totalPages, total };
  } catch (error) {
    console.error('Error fetching posts:', error);
    return { posts: [], totalPages: 0, total: 0 };
  }
}

/**
 * Fetch a single post by slug
 */
export async function getPostBySlug(slug: string): Promise<WordPressPost | null> {
  try {
    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );

    if (!response.ok) {
      throw new Error('Failed to fetch post');
    }

    const posts: WordPressPost[] = await response.json();

    if (posts.length === 0) {
      return null;
    }

    return posts[0];
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

/**
 * Fetch related posts by category
 */
export async function getRelatedPosts(
  categoryIds: number[],
  excludePostId: number,
  limit: number = 3
): Promise<WordPressPost[]> {
  try {
    if (categoryIds.length === 0) {
      return [];
    }

    const response = await fetch(
      `${WORDPRESS_API_URL}/posts?categories=${categoryIds.join(',')}&exclude=${excludePostId}&per_page=${limit}&_embed`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch related posts');
    }

    const posts: WordPressPost[] = await response.json();
    return posts;
  } catch (error) {
    console.error('Error fetching related posts:', error);
    return [];
  }
}

/**
 * Format date to locale string
 */
export function formatPostDate(date: string, locale: string = 'pt-BR'): string {
  const dateObj = new Date(date);
  return dateObj.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Strip HTML tags from content
 */
export function stripHtmlTags(html: string): string {
  return html.replace(/<[^>]*>/g, '');
}

/**
 * Get excerpt from content
 */
export function getExcerpt(content: string, maxLength: number = 150): string {
  const text = stripHtmlTags(content);
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength).trim() + '...';
}

