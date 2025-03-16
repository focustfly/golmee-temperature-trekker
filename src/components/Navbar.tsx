
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-golmee-black">
            GolMee<span className="text-golmee-blue">.</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-golmee-black hover:text-golmee-blue transition-colors">
            Features
          </a>
          <a href="#specs" className="text-golmee-black hover:text-golmee-blue transition-colors">
            Specifications
          </a>
          <a href="#usage" className="text-golmee-black hover:text-golmee-blue transition-colors">
            Usage
          </a>
          <Button className="bg-golmee-blue hover:bg-blue-600 text-white">
            Buy Now
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-golmee-black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white py-4 px-6 shadow-lg">
          <div className="flex flex-col space-y-4">
            <a
              href="#features"
              className="text-golmee-black hover:text-golmee-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#specs"
              className="text-golmee-black hover:text-golmee-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Specifications
            </a>
            <a
              href="#usage"
              className="text-golmee-black hover:text-golmee-blue transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Usage
            </a>
            <Button className="bg-golmee-blue hover:bg-blue-600 text-white w-full">
              Buy Now
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
