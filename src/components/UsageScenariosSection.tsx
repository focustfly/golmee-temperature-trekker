
import UsageScenario from "@/components/UsageScenario";
import { Mountain, Briefcase, Package, Bike } from "lucide-react";

const UsageScenariosSection = () => {
  return (
    <section id="usage" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-golmee-black mb-4">
            Perfect for Every Situation
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From outdoor adventures to office environments, the GolMee Temperature Trekker adapts to your lifestyle.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <UsageScenario 
            title="Outdoor Adventures"
            description="Keep your drinks hot or cold during hiking, camping, or any outdoor activity."
            imageSrc="/lovable-uploads/13284008-fe53-4998-ade1-dbc4524f6c97.png"
            icon={<Mountain size={18} />}
          />
          <UsageScenario 
            title="Office Use"
            description="Perfect for busy professionals who want to enjoy their beverage at the ideal temperature all day."
            imageSrc="/lovable-uploads/746ce071-1a1a-47f9-9882-196a78efb0d5.png"
            icon={<Briefcase size={18} />}
          />
          <UsageScenario 
            title="On the Road"
            description="Fits most car cup holders for convenient access during your commute or road trips."
            imageSrc="/lovable-uploads/746ce071-1a1a-47f9-9882-196a78efb0d5.png"
            icon={<Package size={18} />}
          />
          <UsageScenario 
            title="Sports & Fitness"
            description="Stay hydrated during workouts or cycling with a bottle that fits standard bottle holders."
            imageSrc="/lovable-uploads/13284008-fe53-4998-ade1-dbc4524f6c97.png"
            icon={<Bike size={18} />}
          />
        </div>
      </div>
    </section>
  );
};

export default UsageScenariosSection;
