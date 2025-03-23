
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseFormReturn } from "react-hook-form";
import { CheckoutFormValues } from "@/components/checkout/types";
import { Form } from "@/components/ui/form";

interface PaymentStepProps {
  form: UseFormReturn<CheckoutFormValues>;
  onBack: () => void;
  onSubmit: (data: CheckoutFormValues) => void;
  isSubmitting?: boolean;
}

const PaymentStep = ({ form, onBack, onSubmit, isSubmitting = false }: PaymentStepProps) => {
  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input
              id="cardNumber"
              {...form.register("cardNumber")}
              placeholder="1234 5678 9012 3456"
              disabled={isSubmitting}
            />
            {form.formState.errors.cardNumber && (
              <p className="text-sm text-red-500">
                {form.formState.errors.cardNumber.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiryDate">Expiry Date</Label>
              <Input
                id="expiryDate"
                {...form.register("expiryDate")}
                placeholder="MM/YY"
                disabled={isSubmitting}
              />
              {form.formState.errors.expiryDate && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.expiryDate.message}
                </p>
              )}
            </div>

            <div>
              <Label htmlFor="cvv">CVV</Label>
              <Input 
                id="cvv" 
                {...form.register("cvv")} 
                placeholder="123" 
                disabled={isSubmitting}
              />
              {form.formState.errors.cvv && (
                <p className="text-sm text-red-500">
                  {form.formState.errors.cvv.message}
                </p>
              )}
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
              {isSubmitting ? "Processing..." : "Complete Purchase"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PaymentStep;
