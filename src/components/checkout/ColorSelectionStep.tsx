
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
  return (
    <div className="space-y-6">
      <p className="text-gray-600">Choose your preferred Temperature Trekker color:</p>
      <div className="grid grid-cols-3 gap-4">
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
      <div className="flex justify-center pt-4">
        <img 
          src={getCurrentColorImage()}
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
