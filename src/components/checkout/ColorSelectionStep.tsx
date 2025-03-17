
import { Button } from "@/components/ui/button";
import ColorOption from "@/components/ColorOption";
import { ColorOption as ColorOptionType } from "@/components/checkout/types";

interface ColorSelectionStepProps {
  colors: ColorOptionType[];
  selectedColor: string;
  onColorSelect: (color: string) => void;
  onContinue: () => void;
  getCurrentColorImage: () => string;
}

const ColorSelectionStep = ({
  colors,
  selectedColor,
  onColorSelect,
  onContinue,
  getCurrentColorImage,
}: ColorSelectionStepProps) => {
  // Updated colors with new images
  const updatedColors: ColorOptionType[] = [
    { name: "Black", value: "#1A1F2C", image: "/lovable-uploads/69c29ead-9d29-4d2d-b60f-2f65c17c9927.png" },
    { name: "Red", value: "#FF3B30", image: "/lovable-uploads/c4d5385e-c0f6-449e-b294-c0331c8a0bfb.png" },
    { name: "Golden", value: "#D4AF37", image: "/lovable-uploads/ad93af90-e3e9-461c-a427-02724497f4dc.png" },
    { name: "Blue", value: "#3478F6", image: "/lovable-uploads/ec39d1bb-d67b-4a78-9196-611cb706bea4.png" },
    { name: "Pink", value: "#FFC0CB", image: "/lovable-uploads/450caec4-30db-4392-adcb-6a7274c244f4.png" }
  ];
  
  // Get the actual image from our updated colors
  const getImage = () => {
    const color = updatedColors.find(c => c.name.toLowerCase() === selectedColor);
    return color ? color.image : updatedColors[0].image;
  };

  return (
    <div className="space-y-6">
      <p className="text-gray-600">Choose your preferred Temperature Trekker color:</p>
      <div className="grid grid-cols-3 gap-4">
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
      <div className="flex justify-center pt-4">
        <img 
          src={getImage()}
          alt={`Temperature Trekker in ${selectedColor}`}
          className="h-40 object-contain"
        />
      </div>
      <div className="flex justify-end">
        <Button className="bg-golmee-blue hover:bg-blue-600 text-white" onClick={onContinue}>
          Continue to Shipping
        </Button>
      </div>
    </div>
  );
};

export default ColorSelectionStep;
