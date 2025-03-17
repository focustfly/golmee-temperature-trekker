
import { useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import CheckoutModal from "@/components/CheckoutModal";

const TemperaturePerformance = () => {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("pink");

  const thermosImages = [
    {
      src: "/lovable-uploads/d03b99e3-dfbf-43ef-9c5a-0440441bac28.png",
      alt: "Pink Thermos with temperature display",
      color: "pink"
    },
    {
      src: "/lovable-uploads/8fdc7dda-db0b-44a2-abdd-8542bc719946.png",
      alt: "Blue Thermos with temperature display",
      color: "blue"
    },
    {
      src: "/lovable-uploads/80c0512d-9033-4e7c-9634-6e4d4c02fe55.png",
      alt: "Golden Thermos with temperature display",
      color: "golden"
    },
    {
      src: "/lovable-uploads/da1ca4c3-1f61-4e8d-90d7-b82f05052d75.png",
      alt: "Black Thermos with temperature display",
      color: "black"
    },
    {
      src: "/lovable-uploads/2326b07b-9a7c-4da6-9889-85d82b0f4aa5.png",
      alt: "Red Thermos with temperature display",
      color: "red"
    }
  ];

  const colors = [
    { name: "Black", value: "#1A1F2C", image: "/lovable-uploads/626b3ba1-16b8-43ee-a17d-b22251f9f3a2.png" },
    { name: "Red", value: "#FF3B30", image: "/lovable-uploads/73f0360a-8b6b-4cbf-80c2-def31eaea282.png" },
    { name: "Golden", value: "#D4AF37", image: "/lovable-uploads/4c263923-2e03-4134-ac18-7c2213f23e65.png" },
    { name: "Blue", value: "#3478F6", image: "/lovable-uploads/966a9311-1cdd-44a4-9afb-307655918534.png" },
    { name: "Pink", value: "#FFC0CB", image: "/lovable-uploads/f72ec7bb-eb88-4ad1-abc2-1f1ea39ffec6.png" }
  ];

  const handleImageClick = (color: string) => {
    setSelectedColor(color);
    setCheckoutOpen(true);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-golmee-black mb-4">
            Superior Temperature Performance
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our advanced vacuum insulation technology keeps your beverages at the ideal temperature for longer.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <img 
            src="/lovable-uploads/4762a9f1-8505-4b8c-9eac-8dd8cd903a6d.png" 
            alt="Temperature Performance Chart" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Available in 5 Elegant Colors</h3>
          <div className="relative max-w-2xl mx-auto px-12">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {thermosImages.map((image, index) => (
                  <CarouselItem key={index} className="flex items-center justify-center">
                    <div 
                      className="bg-white p-6 rounded-lg shadow-md overflow-hidden w-full max-w-xs mx-auto cursor-pointer transition-transform hover:scale-105"
                      onClick={() => handleImageClick(image.color)}
                    >
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-auto object-contain transition-all duration-300 max-h-[350px]"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-2" />
              <CarouselNext className="absolute -right-2" />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        open={checkoutOpen}
        onOpenChange={setCheckoutOpen}
        colors={colors}
        selectedColor={selectedColor}
        onColorSelect={setSelectedColor}
      />
    </section>
  );
};

export default TemperaturePerformance;
