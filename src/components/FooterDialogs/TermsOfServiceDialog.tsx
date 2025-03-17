
import { FileText } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const TermsOfServiceDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-gray-400 hover:text-white transition-colors flex items-center">
          Terms of Service
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Terms of Service
          </DialogTitle>
          <DialogDescription>
            Please read these terms carefully before using GolMee products.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[70vh] overflow-y-auto pr-2">
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-base mb-2">Acceptance of Terms</h3>
              <p className="text-sm text-muted-foreground">
                By accessing or using GolMee products and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-base mb-2">Product Use</h3>
              <p className="text-sm text-muted-foreground">
                GolMee products are designed for personal use only. You agree not to modify, reverse engineer, or attempt to extract the source code of our hardware or software. Any misuse that damages the product may void your warranty.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-base mb-2">Account Responsibilities</h3>
              <p className="text-sm text-muted-foreground">
                If you create an account to use with our smart products, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You must immediately notify GolMee of any unauthorized use of your account.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-base mb-2">Intellectual Property</h3>
              <p className="text-sm text-muted-foreground">
                All content, features, and functionality of GolMee products, including but not limited to design, text, graphics, logos, and code, are the exclusive property of GolMee and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-base mb-2">Limitation of Liability</h3>
              <p className="text-sm text-muted-foreground">
                GolMee shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our products or services. In no event shall our liability exceed the amount you paid for the product.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-base mb-2">Changes to Terms</h3>
              <p className="text-sm text-muted-foreground">
                GolMee reserves the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Your continued use of our products after any changes indicates your acceptance of the new terms.
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

export default TermsOfServiceDialog;
