
import FeatureCard from "@/components/FeatureCard";
import { Thermometer, Droplet, Package, Leaf } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-golmee-black mb-4">
            Cutting-Edge Features
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The GolMee Temperature Trekker combines advanced technology with premium materials
            for an unparalleled beverage experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<Thermometer size={36} />}
            title="LED Temperature Display"
            description="Real-time digital display shows your beverage's exact temperature at a glance."
          />
          <FeatureCard 
            icon={<Droplet size={36} />}
            title="Vacuum Insulation"
            description="Double-wall vacuum insulation keeps drinks hot or cold for up to 24 hours."
          />
          <FeatureCard 
            icon={<Package size={36} />}
            title="304 Stainless Steel"
            description="Premium food-grade stainless steel ensures durability and purity of taste."
          />
          <FeatureCard 
            icon={<Leaf size={36} />}
            title="Eco-Friendly Design"
            description="Reduce single-use plastic waste with this reusable, sustainable thermos."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
