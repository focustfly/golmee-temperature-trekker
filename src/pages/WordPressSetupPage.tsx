
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WordPressSetup from "@/components/WordPressSetup";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const WordPressSetupPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12 flex-grow">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            className="mb-6" 
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">WordPress Configuration</h1>
            <p className="text-gray-600">
              Connect your website to a WordPress backend
            </p>
          </div>
          
          <WordPressSetup />
          
          <div className="mt-10 space-y-4 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold">Troubleshooting Tips</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Make sure your WordPress site has the REST API enabled</li>
              <li>Check that CORS is properly configured on your WordPress server</li>
              <li>Verify the URL format is correct: https://your-site.com/wp-json/wp/v2</li>
              <li>Try accessing the API directly in your browser: https://your-site.com/wp-json/wp/v2/posts</li>
              <li>If you get CORS errors, install a WordPress CORS plugin</li>
            </ul>
            
            <div className="pt-4">
              <Button 
                variant="outline" 
                onClick={() => navigate('/blog')}
              >
                Go to Blog Page
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default WordPressSetupPage;
