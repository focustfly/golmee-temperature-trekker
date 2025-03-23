
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const GiftSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-golmee-black mb-4">
            Perfect Gift for Everyone
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The Temperature Trekker makes an ideal gift for friends, family, or colleagues who appreciate quality and functionality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">For Outdoor Enthusiasts</h3>
              <p className="text-gray-600 mb-4">
                Perfect for hikers, campers, and adventure seekers who need reliable temperature control on their journeys.
              </p>
              <Button variant="outline" className="w-full">Add Gift Wrapping</Button>
            </CardContent>
          </Card>
          
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">For Office Workers</h3>
              <p className="text-gray-600 mb-4">
                Ideal for professionals who want to keep their beverages at the perfect temperature throughout the workday.
              </p>
              <Button variant="outline" className="w-full">Add Gift Wrapping</Button>
            </CardContent>
          </Card>
          
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">For Health Enthusiasts</h3>
              <p className="text-gray-600 mb-4">
                Great for fitness lovers who want to maintain hydration with temperature-controlled drinks.
              </p>
              <Button variant="outline" className="w-full">Add Gift Wrapping</Button>
            </CardContent>
          </Card>
        </div>

        {expanded && (
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Each Temperature Trekker can be gift-wrapped in premium packaging with a personalized message card.
            </p>
            <Button 
              variant="outline" 
              onClick={() => setExpanded(false)}
              className="mt-4"
            >
              Show Less
            </Button>
          </div>
        )}

        {!expanded && (
          <div className="mt-8 text-center">
            <Button 
              variant="outline" 
              onClick={() => setExpanded(true)}
            >
              Learn More About Gift Options
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default GiftSection;
