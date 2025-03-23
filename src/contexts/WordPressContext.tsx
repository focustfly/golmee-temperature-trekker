import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { WordPressAPI } from '../services/wordpress-api';
import { toast } from '@/components/ui/use-toast';

interface WordPressContextProps {
  api: WordPressAPI;
  isConnected: boolean;
  setApiUrl: (url: string) => void;
  error: Error | null;
}

const WordPressContext = createContext<WordPressContextProps | undefined>(undefined);

interface WordPressProviderProps {
  children: ReactNode;
  apiUrl?: string;
}

export const WordPressProvider: React.FC<WordPressProviderProps> = ({ 
  children, 
  apiUrl = localStorage.getItem('wordpressApiUrl') || "https://demo.wp-api.org/wp-json/wp/v2" 
}) => {
  const [api, setApi] = useState<WordPressAPI>(new WordPressAPI(apiUrl));
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const setApiUrl = (url: string) => {
    localStorage.setItem('wordpressApiUrl', url);
    setApi(new WordPressAPI(url));
    testConnection(url);
  };

  const testConnection = async (url: string) => {
    try {
      const testApi = new WordPressAPI(url);
      await testApi.getPosts(1, 1);
      setIsConnected(true);
      setError(null);
      toast({
        title: "WordPress Connected",
        description: "Successfully connected to WordPress API",
      });
    } catch (err) {
      setIsConnected(false);
      setError(err instanceof Error ? err : new Error('Unknown error occurred'));
      toast({
        title: "Connection Failed",
        description: err instanceof Error ? err.message : 'Could not connect to WordPress API',
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    testConnection(apiUrl);
  }, [apiUrl]);

  return (
    <WordPressContext.Provider value={{ api, isConnected, setApiUrl, error }}>
      {children}
    </WordPressContext.Provider>
  );
};

export const useWordPress = () => {
  const context = useContext(WordPressContext);
  if (context === undefined) {
    throw new Error('useWordPress must be used within a WordPressProvider');
  }
  return context;
};
