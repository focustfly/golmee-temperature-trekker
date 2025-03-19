
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CheckoutModal from "@/components/CheckoutModal";
import { ColorOption } from "@/components/checkout/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";

const CtaSection = () => {
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState("black");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const colors: ColorOption[] = [
    { name: "Black", value: "#1A1F2C", image: "/lovable-uploads/69c29ead-9d29-4d2d-b60f-2f65c17c9927.png" },
    { name: "Red", value: "#FF3B30", image: "/lovable-uploads/c4d5385e-c0f6-449e-b294-c0331c8a0bfb.png" },
    { name: "Golden", value: "#D4AF37", image: "/lovable-uploads/ad93af90-e3e9-461c-a427-02724497f4dc.png" },
    { name: "Blue", value: "#3478F6", image: "/lovable-uploads/ec39d1bb-d67b-4a78-9196-611cb706bea4.png" },
    { name: "Pink", value: "#FFC0CB", image: "/lovable-uploads/450caec4-30db-4392-adcb-6a7274c244f4.png" }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setName("");
      setEmail("");
      setMarketingConsent(false);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-golmee-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Upgrade Your Drinking Experience?
            </h2>
            <p className="text-gray-300 mb-8">
              Join thousands of satisfied customers who've made the GolMee Temperature Trekker 
              an essential part of their daily routine.
            </p>
            <Button 
              className="bg-golmee-blue hover:bg-blue-600 text-white px-8 py-6 text-lg"
              onClick={() => setCheckoutOpen(true)}
            >
              Buy Your Temperature Trekker Now
            </Button>
            <p className="text-gray-400 mt-4">CE / EU Certified • Shipping Worldwide</p>
          </div>
          
          <div className="bg-golmee-black/60 p-6 rounded-lg border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-6">Stay updated with new products, exclusive offers, and care tips for your GolMee products.</p>
            
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-white">Full Name</Label>
                <Input 
                  id="name" 
                  placeholder="Enter your name" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-gray-900 border-gray-700 text-white"
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-white">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-gray-900 border-gray-700 text-white"
                />
              </div>
              
              <div className="flex items-start space-x-2">
                <Checkbox 
                  id="consent" 
                  checked={marketingConsent}
                  onCheckedChange={(checked) => setMarketingConsent(checked as boolean)}
                  required
                  className="mt-1 data-[state=checked]:bg-golmee-blue"
                />
                <Label htmlFor="consent" className="text-gray-300 text-sm leading-tight cursor-pointer">
                  I agree to receive marketing communications about GolMee products, 
                  offers, and promotions. You can unsubscribe at any time.
                </Label>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-golmee-blue hover:bg-blue-600 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe Now"}
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      <CheckoutModal
        open={checkoutOpen}
        onOpenChange={setCheckoutOpen}
        colors={colors}
        selectedColor={selectedColor}
        onColorSelect={setSelectedColor}
      />
    </section>
  );
};

export default CtaSection;
