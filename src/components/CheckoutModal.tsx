
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
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  });

  const onSubmit = async (data: CheckoutFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Create order object with shipping and product info
      const orderData = {
        customer: {
          fullName: data.fullName,
          email: data.email,
          phoneNumber: data.phoneNumber,
          shippingAddress: {
            address: data.address,
            city: data.city,
            postalCode: data.postalCode,
            country: data.country,
          }
        },
        product: {
          name: "Temperature Trekker",
          color: selectedColor,
          price: 49.99,
          currency: "USD"
        },
        orderDate: new Date().toISOString(),
        paymentMethod: "Credit Card", // In a real app, you'd use a payment processor
        // Note: We're not sending the actual card details for security reasons
      };

      // Send order data to backend
      const response = await fetch('https://your-wordpress-site.com/wp-json/custom/v1/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const result = await response.json();
      setOrderReference(result.orderReference || 'ORD-' + Math.random().toString(36).substr(2, 9));
      
      toast({
        title: "Order Placed Successfully!",
        description: "Thank you for your purchase. You will receive a confirmation email shortly.",
      });
      
      setStep("confirmation");
    } catch (error) {
      console.error("Order submission error:", error);
      toast({
        title: "Order Submission Failed",
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
