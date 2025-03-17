
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

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-golmee-black mb-4">
            Choose Your Style
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The GolMee Temperature Trekker comes in six elegant colors to match your personal style, all at the same price.
          </p>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 mb-12">
            {colors.map((color) => (
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
              src={currentColorImage}
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
        colors={colors}
        selectedColor={selectedColor}
        onColorSelect={onColorSelect}
      />
    </section>
  );
};

export default ColorSelection;
