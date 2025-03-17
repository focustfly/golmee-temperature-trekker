
import { Form } from "@/components/ui/form";
import { UseFormReturn } from "react-hook-form";
import { CheckoutFormValues } from "@/components/checkout/types";
import InputField from "./InputField";
import TextareaField from "./TextareaField";
import CountryField from "./CountryField";
import FormActions from "./FormActions";

interface ShippingFormProps {
  form: UseFormReturn<CheckoutFormValues>;
  onBack: () => void;
  onContinue: () => void;
}

const ShippingForm = ({ form, onBack, onContinue }: ShippingFormProps) => {
  return (
    <Form {...form}>
      <form className="grid grid-cols-2 gap-4">
        <InputField 
          form={form} 
          name="fullName" 
          label="Full Name" 
          placeholder="Enter your full name"
        />
        
        <InputField 
          form={form} 
          name="email" 
          label="Email" 
          placeholder="Enter your email address"
          type="email"
        />
        
        <InputField 
          form={form} 
          name="phoneNumber" 
          label="Phone Number" 
          placeholder="Enter your phone number"
          type="tel"
        />

        <TextareaField 
          form={form} 
          name="address" 
          label="Address" 
          placeholder="Enter your street address"
        />

        <InputField 
          form={form} 
          name="city" 
          label="City" 
          placeholder="Enter your city"
        />

        <InputField 
          form={form} 
          name="postalCode" 
          label="Postal Code" 
          placeholder="Enter your postal code"
        />

        <CountryField form={form} />

        <FormActions onBack={onBack} onContinue={onContinue} />
      </form>
    </Form>
  );
};

export default ShippingForm;
