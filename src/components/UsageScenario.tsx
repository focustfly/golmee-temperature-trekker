
import { ReactNode } from "react";

type UsageScenarioProps = {
  title: string;
  description: string;
  imageSrc: string;
  icon?: ReactNode;
};

const UsageScenario = ({
  title,
  description,
  imageSrc,
  icon,
}: UsageScenarioProps) => {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300">
        <div className="flex items-center mb-2">
          {icon && <span className="text-white mr-2">{icon}</span>}
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-white/90 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default UsageScenario;
