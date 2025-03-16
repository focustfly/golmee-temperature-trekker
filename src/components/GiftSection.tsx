
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const GiftSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="bg-golmee-blue/10 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-golmee-black mb-4">
                Perfect Gift for Couples
              </h2>
              <p className="text-gray-600 mb-6">
                The GolMee Temperature Trekker makes an excellent gift for loved ones. 
                Share warm moments together with matching thermos bottles that keep your 
                beverages just right.
              </p>
              <div className="flex items-center">
                <Heart className="text-red-500 mr-2" />
                <span className="text-golmee-black font-medium">Applicable People: Lovers</span>
              </div>
              <Button className="mt-6 bg-golmee-blue hover:bg-blue-600 text-white">
                Shop Valentine's Bundle
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img 
                src="/lovable-uploads/ceeb10c4-e008-4064-89e2-0546c9ae37bb.png"
                alt="GolMee Thermos Gift Collection" 
                className="max-h-[300px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
