
import { cn } from "@/lib/utils";

const TemperaturePerformance = () => {
  const thermosImages = [
    {
      src: "/lovable-uploads/552c7d57-ae84-43ae-b376-7bdde563dc9d.png",
      alt: "Red and Golden Thermos bottles"
    },
    {
      src: "/lovable-uploads/1ffe9682-e815-4001-a4d9-d0e01f44b95a.png",
      alt: "Pink Thermos with temperature display"
    },
    {
      src: "/lovable-uploads/e30bf70c-bedc-477a-9452-0e61fa79201b.png",
      alt: "Blue Thermos with temperature display"
    },
    {
      src: "/lovable-uploads/c1e379b9-98eb-4a22-b8f0-30ca9d8b177b.png",
      alt: "Golden Thermos with temperature display"
    },
    {
      src: "/lovable-uploads/b8a4c24b-5022-4095-9bbd-983fc556a94e.png",
      alt: "Black Thermos with temperature display"
    },
    {
      src: "/lovable-uploads/c7ded4ec-325b-4b2f-8ea5-de465851cf9d.png",
      alt: "Red Thermos with temperature display"
    }
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
        
        <div className="max-w-4xl mx-auto mb-12">
          <img 
            src="/lovable-uploads/4762a9f1-8505-4b8c-9eac-8dd8cd903a6d.png" 
            alt="Temperature Performance Chart" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Available in 6 Elegant Colors</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {thermosImages.map((image, index) => (
              <div key={index} className={cn(
                "flex flex-col items-center group",
                "transition-all duration-300 hover:scale-105"
              )}>
                <div className="bg-white p-4 rounded-lg shadow-md overflow-hidden w-full">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-auto object-contain transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemperaturePerformance;
