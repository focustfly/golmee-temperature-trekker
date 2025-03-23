
import { useState } from "react";
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
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  
  const handlePaymentWithStripe = async () => {
    const formValues = form.getValues();
    setIsProcessingPayment(true);
    
    try {
      // Save order to local storage first with 'Pending' status
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
          price: 15.00,
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
      
      // Also store the order data to be used for email notification after successful payment
      localStorage.setItem('pendingOrderData', JSON.stringify(orderData));
      
      toast({
        title: "Redirecting to Stripe",
        description: "You'll be taken to Stripe's secure checkout page to complete your purchase.",
      });
      
      // Redirect to Stripe payment
      const success = await redirectToStripePayment({
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
      
      if (!success) {
        throw new Error("Payment redirection failed");
      }
    } catch (error) {
      console.error("Error preparing order:", error);
      toast({
        title: "Error",
        description: "There was a problem redirecting to checkout. Please try again.",
        variant: "destructive",
      });
      setIsProcessingPayment(false);
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
              Click below to proceed to Stripe's secure checkout page to complete your purchase.
            </p>
            
            <div className="flex items-center space-x-2 mb-4">
              <svg viewBox="0 0 60 25" xmlns="http://www.w3.org/2000/svg" width="60" height="25" preserveAspectRatio="xMidYMid meet"><path d="M59.64 14.28h-8.06v-1.008h8.06v1.008zm-8.06 5.712c0-.5.402-.882.882-.882.48 0 .882.382.882.882 0 .5-.402.882-.882.882-.48 0-.882-.382-.882-.882zm2.772-5.712v1.008h4.64c-.12-1.008-1.12-1.028-2.38-1.008h-2.26zm.784 5.73c0 1.38-1.12 2.502-2.502 2.502-1.38 0-2.503-1.121-2.503-2.502 0-1.382 1.122-2.503 2.503-2.503 1.381 0 2.502 1.121 2.502 2.503zM38.762 2.856c-1.68 0-3.041 1.36-3.041 3.042 0 1.682 1.36 3.043 3.041 3.043 1.682 0 3.042-1.36 3.042-3.043 0-1.681-1.36-3.042-3.042-3.042zM27.307 14.12c0-1.682-1.36-3.042-3.041-3.042-1.682 0-3.042 1.36-3.042 3.041 0 1.682 1.36 3.043 3.042 3.043 1.681 0 3.041-1.36 3.041-3.042zm-3.041-8.221c-1.682 0-3.042 1.36-3.042 3.042S22.584 12 24.266 12c1.681 0 3.041-1.38 3.041-3.06 0-1.681-1.36-3.041-3.041-3.041zm30.537 8.22c0-1.682-1.36-3.042-3.041-3.042-1.682 0-3.042 1.36-3.042 3.041 0 1.682 1.36 3.043 3.042 3.043 1.681 0 3.041-1.36 3.041-3.042zm-3.041-8.22c-1.682 0-3.042 1.36-3.042 3.042S50.08 12 51.762 12c1.681 0 3.041-1.38 3.041-3.06 0-1.681-1.36-3.041-3.041-3.041zM16.16 15.792v-10.5h1.742v10.5H16.16zm-3.443-10.5L9.92 13.35l-2.762-8.058H5.3l-2.78 8.049L0 5.291h1.868l1.488 5.39 2.236-6.64h1.983l2.236 6.64 1.47-5.39h1.849l-2.413 8.06zM38.762 5.898c0 1.681 1.36 3.042 3.042 3.042 1.68 0 3.041-1.36 3.041-3.042 0-1.682-1.36-3.042-3.041-3.042-1.682 0-3.042 1.36-3.042 3.042z" fill="#635BFF"></path></svg>
              <span className="text-sm text-gray-500">Secure Checkout</span>
            </div>
            
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-medium">Total:</span>
              <span className="text-golmee-blue font-bold">$15.00</span>
            </div>
            
            <div className="bg-white p-3 border border-gray-200 rounded-md mb-4">
              <div className="flex items-center text-sm text-gray-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Secure payment
              </div>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Email confirmation
              </div>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Fast worldwide shipping
              </div>
            </div>
          </div>

          <div className="pt-4 flex justify-between">
            <Button 
              type="button" 
              variant="outline" 
              onClick={onBack}
              disabled={isProcessingPayment || isSubmitting}
            >
              Back to Shipping
            </Button>
            <Button 
              type="submit" 
              className="bg-golmee-blue hover:bg-blue-600 text-white"
              disabled={isProcessingPayment || isSubmitting}
            >
              {isProcessingPayment ? "Redirecting..." : "Proceed to Checkout"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PaymentStep;
