
import { HelpCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const FAQDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-gray-400 hover:text-white transition-colors flex items-center">
          FAQ
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5" />
            Frequently Asked Questions
          </DialogTitle>
          <DialogDescription>
            Find answers to commonly asked questions about GolMee products.
          </DialogDescription>
        </DialogHeader>
        <div className="max-h-[70vh] overflow-y-auto pr-2">
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-base mb-2">How long does the GolMee cup keep drinks hot/cold?</h3>
              <p className="text-sm text-muted-foreground">
                GolMee smart drinkware keeps hot drinks hot for up to 12 hours and cold drinks cold for up to 24 hours, thanks to our advanced vacuum insulation technology.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-base mb-2">Is the GolMee cup dishwasher safe?</h3>
              <p className="text-sm text-muted-foreground">
                The GolMee cup body is dishwasher safe, but we recommend hand washing the lid to preserve the electronic components and extend their lifespan.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-base mb-2">How does the temperature display work?</h3>
              <p className="text-sm text-muted-foreground">
                GolMee cups have embedded temperature sensors that measure your beverage temperature in real-time. The display updates every 30 seconds and shows the current temperature of your drink.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-base mb-2">How long does the battery last?</h3>
              <p className="text-sm text-muted-foreground">
                With normal daily use, the GolMee cup's battery lasts approximately 2 weeks before requiring a recharge. The battery indicator will alert you when power is running low.
              </p>
            </div>
            
            <div>
              <h3 className="font-medium text-base mb-2">Is the GolMee cup leak-proof?</h3>
              <p className="text-sm text-muted-foreground">
                Yes, GolMee cups feature a secure leak-proof seal. The lid is designed with a locking mechanism that prevents spills even when the cup is turned upside down.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FAQDialog;
