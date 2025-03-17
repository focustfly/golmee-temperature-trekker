import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductSpecifications from "@/components/ProductSpecifications";
import TemperaturePerformance from "@/components/TemperaturePerformance";
import ColorSelection from "@/components/ColorSelection";
import UsageScenariosSection from "@/components/UsageScenariosSection";
import VideoSection from "@/components/VideoSection";
import CtaSection from "@/components/CtaSection";
import { ColorOption } from "@/components/ColorSelection";

const Index = () => {
  const [selectedColor, setSelectedColor] = useState("black");

  const colors: ColorOption[] = [
    { name: "Black", value: "#1A1F2C", image: "/lovable-uploads/69c29ead-9d29-4d2d-b60f-2f65c17c9927.png" },
    { name: "Red", value: "#FF3B30", image: "/lovable-uploads/c4d5385e-c0f6-449e-b294-c0331c8a0bfb.png" },
    { name: "Golden", value: "#D4AF37", image: "/lovable-uploads/ad93af90-e3e9-461c-a427-02724497f4dc.png" },
    { name: "Blue", value: "#3478F6", image: "/lovable-uploads/ec39d1bb-d67b-4a78-9196-611cb706bea4.png" },
    { name: "Pink", value: "#FFC0CB", image: "/lovable-uploads/450caec4-30db-4392-adcb-6a7274c244f4.png" }
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
      <VideoSection />
      <UsageScenariosSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
