
/**
 * WordPress API service
 * This service handles API calls to a WordPress backend
 */

const API_URL = "https://your-wordpress-site.com/wp-json/wp/v2";

export interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  date: string;
  slug: string;
  featured_media: number;
  _embedded?: {
    "wp:featuredmedia"?: Array<{
      source_url: string;
    }>;
  };
}

export interface WordPressPage {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  slug: string;
}

export class WordPressAPI {
  baseUrl: string;

  constructor(baseUrl: string = API_URL) {
    this.baseUrl = baseUrl;
  }

  async getPosts(page: number = 1, perPage: number = 10, withFeaturedMedia: boolean = true): Promise<WordPressPost[]> {
    const embed = withFeaturedMedia ? "&_embed" : "";
    const response = await fetch(
      `${this.baseUrl}/posts?page=${page}&per_page=${perPage}${embed}`
    );
    
    if (!response.ok) {
      throw new Error(`Error fetching posts: ${response.statusText}`);
    }
    
    return await response.json();
  }

  async getPost(slug: string, withFeaturedMedia: boolean = true): Promise<WordPressPost> {
    const embed = withFeaturedMedia ? "&_embed" : "";
    const response = await fetch(
      `${this.baseUrl}/posts?slug=${slug}${embed}`
    );
    
    if (!response.ok) {
      throw new Error(`Error fetching post: ${response.statusText}`);
    }
    
    const posts = await response.json();
    if (!posts.length) {
      throw new Error(`Post not found: ${slug}`);
    }
    
    return posts[0];
  }

  async getPage(slug: string): Promise<WordPressPage> {
    const response = await fetch(
      `${this.baseUrl}/pages?slug=${slug}`
    );
    
    if (!response.ok) {
      throw new Error(`Error fetching page: ${response.statusText}`);
    }
    
    const pages = await response.json();
    if (!pages.length) {
      throw new Error(`Page not found: ${slug}`);
    }
    
    return pages[0];
  }

  async getMedia(id: number): Promise<any> {
    const response = await fetch(`${this.baseUrl}/media/${id}`);
    
    if (!response.ok) {
      throw new Error(`Error fetching media: ${response.statusText}`);
    }
    
    return await response.json();
  }
}

export const wordPressApi = new WordPressAPI();
