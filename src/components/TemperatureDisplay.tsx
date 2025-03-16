
import { useState, useEffect } from "react";

type TemperatureDisplayProps = {
  initialTemp?: number;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const TemperatureDisplay = ({
  initialTemp = 25,
  className = "",
  size = "md",
}: TemperatureDisplayProps) => {
  const [temperature, setTemperature] = useState(initialTemp);

  // Size classes
  const sizeClasses = {
    sm: "w-12 h-12 text-lg",
    md: "w-16 h-16 text-xl",
    lg: "w-24 h-24 text-3xl",
  };

  // Simulate slight temperature changes
  useEffect(() => {
    const interval = setInterval(() => {
      // Random slight fluctuation between -0.5 and +0.5
      const fluctuation = (Math.random() - 0.5) / 2;
      setTemperature((prevTemp) => {
        const newTemp = prevTemp + fluctuation;
        return parseFloat(newTemp.toFixed(1));
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${
        sizeClasses[size]
      } rounded-full bg-black flex items-center justify-center led-display animate-temp-glow ${className}`}
    >
      <div className="text-golmee-blue font-semibold flex items-center">
        <span>{temperature.toFixed(1)}</span>
        <span className="text-xs ml-0.5">°C</span>
      </div>
    </div>
  );
};

export default TemperatureDisplay;
