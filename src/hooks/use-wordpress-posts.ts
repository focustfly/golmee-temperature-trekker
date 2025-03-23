
import { useQuery } from '@tanstack/react-query';
import { useWordPress } from '../contexts/WordPressContext';
import { WordPressPost } from '../services/wordpress-api';

export const useWordPressPosts = (page = 1, perPage = 10) => {
  const { api } = useWordPress();
  
  return useQuery<WordPressPost[], Error>({
    queryKey: ['wp-posts', page, perPage],
    queryFn: () => api.getPosts(page, perPage),
  });
};

export const useWordPressPost = (slug: string) => {
  const { api } = useWordPress();
  
  return useQuery<WordPressPost, Error>({
    queryKey: ['wp-post', slug],
    queryFn: () => api.getPost(slug),
  });
};

export const useWordPressPage = (slug: string) => {
  const { api } = useWordPress();
  
  return useQuery<any, Error>({
    queryKey: ['wp-page', slug],
    queryFn: () => api.getPage(slug),
  });
};
