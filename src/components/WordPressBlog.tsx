
import { useState } from 'react';
import { useWordPressPosts } from '../hooks/use-wordpress-posts';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { useWordPress } from '../contexts/WordPressContext';
import { Link } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';

const WordPressBlog = () => {
  const [page, setPage] = useState(1);
  const { isConnected, error } = useWordPress();
  const { data: posts, isLoading, isError, error: postsError } = useWordPressPosts(page, 5);

  if (!isConnected) {
    return (
      <div className="space-y-4 p-6 bg-amber-50 rounded-lg border border-amber-200">
        <div className="flex items-start space-x-2">
          <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5" />
          <div>
            <h3 className="font-medium text-amber-800">WordPress Not Connected</h3>
            <p className="text-amber-700 mt-1">
              To display blog posts, you need to connect to a WordPress site.
            </p>
          </div>
        </div>
        <Link to="/wordpress-setup">
          <Button className="bg-amber-600 hover:bg-amber-700">
            Set Up WordPress Connection
          </Button>
        </Link>
        <p className="text-sm text-amber-600">
          {error?.message && `Error: ${error.message}`}
        </p>
      </div>
    );
  }

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
    return (
      <div className="space-y-4 p-6 bg-red-50 rounded-lg border border-red-200">
        <h2 className="text-2xl font-bold">Latest Blog Posts</h2>
        <div className="flex items-start space-x-2">
          <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
          <div>
            <h3 className="font-medium text-red-800">Error Loading Posts</h3>
            <p className="text-red-700 mt-1">
              {postsError?.message || "Failed to load blog posts. Please try again."}
            </p>
            <Link to="/wordpress-setup" className="mt-4 inline-block">
              <Button variant="outline" className="text-red-700 border-red-300">
                Check WordPress Connection
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Latest Blog Posts</h2>
        <p className="text-gray-500">No blog posts found. Create some posts in your WordPress site.</p>
      </div>
    );
  }

  const sanitizeHTML = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || '';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Latest Blog Posts</h2>
        <Link to="/wordpress-setup">
          <Button variant="outline" size="sm">
            WordPress Settings
          </Button>
        </Link>
      </div>
      
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
