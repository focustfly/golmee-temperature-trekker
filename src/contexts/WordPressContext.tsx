
import React, { createContext, useContext, ReactNode } from 'react';
import { WordPressAPI } from '../services/wordpress-api';

interface WordPressContextProps {
  api: WordPressAPI;
}

const WordPressContext = createContext<WordPressContextProps | undefined>(undefined);

interface WordPressProviderProps {
  children: ReactNode;
  apiUrl?: string;
}

export const WordPressProvider: React.FC<WordPressProviderProps> = ({ 
  children, 
  apiUrl = "https://your-wordpress-site.com/wp-json/wp/v2" 
}) => {
  const api = new WordPressAPI(apiUrl);
  
  return (
    <WordPressContext.Provider value={{ api }}>
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
