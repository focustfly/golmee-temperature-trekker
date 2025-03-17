
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import CheckoutModal from "@/components/CheckoutModal";
import { ColorOption } from "@/components/checkout/types";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("black");

  const colors: ColorOption[] = [
    { name: "Black", value: "#1A1F2C", image: "/lovable-uploads/626b3ba1-16b8-43ee-a17d-b22251f9f3a2.png" },
    { name: "Red", value: "#FF3B30", image: "/lovable-uploads/73f0360a-8b6b-4cbf-80c2-def31eaea282.png" },
    { name: "Golden", value: "#D4AF37", image: "/lovable-uploads/4c263923-2e03-4134-ac18-7c2213f23e65.png" },
    { name: "Blue", value: "#3478F6", image: "/lovable-uploads/966a9311-1cdd-44a4-9afb-307655918534.png" },
    { name: "White", value: "#FFFFFF", image: "/lovable-uploads/8ae69f4a-86e5-4f3f-9911-814b6751feef.png" },
    { name: "Pink", value: "#FFC0CB", image: "/lovable-uploads/f72ec7bb-eb88-4ad1-abc2-1f1ea39ffec6.png" }
  ];

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

  const handleBuyNowClick = () => {
    setCheckoutOpen(true);
    setIsMobileMenuOpen(false); // Close mobile menu if open
  };

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
          <Button 
            className="bg-golmee-blue hover:bg-blue-600 text-white"
            onClick={handleBuyNowClick}
          >
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
            <Button 
              className="bg-golmee-blue hover:bg-blue-600 text-white w-full"
              onClick={handleBuyNowClick}
            >
              Buy Now
            </Button>
          </div>
        </nav>
      )}

      {/* Checkout Modal */}
      <CheckoutModal
        open={checkoutOpen}
        onOpenChange={setCheckoutOpen}
        colors={colors}
        selectedColor={selectedColor}
        onColorSelect={setSelectedColor}
      />
    </header>
  );
};

export default Navbar;
