
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WordPressProvider } from "./contexts/WordPressContext";
import Index from "./pages/Index";
import WordPressBlogPage from "./pages/WordPressBlogPage";
import WordPressSetupPage from "./pages/WordPressSetupPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 10 * 1000,
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <WordPressProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<WordPressBlogPage />} />
            <Route path="/wordpress-setup" element={<WordPressSetupPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </WordPressProvider>
  </QueryClientProvider>
);

export default App;
