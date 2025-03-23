
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WordPressBlog from "@/components/WordPressBlog";

const WordPressBlogPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <WordPressBlog />
      </div>
      <Footer />
    </div>
  );
};

export default WordPressBlogPage;
