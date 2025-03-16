
import { cn } from "@/lib/utils";

type ColorOptionProps = {
  color: string;
  name: string;
  imageSrc: string;
  isActive?: boolean;
  onClick: () => void;
};

const ColorOption = ({
  color,
  name,
  imageSrc,
  isActive = false,
  onClick,
}: ColorOptionProps) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center space-y-2 cursor-pointer transition-all",
        isActive ? "scale-110" : "hover:scale-105"
      )}
      onClick={onClick}
    >
      <div
        className={cn(
          "w-16 h-16 rounded-full border-2 flex items-center justify-center overflow-hidden",
          isActive ? "border-golmee-blue" : "border-transparent"
        )}
      >
        <div
          className="w-full h-full"
          style={{ backgroundColor: color }}
        ></div>
      </div>
      <span
        className={cn(
          "text-sm font-medium",
          isActive ? "text-golmee-blue" : "text-gray-600"
        )}
      >
        {name}
      </span>
    </div>
  );
};

export default ColorOption;
