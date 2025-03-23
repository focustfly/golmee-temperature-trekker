
import { useState } from 'react';
import { useWordPress } from '../contexts/WordPressContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';

const WordPressSetup = () => {
  const { isConnected, setApiUrl, error } = useWordPress();
  const [apiUrl, setApiUrlInput] = useState(
    localStorage.getItem('wordpressApiUrl') || 'https://demo.wp-api.org/wp-json/wp/v2'
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      setApiUrl(apiUrl);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>WordPress Connection</CardTitle>
        <CardDescription>
          Connect to your WordPress site's REST API
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="api-url" className="text-sm font-medium">
              WordPress API URL
            </label>
            <Input
              id="api-url"
              placeholder="https://your-site.com/wp-json/wp/v2"
              value={apiUrl}
              onChange={(e) => setApiUrlInput(e.target.value)}
              className="w-full"
            />
            <p className="text-sm text-gray-500">
              Format: https://your-wordpress-site.com/wp-json/wp/v2
            </p>
          </div>

          {isConnected ? (
            <Alert className="bg-green-50 border-green-200">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <AlertTitle className="text-green-800">Connected</AlertTitle>
              <AlertDescription className="text-green-700">
                Successfully connected to WordPress API
              </AlertDescription>
            </Alert>
          ) : error ? (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Connection Failed</AlertTitle>
              <AlertDescription>
                {error.message}
              </AlertDescription>
            </Alert>
          ) : null}

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Connecting...
              </>
            ) : (
              'Test Connection'
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between text-xs text-gray-500">
        <p>
          Need help? Make sure your WordPress site has REST API enabled and CORS configured.
        </p>
      </CardFooter>
    </Card>
  );
};

export default WordPressSetup;
