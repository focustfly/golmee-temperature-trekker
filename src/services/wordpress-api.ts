
/**
 * WordPress API service
 * This service handles API calls to a WordPress backend
 */

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

export interface WordPressAPIResponse<T> {
  data: T;
  totalPages?: number;
  totalItems?: number;
}

export class WordPressAPI {
  baseUrl: string;
  timeoutDuration: number;

  constructor(baseUrl: string, timeout: number = 10000) {
    this.baseUrl = baseUrl;
    this.timeoutDuration = timeout;
  }

  private async fetchWithTimeout(url: string, options: RequestInit = {}): Promise<Response> {
    const controller = new AbortController();
    const { signal } = controller;
    
    const timeoutId = setTimeout(() => controller.abort(), this.timeoutDuration);
    
    try {
      const response = await fetch(url, { ...options, signal });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof DOMException && error.name === 'AbortError') {
        throw new Error(`Request timeout after ${this.timeoutDuration}ms`);
      }
      throw error;
    }
  }

  async getPosts(page: number = 1, perPage: number = 10, withFeaturedMedia: boolean = true): Promise<WordPressPost[]> {
    try {
      const embed = withFeaturedMedia ? "&_embed" : "";
      const response = await this.fetchWithTimeout(
        `${this.baseUrl}/posts?page=${page}&per_page=${perPage}${embed}`
      );
      
      if (!response.ok) {
        throw new Error(`Error fetching posts: ${response.statusText} (${response.status})`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('WordPress API Error:', error);
      throw error instanceof Error ? error : new Error('Unknown error fetching posts');
    }
  }

  async getPost(slug: string, withFeaturedMedia: boolean = true): Promise<WordPressPost> {
    try {
      const embed = withFeaturedMedia ? "&_embed" : "";
      const response = await this.fetchWithTimeout(
        `${this.baseUrl}/posts?slug=${slug}${embed}`
      );
      
      if (!response.ok) {
        throw new Error(`Error fetching post: ${response.statusText} (${response.status})`);
      }
      
      const posts = await response.json();
      if (!posts.length) {
        throw new Error(`Post not found: ${slug}`);
      }
      
      return posts[0];
    } catch (error) {
      console.error('WordPress API Error:', error);
      throw error instanceof Error ? error : new Error(`Failed to fetch post: ${slug}`);
    }
  }

  async getPage(slug: string): Promise<WordPressPage> {
    try {
      const response = await this.fetchWithTimeout(
        `${this.baseUrl}/pages?slug=${slug}`
      );
      
      if (!response.ok) {
        throw new Error(`Error fetching page: ${response.statusText} (${response.status})`);
      }
      
      const pages = await response.json();
      if (!pages.length) {
        throw new Error(`Page not found: ${slug}`);
      }
      
      return pages[0];
    } catch (error) {
      console.error('WordPress API Error:', error);
      throw error instanceof Error ? error : new Error(`Failed to fetch page: ${slug}`);
    }
  }

  async getMedia(id: number): Promise<any> {
    try {
      const response = await this.fetchWithTimeout(`${this.baseUrl}/media/${id}`);
      
      if (!response.ok) {
        throw new Error(`Error fetching media: ${response.statusText} (${response.status})`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('WordPress API Error:', error);
      throw error instanceof Error ? error : new Error(`Failed to fetch media: ${id}`);
    }
  }
}

// Create a singleton instance with default settings
export const wordPressApi = new WordPressAPI('https://demo.wp-api.org/wp-json/wp/v2');
