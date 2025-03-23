
import { useState } from 'react';
import { useWordPressPosts } from '../hooks/use-wordpress-posts';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

const WordPressBlog = () => {
  const [page, setPage] = useState(1);
  const { data: posts, isLoading, isError, error } = useWordPressPosts(page, 5);

  if (isLoading) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Latest Blog Posts</h2>
        {[1, 2, 3].map((i) => (
          <div key={i} className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[400px]" />
            <Skeleton className="h-4 w-[300px]" />
            <Skeleton className="h-4 w-[350px]" />
          </div>
        ))}
      </div>
    );
  }

  if (isError) {
    return <div>Error loading blog posts: {error.message}</div>;
  }

  const sanitizeHTML = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Latest Blog Posts</h2>
      
      {posts?.map((post) => (
        <div key={post.id} className="space-y-2">
          <h3 className="text-xl font-semibold" dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
          
          {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
            <img 
              src={post._embedded['wp:featuredmedia'][0].source_url} 
              alt={sanitizeHTML(post.title.rendered)}
              className="w-full h-48 object-cover rounded-md"
            />
          )}
          
          <div className="text-gray-600 text-sm">
            {new Date(post.date).toLocaleDateString()}
          </div>
          
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          
          <Button variant="link" className="p-0 h-auto">
            Read More
          </Button>
        </div>
      ))}
      
      <div className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
        >
          Previous
        </Button>
        
        <Button 
          variant="outline" 
          onClick={() => setPage((p) => p + 1)}
          disabled={!posts || posts.length < 5}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default WordPressBlog;
