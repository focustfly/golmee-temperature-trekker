
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
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
  );
};

export default CtaSection;
