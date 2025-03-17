
import { ShieldCheck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const WarrantyDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-gray-400 hover:text-white transition-colors flex items-center">
          Warranty
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5" />
            Warranty Information
          </DialogTitle>
          <DialogDescription>
            GolMee stands behind our products with a comprehensive warranty program.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[70vh] overflow-y-auto pr-2">
          <div className="space-y-5">
            <div>
              <h3 className="font-medium text-base mb-2">Standard Warranty</h3>
              <p className="text-sm text-muted-foreground">
                Every GolMee product comes with a 2-year limited warranty that covers manufacturing defects and malfunctions under normal use conditions. This includes the electronic components, insulation properties, and structural integrity.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-base mb-2">What's Covered</h3>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Manufacturing defects in materials and workmanship</li>
                <li>Temperature sensing components and displays</li>
                <li>Insulation performance issues</li>
                <li>Seal and gasket failures</li>
                <li>Electronic components including battery (for 1 year)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-base mb-2">What's Not Covered</h3>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Normal wear and tear</li>
                <li>Accidental damage, drops or impacts</li>
                <li>Improper care or cleaning</li>
                <li>Unauthorized modifications or repairs</li>
                <li>Commercial use</li>
                <li>Cosmetic issues that don't affect functionality</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-base mb-2">How to Claim</h3>
              <p className="text-sm text-muted-foreground">
                To initiate a warranty claim, please contact our customer service team with your proof of purchase and a description of the issue. You can reach us through the Contact form or email at warranty@golmee.com.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-base mb-2">Extended Protection Plan</h3>
              <p className="text-sm text-muted-foreground">
                For additional peace of mind, consider our Extended Protection Plan which covers your GolMee product for an additional 2 years beyond the standard warranty period and includes accidental damage protection.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WarrantyDialog;
