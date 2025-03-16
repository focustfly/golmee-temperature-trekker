
import { Clock, Package, Smartphone, Shield } from "lucide-react";

const ProductSpecifications = () => {
  return (
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
  );
};

export default ProductSpecifications;
