import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import TemperatureDisplay from "@/components/TemperatureDisplay";
import ColorOption from "@/components/ColorOption";
import UsageScenario from "@/components/UsageScenario";
import { Button } from "@/components/ui/button";
import { 
  Coffee, 
  Thermometer, 
  Droplet, 
  Package, 
  Clock, 
  Shield, 
  Leaf, 
  Heart,
  Smartphone,
  Bike,
  Briefcase,
  Mountain
} from "lucide-react";

const Index = () => {
  const [selectedColor, setSelectedColor] = useState("black");

  const colors = [
    { name: "Black", value: "#1A1F2C", image: "/lovable-uploads/626b3ba1-16b8-43ee-a17d-b22251f9f3a2.png" },
    { name: "Purple", value: "#D3C5F0", image: "/lovable-uploads/cf312bf0-6f44-45d5-9707-e77fafe0a782.png" },
    { name: "Pink", value: "#FFC0CB", image: "/lovable-uploads/f72ec7bb-eb88-4ad1-abc2-1f1ea39ffec6.png" }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
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
                <Button variant="outline" className="border-golmee-blue text-golmee-blue hover:bg-golmee-blue/10 px-8 py-6 text-lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 relative flex justify-center">
              <img 
                src="/lovable-uploads/626b3ba1-16b8-43ee-a17d-b22251f9f3a2.png" 
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
      
      {/* Features Section */}
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
      
      {/* Product Details Section */}
      <section id="specs" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src="/lovable-uploads/b1db625e-052d-4e0b-900a-b4ea05dc69c9.png" 
                alt="GolMee Temperature Trekker Inside View" 
                className="max-w-full mx-auto"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl md:text-4xl font-bold text-golmee-black mb-6">
                Technical Specifications
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Clock className="text-golmee-blue mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Temperature Retention</h3>
                    <p className="text-gray-600">
                      Maintains hot beverages above 50°C for 12 hours and cold drinks below 10°C for 24 hours.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Package className="text-golmee-blue mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Premium Materials</h3>
                    <p className="text-gray-600">
                      304 stainless steel interior, vacuum insulation layer, and durable exterior coating.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Smartphone className="text-golmee-blue mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Smart LED Display</h3>
                    <p className="text-gray-600">
                      Battery-powered temperature sensor with clear LED readout in degrees Celsius.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Shield className="text-golmee-blue mt-1 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Certifications</h3>
                    <p className="text-gray-600">
                      CE / EU certified, meeting strict European standards for quality and safety.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-semibold mb-4">Dimensions & Capacity</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-500 text-sm">Height</p>
                    <p className="font-medium">22.5 cm</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Diameter</p>
                    <p className="font-medium">6 cm</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Capacity</p>
                    <p className="font-medium">500 ml</p>
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Weight</p>
                    <p className="font-medium">350 g</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Temperature Performance Chart */}
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
          
          <div className="max-w-4xl mx-auto">
            <img 
              src="/lovable-uploads/4762a9f1-8505-4b8c-9eac-8dd8cd903a6d.png" 
              alt="Temperature Performance Chart" 
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      
      {/* Color Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-golmee-black mb-4">
              Choose Your Style
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The GolMee Temperature Trekker comes in three elegant colors to match your personal style.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="flex justify-center space-x-8 mb-12">
              {colors.map((color) => (
                <ColorOption 
                  key={color.name}
                  color={color.value}
                  name={color.name}
                  imageSrc={color.image}
                  isActive={selectedColor === color.name.toLowerCase()}
                  onClick={() => setSelectedColor(color.name.toLowerCase())}
                />
              ))}
            </div>
            
            <div className="relative w-full max-w-md">
              <img 
                src={colors.find(c => c.name.toLowerCase() === selectedColor)?.image || colors[0].image}
                alt={`GolMee Thermos in ${selectedColor}`}
                className="w-full max-h-[500px] object-contain"
              />
              <div className="absolute bottom-16 right-16">
                <TemperatureDisplay initialTemp={25.5} size="md" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Usage Scenarios */}
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
      
      {/* Gift Section */}
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
                  src="/lovable-uploads/626b3ba1-16b8-43ee-a17d-b22251f9f3a2.png"
                  alt="GolMee Thermos Gift" 
                  className="max-h-[300px] object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-golmee-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Upgrade Your Drinking Experience?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied customers who've made the GolMee Temperature Trekker 
            an essential part of their daily routine.
          </p>
          <Button className="bg-golmee-blue hover:bg-blue-600 text-white px-8 py-6 text-lg">
            Buy Your Temperature Trekker Now
          </Button>
          <p className="text-gray-400 mt-4">CE / EU Certified • Shipping Worldwide</p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
