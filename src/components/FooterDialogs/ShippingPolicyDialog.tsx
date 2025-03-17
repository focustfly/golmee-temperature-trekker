
import { Truck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ShippingPolicyDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-gray-400 hover:text-white transition-colors flex items-center">
          Shipping Policy
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Truck className="h-5 w-5" />
            Shipping Policy
          </DialogTitle>
          <DialogDescription>
            Information about GolMee's shipping practices and delivery expectations.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[70vh] overflow-y-auto pr-2">
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-base mb-2">Processing Time</h3>
              <p className="text-sm text-muted-foreground">
                Orders are processed within 1-2 business days after payment confirmation. During peak seasons or promotional periods, processing may take up to 3 business days. You will receive a shipping confirmation email with tracking information once your order has been shipped.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-base mb-2">Shipping Methods & Timeframes</h3>
              <p className="text-sm text-muted-foreground">
                Standard shipping (7-10 business days) is free for all orders over $50. Express shipping (3-5 business days) is available for an additional fee at checkout. International shipping is available to select countries with delivery times ranging from 10-20 business days.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-base mb-2">Tracking Information</h3>
              <p className="text-sm text-muted-foreground">
                Once your order ships, you will receive a confirmation email with a tracking number. You can track your package's status through our website or directly through the carrier's tracking portal. Please allow 24-48 hours for tracking information to become active.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-base mb-2">International Orders</h3>
              <p className="text-sm text-muted-foreground">
                International customers are responsible for all duties, import taxes, and customs fees that may be incurred. GolMee is not responsible for delays due to customs processing. Please check your country's import regulations before placing an order.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-base mb-2">Shipping Addresses</h3>
              <p className="text-sm text-muted-foreground">
                We ship to the address you provide at checkout. It is your responsibility to provide a complete and accurate shipping address. GolMee is not responsible for packages delivered to incorrect addresses provided by customers.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-base mb-2">Lost or Damaged Packages</h3>
              <p className="text-sm text-muted-foreground">
                If your package is lost or damaged during transit, please contact our customer service team within 7 days of the expected delivery date. We will work with the shipping carrier to resolve the issue or process a replacement.
              </p>
            </div>
            
            <div className="pt-4">
              <p className="text-sm text-muted-foreground italic">
                Last updated: June 1, 2023
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ShippingPolicyDialog;
