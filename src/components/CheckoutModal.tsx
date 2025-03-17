
import { useState } from "react";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import ColorOption from "@/components/ColorOption";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";

export type ColorOption = {
  name: string;
  value: string;
  image: string;
};

const checkoutFormSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  phoneNumber: z.string().min(10, { message: "Valid phone number is required" }),
  address: z.string().min(5, { message: "Address is required" }),
  city: z.string().min(2, { message: "City is required" }),
  postalCode: z.string().min(3, { message: "Postal code is required" }),
  country: z.string().min(2, { message: "Country is required" }),
  cardNumber: z.string().min(16, { message: "Valid card number is required" }),
  expiryDate: z.string().min(5, { message: "Expiry date is required (MM/YY)" }),
  cvv: z.string().min(3, { message: "CVV is required" }),
});

type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;

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
  const [step, setStep] = useState<"color" | "shipping" | "payment" | "confirmation">("color");
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

  const onSubmit = (data: CheckoutFormValues) => {
    // In a real application, you would process the payment with a payment provider
    console.log("Payment submitted:", data);
    
    // Show success and move to confirmation
    toast({
      title: "Order Placed Successfully!",
      description: "Thank you for your purchase. You will receive a confirmation email shortly.",
    });
    
    setStep("confirmation");
  };

  const getCurrentColorImage = () => {
    const color = colors.find(c => c.name.toLowerCase() === selectedColor);
    return color ? color.image : colors[0].image;
  };

  const resetAndClose = () => {
    setStep("color");
    form.reset();
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
          <div className="space-y-6">
            <p className="text-gray-600">Choose your preferred Temperature Trekker color:</p>
            <div className="grid grid-cols-3 gap-4">
              {colors.map((color) => (
                <ColorOption 
                  key={color.name}
                  color={color.value}
                  name={color.name}
                  imageSrc={color.image}
                  isActive={selectedColor === color.name.toLowerCase()}
                  onClick={() => onColorSelect(color.name.toLowerCase())}
                />
              ))}
            </div>
            <div className="flex justify-center pt-4">
              <img 
                src={getCurrentColorImage()}
                alt={`Temperature Trekker in ${selectedColor}`}
                className="h-40 object-contain"
              />
            </div>
            <div className="flex justify-end">
              <Button className="bg-golmee-blue hover:bg-blue-600 text-white" onClick={() => setStep("shipping")}>
                Continue to Shipping
              </Button>
            </div>
          </div>
        )}

        {step === "shipping" && (
          <div className="space-y-6">
            <Form {...form}>
              <form className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input 
                    id="fullName" 
                    {...form.register("fullName")} 
                    placeholder="Enter your full name"
                  />
                  {form.formState.errors.fullName && (
                    <p className="text-sm text-red-500">{form.formState.errors.fullName.message}</p>
                  )}
                </div>
                
                <div className="col-span-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    {...form.register("email")} 
                    placeholder="Enter your email address"
                  />
                  {form.formState.errors.email && (
                    <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
                  )}
                </div>
                
                <div className="col-span-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input 
                    id="phoneNumber" 
                    type="tel" 
                    {...form.register("phoneNumber")} 
                    placeholder="Enter your phone number"
                  />
                  {form.formState.errors.phoneNumber && (
                    <p className="text-sm text-red-500">{form.formState.errors.phoneNumber.message}</p>
                  )}
                </div>
                
                <div className="col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea 
                    id="address" 
                    {...form.register("address")} 
                    placeholder="Enter your street address"
                  />
                  {form.formState.errors.address && (
                    <p className="text-sm text-red-500">{form.formState.errors.address.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input 
                    id="city" 
                    {...form.register("city")} 
                    placeholder="Enter your city"
                  />
                  {form.formState.errors.city && (
                    <p className="text-sm text-red-500">{form.formState.errors.city.message}</p>
                  )}
                </div>
                
                <div>
                  <Label htmlFor="postalCode">Postal Code</Label>
                  <Input 
                    id="postalCode" 
                    {...form.register("postalCode")} 
                    placeholder="Enter your postal code"
                  />
                  {form.formState.errors.postalCode && (
                    <p className="text-sm text-red-500">{form.formState.errors.postalCode.message}</p>
                  )}
                </div>
                
                <div className="col-span-2">
                  <Label htmlFor="country">Country</Label>
                  <Input 
                    id="country" 
                    {...form.register("country")} 
                    placeholder="Enter your country"
                  />
                  {form.formState.errors.country && (
                    <p className="text-sm text-red-500">{form.formState.errors.country.message}</p>
                  )}
                </div>
                
                <div className="col-span-2 flex justify-between pt-4">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setStep("color")}
                  >
                    Back to Colors
                  </Button>
                  <Button 
                    type="button" 
                    className="bg-golmee-blue hover:bg-blue-600 text-white"
                    onClick={() => {
                      if (
                        form.getValues("fullName") &&
                        form.getValues("email") &&
                        form.getValues("phoneNumber") &&
                        form.getValues("address") &&
                        form.getValues("city") &&
                        form.getValues("postalCode") &&
                        form.getValues("country")
                      ) {
                        setStep("payment");
                      } else {
                        form.trigger(["fullName", "email", "phoneNumber", "address", "city", "postalCode", "country"]);
                      }
                    }}
                  >
                    Continue to Payment
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        )}

        {step === "payment" && (
          <div className="space-y-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input 
                    id="cardNumber" 
                    {...form.register("cardNumber")} 
                    placeholder="1234 5678 9012 3456"
                  />
                  {form.formState.errors.cardNumber && (
                    <p className="text-sm text-red-500">{form.formState.errors.cardNumber.message}</p>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input 
                      id="expiryDate" 
                      {...form.register("expiryDate")} 
                      placeholder="MM/YY"
                    />
                    {form.formState.errors.expiryDate && (
                      <p className="text-sm text-red-500">{form.formState.errors.expiryDate.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input 
                      id="cvv" 
                      {...form.register("cvv")} 
                      placeholder="123"
                    />
                    {form.formState.errors.cvv && (
                      <p className="text-sm text-red-500">{form.formState.errors.cvv.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="pt-4 flex justify-between">
                  <Button 
                    type="button" 
                    variant="outline" 
                    onClick={() => setStep("shipping")}
                  >
                    Back to Shipping
                  </Button>
                  <Button type="submit" className="bg-golmee-blue hover:bg-blue-600 text-white">
                    Complete Purchase
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        )}

        {step === "confirmation" && (
          <div className="space-y-6 text-center">
            <div className="py-8">
              <div className="rounded-full bg-green-100 p-3 w-16 h-16 mx-auto flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Order Complete!</h3>
              <p className="mt-2 text-gray-600">
                Thank you for your order. Your Temperature Trekker in {selectedColor} will be shipped soon.
              </p>
            </div>
            <Button className="bg-golmee-blue hover:bg-blue-600 text-white" onClick={resetAndClose}>
              Return to Shopping
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;
