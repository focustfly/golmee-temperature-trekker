
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const TemperaturePerformance = () => {
  const thermosImages = [
    {
      src: "/lovable-uploads/d03b99e3-dfbf-43ef-9c5a-0440441bac28.png",
      alt: "Pink Thermos with temperature display"
    },
    {
      src: "/lovable-uploads/8fdc7dda-db0b-44a2-abdd-8542bc719946.png",
      alt: "Blue Thermos with temperature display"
    },
    {
      src: "/lovable-uploads/80c0512d-9033-4e7c-9634-6e4d4c02fe55.png",
      alt: "Golden Thermos with temperature display"
    },
    {
      src: "/lovable-uploads/da1ca4c3-1f61-4e8d-90d7-b82f05052d75.png",
      alt: "Black Thermos with temperature display"
    },
    {
      src: "/lovable-uploads/2326b07b-9a7c-4da6-9889-85d82b0f4aa5.png",
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
        
        <div className="max-w-4xl mx-auto mb-16">
          <img 
            src="/lovable-uploads/4762a9f1-8505-4b8c-9eac-8dd8cd903a6d.png" 
            alt="Temperature Performance Chart" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Available in 5 Elegant Colors</h3>
          <div className="relative max-w-2xl mx-auto px-12">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {thermosImages.map((image, index) => (
                  <CarouselItem key={index} className="flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden w-full max-w-xs mx-auto">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-auto object-contain transition-all duration-300 max-h-[350px]"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-2" />
              <CarouselNext className="absolute -right-2" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TemperaturePerformance;
