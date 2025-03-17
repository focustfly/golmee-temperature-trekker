
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
      src: "/lovable-uploads/8a40a1ac-f0f3-4615-9382-ee0b4e9cb33b.png",
      alt: "Pink Thermos with temperature display",
      color: "pink"
    },
    {
      src: "/lovable-uploads/feddc02d-5366-4877-ab16-ab3f3d1320cb.png",
      alt: "Blue Thermos with temperature display",
      color: "blue"
    },
    {
      src: "/lovable-uploads/d2e8322b-e6c9-41c7-b7be-8a19ef044750.png",
      alt: "Golden Thermos with temperature display",
      color: "golden"
    },
    {
      src: "/lovable-uploads/dd1cdc9a-0a4f-4dcb-8253-2ae677de40bd.png",
      alt: "Black Thermos with temperature display",
      color: "black"
    },
    {
      src: "/lovable-uploads/dc55dc2a-f417-4bbb-8837-015bed6880d9.png",
      alt: "Red Thermos with temperature display",
      color: "red"
    },
    {
      src: "/lovable-uploads/55bbb2b2-cefe-420a-9c9a-fd79a7a0c998.png",
      alt: "Thermos with temperature base display",
      color: "black"
    }
  ];

  const colors = [
    { name: "Black", value: "#1A1F2C", image: "/lovable-uploads/dd1cdc9a-0a4f-4dcb-8253-2ae677de40bd.png" },
    { name: "Red", value: "#FF3B30", image: "/lovable-uploads/dc55dc2a-f417-4bbb-8837-015bed6880d9.png" },
    { name: "Golden", value: "#D4AF37", image: "/lovable-uploads/d2e8322b-e6c9-41c7-b7be-8a19ef044750.png" },
    { name: "Blue", value: "#3478F6", image: "/lovable-uploads/feddc02d-5366-4877-ab16-ab3f3d1320cb.png" },
    { name: "Pink", value: "#FFC0CB", image: "/lovable-uploads/8a40a1ac-f0f3-4615-9382-ee0b4e9cb33b.png" }
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
