import { Button } from "@/components/ui/button";
import { useState } from "react";
import CheckoutModal from "@/components/CheckoutModal";
import { ColorOption } from "@/components/checkout/types";

const CtaSection = () => {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("black");

  const colors: ColorOption[] = [
    { name: "Black", value: "#1A1F2C", image: "/lovable-uploads/69c29ead-9d29-4d2d-b60f-2f65c17c9927.png" },
    { name: "Red", value: "#FF3B30", image: "/lovable-uploads/c4d5385e-c0f6-449e-b294-c0331c8a0bfb.png" },
    { name: "Golden", value: "#D4AF37", image: "/lovable-uploads/ad93af90-e3e9-461c-a427-02724497f4dc.png" },
    { name: "Blue", value: "#3478F6", image: "/lovable-uploads/ec39d1bb-d67b-4a78-9196-611cb706bea4.png" },
    { name: "Pink", value: "#FFC0CB", image: "/lovable-uploads/450caec4-30db-4392-adcb-6a7274c244f4.png" }
  ];

  return (
    <section className="py-20 bg-golmee-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Upgrade Your Drinking Experience?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Join thousands of satisfied customers who've made the GolMee Temperature Trekker 
          an essential part of their daily routine.
        </p>
        <Button 
          className="bg-golmee-blue hover:bg-blue-600 text-white px-8 py-6 text-lg"
          onClick={() => setCheckoutOpen(true)}
        >
          Buy Your Temperature Trekker Now
        </Button>
        <p className="text-gray-400 mt-4">CE / EU Certified • Shipping Worldwide</p>
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

export default CtaSection;
