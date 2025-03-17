
import { useState } from "react";
import { Button } from "@/components/ui/button";
import ColorOption from "@/components/ColorOption";
import TemperatureDisplay from "@/components/TemperatureDisplay";
import CheckoutModal from "@/components/CheckoutModal";

export type ColorOption = {
  name: string;
  value: string;
  image: string;
};

type ColorSelectionProps = {
  colors: ColorOption[];
  selectedColor: string;
  onColorSelect: (color: string) => void;
  currentColorImage: string;
};

const ColorSelection = ({
  colors,
  selectedColor,
  onColorSelect,
  currentColorImage,
}: ColorSelectionProps) => {
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  // Updated colors array with new image paths
  const updatedColors: ColorOption[] = [
    { name: "Black", value: "#1A1F2C", image: "/lovable-uploads/dd1cdc9a-0a4f-4dcb-8253-2ae677de40bd.png" },
    { name: "Red", value: "#FF3B30", image: "/lovable-uploads/dc55dc2a-f417-4bbb-8837-015bed6880d9.png" },
    { name: "Golden", value: "#D4AF37", image: "/lovable-uploads/d2e8322b-e6c9-41c7-b7be-8a19ef044750.png" },
    { name: "Blue", value: "#3478F6", image: "/lovable-uploads/feddc02d-5366-4877-ab16-ab3f3d1320cb.png" },
    { name: "Pink", value: "#FFC0CB", image: "/lovable-uploads/8a40a1ac-f0f3-4615-9382-ee0b4e9cb33b.png" }
  ];

  // Get current image from our updated colors
  const getCurrentImage = () => {
    const color = updatedColors.find(c => c.name.toLowerCase() === selectedColor);
    return color ? color.image : updatedColors[0].image;
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-golmee-black mb-4">
            Choose Your Style
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The GolMee Temperature Trekker comes in five elegant colors to match your personal style, all at the same price.
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-6 mb-12">
            {updatedColors.map((color) => (
              <ColorOption 
                key={color.name}
                color={color.value}
                name={color.name}
                imageSrc={color.image}
                isActive={selectedColor === color.name.toLowerCase()}
                onClick={() => onColorSelect(color.name.toLowerCase())}
              />
            ))}
          </div>
          
          <div className="relative w-full max-w-md">
            <img 
              src={getCurrentImage()}
              alt={`GolMee Thermos in ${selectedColor}`}
              className="w-full max-h-[500px] object-contain"
            />
            <div className="absolute bottom-16 right-16">
              <TemperatureDisplay initialTemp={25.5} size="md" />
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <h3 className="text-xl font-semibold mb-2">All Colors - Same Flat Price</h3>
            <p className="text-gray-600 mb-6">Every color option includes the same premium features and quality</p>
            <Button 
              className="bg-golmee-blue hover:bg-blue-600 text-white"
              onClick={() => setCheckoutOpen(true)}
            >
              Select This Color
            </Button>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        open={checkoutOpen}
        onOpenChange={setCheckoutOpen}
        colors={updatedColors}
        selectedColor={selectedColor}
        onColorSelect={onColorSelect}
      />
    </section>
  );
};

export default ColorSelection;
