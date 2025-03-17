
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductSpecifications from "@/components/ProductSpecifications";
import TemperaturePerformance from "@/components/TemperaturePerformance";
import ColorSelection from "@/components/ColorSelection";
import UsageScenariosSection from "@/components/UsageScenariosSection";
import CtaSection from "@/components/CtaSection";
import { ColorOption } from "@/components/ColorSelection";

const Index = () => {
  const [selectedColor, setSelectedColor] = useState("black");

  const colors: ColorOption[] = [
    { name: "Black", value: "#1A1F2C", image: "/lovable-uploads/626b3ba1-16b8-43ee-a17d-b22251f9f3a2.png" },
    { name: "Red", value: "#FF3B30", image: "/lovable-uploads/73f0360a-8b6b-4cbf-80c2-def31eaea282.png" },
    { name: "Golden", value: "#D4AF37", image: "/lovable-uploads/4c263923-2e03-4134-ac18-7c2213f23e65.png" },
    { name: "Blue", value: "#3478F6", image: "/lovable-uploads/966a9311-1cdd-44a4-9afb-307655918534.png" },
    { name: "White", value: "#FFFFFF", image: "/lovable-uploads/8ae69f4a-86e5-4f3f-9911-814b6751feef.png" },
    { name: "Pink", value: "#FFC0CB", image: "/lovable-uploads/f72ec7bb-eb88-4ad1-abc2-1f1ea39ffec6.png" }
  ];

  const getCurrentColorImage = () => {
    const color = colors.find(c => c.name.toLowerCase() === selectedColor);
    return color ? color.image : colors[0].image;
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection currentColorImage={getCurrentColorImage()} />
      <FeaturesSection />
      <ProductSpecifications />
      <TemperaturePerformance />
      <ColorSelection 
        colors={colors}
        selectedColor={selectedColor}
        onColorSelect={setSelectedColor}
        currentColorImage={getCurrentColorImage()}
      />
      <UsageScenariosSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
