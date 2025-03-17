
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CheckoutModal from "@/components/CheckoutModal";
import { ColorOption } from "@/components/checkout/types";

const CtaSection = () => {
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
