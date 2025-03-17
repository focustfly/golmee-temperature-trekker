
import { Shield } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const PrivacyPolicyDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-gray-400 hover:text-white transition-colors flex items-center">
          Privacy Policy
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Privacy Policy
          </DialogTitle>
          <DialogDescription>
            GolMee's privacy practices and how we handle your data.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[70vh] overflow-y-auto pr-2">
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-base mb-2">Information We Collect</h3>
              <p className="text-sm text-muted-foreground">
                We collect information you provide directly, including personal information such as your name, email address, shipping address, and payment information when you make a purchase. We also collect device information and usage data through cookies and similar technologies.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-base mb-2">How We Use Your Information</h3>
              <p className="text-sm text-muted-foreground">
                We use your information to process orders, deliver products, provide customer support, send important notifications, and improve our products and services. With your consent, we may also send marketing communications about new products or special offers.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-base mb-2">Data Sharing and Disclosure</h3>
              <p className="text-sm text-muted-foreground">
                We share your information with trusted third-party service providers who help us operate our business, such as payment processors and shipping companies. We do not sell your personal information to third parties for marketing purposes.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-base mb-2">Data Security</h3>
              <p className="text-sm text-muted-foreground">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-base mb-2">Your Rights</h3>
              <p className="text-sm text-muted-foreground">
                Depending on your location, you may have rights to access, correct, delete, or restrict the processing of your personal information. You may also have the right to data portability and to withdraw consent at any time.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-base mb-2">Policy Updates</h3>
              <p className="text-sm text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting a notice on our website or sending you an email.
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

export default PrivacyPolicyDialog;
