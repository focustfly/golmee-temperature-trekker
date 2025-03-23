
import { Button } from "@/components/ui/button";
import { UseFormReturn } from "react-hook-form";
import { CheckoutFormValues } from "@/components/checkout/types";
import { Form } from "@/components/ui/form";
import { redirectToStripePayment } from "@/utils/stripePayment";
import { saveOrder } from "@/utils/orderStorage";
import { useToast } from "@/hooks/use-toast";

interface PaymentStepProps {
  form: UseFormReturn<CheckoutFormValues>;
  onBack: () => void;
  onSubmit: (data: CheckoutFormValues) => void;
  isSubmitting?: boolean;
  selectedColor: string;
}

const PaymentStep = ({ 
  form, 
  onBack, 
  onSubmit, 
  isSubmitting = false,
  selectedColor 
}: PaymentStepProps) => {
  const { toast } = useToast();
  
  const handlePaymentWithStripe = () => {
    const formValues = form.getValues();
    
    // Save order to local storage first with 'Pending' status
    try {
      const orderData = {
        customer: {
          fullName: formValues.fullName,
          email: formValues.email,
          phoneNumber: formValues.phoneNumber,
          shippingAddress: {
            address: formValues.address,
            city: formValues.city,
            postalCode: formValues.postalCode,
            country: formValues.country,
          }
        },
        product: {
          name: "Temperature Trekker",
          color: selectedColor,
          price: 49.99,
          currency: "USD"
        },
        orderDate: new Date().toISOString(),
        paymentMethod: "Stripe",
        status: "Pending Payment"
      };

      // Generate a unique order reference
      const generatedOrderReference = 'ORD-' + Math.random().toString(36).substr(2, 9);
      
      // Save order to local storage
      saveOrder(generatedOrderReference, orderData);
      
      // Store order reference in localStorage for retrieval after payment
      localStorage.setItem('pendingOrderReference', generatedOrderReference);
      
      // Redirect to Stripe payment
      redirectToStripePayment({
        color: selectedColor,
        customerEmail: formValues.email,
        customerName: formValues.fullName,
        shippingAddress: {
          address: formValues.address,
          city: formValues.city,
          postalCode: formValues.postalCode,
          country: formValues.country,
        }
      });
    } catch (error) {
      console.error("Error preparing order:", error);
      toast({
        title: "Error",
        description: "There was a problem preparing your order. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={(e) => {
          e.preventDefault();
          handlePaymentWithStripe();
        }} className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
            <h3 className="font-medium mb-2">Secure Payment with Stripe</h3>
            <p className="text-sm text-gray-600 mb-4">
              You'll be redirected to Stripe's secure payment page to complete your purchase.
            </p>
            
            <div className="flex items-center space-x-2 mb-2">
              <img src="https://cdn.jsdelivr.net/gh/stripe-samples/acceptance-mark/svg/light/stripe-badge.svg" 
                   alt="Secured by Stripe" 
                   className="h-6" />
              <span className="text-sm text-gray-500">Secured Payment</span>
            </div>
            
            <div className="grid grid-cols-4 gap-2 mt-4">
              <img src="https://cdn.jsdelivr.net/gh/stripe-samples/card-logos@master/visa.svg" 
                   alt="Visa" className="h-6" />
              <img src="https://cdn.jsdelivr.net/gh/stripe-samples/card-logos@master/mastercard.svg" 
                   alt="Mastercard" className="h-6" />
              <img src="https://cdn.jsdelivr.net/gh/stripe-samples/card-logos@master/amex.svg" 
                   alt="American Express" className="h-6" />
              <img src="https://cdn.jsdelivr.net/gh/stripe-samples/card-logos@master/discover.svg" 
                   alt="Discover" className="h-6" />
            </div>
          </div>

          <div className="pt-4 flex justify-between">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onBack}
              disabled={isSubmitting}
            >
              Back to Shipping
            </Button>
            <Button 
              type="submit" 
              className="bg-golmee-blue hover:bg-blue-600 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Processing..." : "Continue to Payment"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PaymentStep;
