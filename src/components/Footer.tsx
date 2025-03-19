
import { Heart } from "lucide-react";
import FAQDialog from "./FooterDialogs/FAQDialog";
import ContactDialog from "./FooterDialogs/ContactDialog";
import WarrantyDialog from "./FooterDialogs/WarrantyDialog";
import PrivacyPolicyDialog from "./FooterDialogs/PrivacyPolicyDialog";
import TermsOfServiceDialog from "./FooterDialogs/TermsOfServiceDialog";
import ShippingPolicyDialog from "./FooterDialogs/ShippingPolicyDialog";
import TrackOrderDialog from "./FooterDialogs/TrackOrderDialog";

const Footer = () => {
  return (
    <footer className="bg-golmee-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">GolMee</h3>
            <p className="text-gray-400 mb-4">
              Innovative smart drinkware for modern lifestyles.
            </p>
            <div className="flex items-center">
              <span className="text-xs bg-white/20 px-2 py-1 rounded">CE / EU Certified</span>
            </div>
            <div className="mt-6">
              <img 
                src="/lovable-uploads/098bd6e3-b4e2-49dc-841e-bf9a20cb7f01.png" 
                alt="Secured Payment - Powered by Stripe" 
                className="max-w-[200px] h-auto"
              />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#specs" className="text-gray-400 hover:text-white transition-colors">Specifications</a></li>
              <li><a href="#usage" className="text-gray-400 hover:text-white transition-colors">Usage Scenarios</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><FAQDialog /></li>
              <li><ContactDialog /></li>
              <li><WarrantyDialog /></li>
              <li><TrackOrderDialog /></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><PrivacyPolicyDialog /></li>
              <li><TermsOfServiceDialog /></li>
              <li><ShippingPolicyDialog /></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex justify-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} GolMee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
