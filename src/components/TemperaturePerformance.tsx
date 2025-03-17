
import { useState } from "react";
import CheckoutModal from "@/components/CheckoutModal";

const TemperaturePerformance = () => {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("pink");

  const colors = [
    { name: "Black", value: "#1A1F2C", image: "/lovable-uploads/dd1cdc9a-0a4f-4dcb-8253-2ae677de40bd.png" },
    { name: "Red", value: "#FF3B30", image: "/lovable-uploads/dc55dc2a-f417-4bbb-8837-015bed6880d9.png" },
    { name: "Golden", value: "#D4AF37", image: "/lovable-uploads/d2e8322b-e6c9-41c7-b7be-8a19ef044750.png" },
    { name: "Blue", value: "#3478F6", image: "/lovable-uploads/feddc02d-5366-4877-ab16-ab3f3d1320cb.png" },
    { name: "Pink", value: "#FFC0CB", image: "/lovable-uploads/8a40a1ac-f0f3-4615-9382-ee0b4e9cb33b.png" }
  ];

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
        
        <div className="max-w-5xl mx-auto">
          <img 
            src="/lovable-uploads/4762a9f1-8505-4b8c-9eac-8dd8cd903a6d.png" 
            alt="Temperature Performance Chart" 
            className="w-full rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            onClick={() => window.open("/lovable-uploads/4762a9f1-8505-4b8c-9eac-8dd8cd903a6d.png", "_blank")}
          />
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
