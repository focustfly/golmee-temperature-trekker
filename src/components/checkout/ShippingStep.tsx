
import { UseFormReturn } from "react-hook-form";
import { CheckoutFormValues } from "@/components/checkout/types";
import ShippingForm from "./form-fields/ShippingForm";

interface ShippingStepProps {
  form: UseFormReturn<CheckoutFormValues>;
  onBack: () => void;
  onContinue: () => void;
}

const ShippingStep = ({ form, onBack, onContinue }: ShippingStepProps) => {
  const handleContinue = () => {
    if (
      form.getValues("fullName") &&
      form.getValues("email") &&
      form.getValues("phoneNumber") &&
      form.getValues("address") &&
      form.getValues("city") &&
      form.getValues("postalCode") &&
      form.getValues("country")
    ) {
      onContinue();
    } else {
      form.trigger([
        "fullName",
        "email",
        "phoneNumber",
        "address",
        "city",
        "postalCode",
        "country",
      ]);
    }
  };

  return (
    <div className="space-y-6">
      <ShippingForm
        form={form}
        onBack={onBack}
        onContinue={handleContinue}
      />
    </div>
  );
};

export default ShippingStep;
