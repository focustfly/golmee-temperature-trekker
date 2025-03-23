
import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

import ColorSelectionStep from "@/components/checkout/ColorSelectionStep";
import ShippingStep from "@/components/checkout/ShippingStep";
import PaymentStep from "@/components/checkout/PaymentStep";
import ConfirmationStep from "@/components/checkout/ConfirmationStep";
import { 
  ColorOption, 
  CheckoutFormValues, 
  checkoutFormSchema, 
  CheckoutStep 
} from "@/components/checkout/types";
import { saveOrder } from "@/utils/orderStorage";

interface CheckoutModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  colors: ColorOption[];
  selectedColor: string;
  onColorSelect: (color: string) => void;
}

const CheckoutModal = ({
  open,
  onOpenChange,
  colors,
  selectedColor,
  onColorSelect,
}: CheckoutModalProps) => {
  const [step, setStep] = useState<CheckoutStep>("color");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderReference, setOrderReference] = useState<string>("");
  const { toast } = useToast();
  
  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      address: "",
      city: "",
      postalCode: "",
      country: "",
      // Card fields removed since we're using Stripe checkout
    },
  });

  const onSubmit = async (data: CheckoutFormValues) => {
    setIsSubmitting(true);
    
    try {
      // This will only be called for confirmation from Stripe success return
      // Most of the payment logic is now in the PaymentStep component
      
      // Check if we have a pending order reference
      const pendingOrderRef = localStorage.getItem('pendingOrderReference');
      
      if (pendingOrderRef) {
        setOrderReference(pendingOrderRef);
        localStorage.removeItem('pendingOrderReference');
        
        // Update order status to completed
        // This would typically be done by a webhook in a real app
        // For this demo, we're simulating the completed payment
        
        toast({
          title: "Payment Successful!",
          description: "Thank you for your purchase. You will receive a confirmation email shortly.",
        });
        
        setStep("confirmation");
      }
    } catch (error) {
      console.error("Order submission error:", error);
      toast({
        title: "Order Processing Failed",
        description: "There was a problem processing your order. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getCurrentColorImage = () => {
    const color = colors.find(c => c.name.toLowerCase() === selectedColor);
    return color ? color.image : colors[0].image;
  };

  const resetAndClose = () => {
    setStep("color");
    form.reset();
    setOrderReference("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>
            {step === "color" && "Select Your Color"}
            {step === "shipping" && "Shipping Details"}
            {step === "payment" && "Payment Information"}
            {step === "confirmation" && "Order Confirmation"}
          </DialogTitle>
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute right-4 top-4" 
            onClick={resetAndClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        {step === "color" && (
          <ColorSelectionStep 
            colors={colors}
            selectedColor={selectedColor}
            onColorSelect={onColorSelect}
            onContinue={() => setStep("shipping")}
            getCurrentColorImage={getCurrentColorImage}
          />
        )}

        {step === "shipping" && (
          <ShippingStep 
            form={form}
            onBack={() => setStep("color")}
            onContinue={() => setStep("payment")}
          />
        )}

        {step === "payment" && (
          <PaymentStep 
            form={form}
            onBack={() => setStep("shipping")}
            onSubmit={onSubmit}
            isSubmitting={isSubmitting}
            selectedColor={selectedColor}
          />
        )}

        {step === "confirmation" && (
          <ConfirmationStep 
            selectedColor={selectedColor}
            onClose={resetAndClose}
            orderReference={orderReference}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;
