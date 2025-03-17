
import { Button } from "@/components/ui/button";
import TemperatureDisplay from "@/components/TemperatureDisplay";
import BlogDialog from "@/components/FooterDialogs/BlogDialog";

type HeroSectionProps = {
  currentColorImage: string;
};

const HeroSection = ({ currentColorImage }: HeroSectionProps) => {
  return (
    <section className="hero-gradient pt-28 pb-20 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-golmee-black mb-4">
              Smart Temperature <br />
              <span className="text-golmee-blue">Tracking Thermos</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              500ml Digital Thermos Bottle with LED Temperature Display, 
              304 Stainless Steel Vacuum Insulated for 12-24 hour temperature control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-golmee-blue hover:bg-blue-600 text-white px-8 py-6 text-lg">
                Buy Now
              </Button>
              <BlogDialog 
                trigger={
                  <Button 
                    variant="outline" 
                    className="border-golmee-blue text-golmee-blue hover:bg-golmee-blue/10 px-8 py-6 text-lg"
                  >
                    Learn More
                  </Button>
                }
              />
            </div>
          </div>
          <div className="md:w-1/2 relative flex justify-center">
            <img 
              src={currentColorImage}
              alt="GolMee Temperature Trekker Thermos" 
              className="max-h-[500px] object-contain z-10"
            />
            <div className="absolute top-1/2 right-1/3 transform -translate-y-1/2">
              <TemperatureDisplay initialTemp={25.5} size="lg" />
            </div>
            <div className="absolute w-72 h-72 bg-golmee-blue/10 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 filter blur-3xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
