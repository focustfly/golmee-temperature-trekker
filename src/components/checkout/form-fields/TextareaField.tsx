
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { CheckoutFormValues } from "@/components/checkout/types";

interface TextareaFieldProps {
  form: UseFormReturn<CheckoutFormValues>;
  name: keyof CheckoutFormValues;
  label: string;
  placeholder: string;
}

const TextareaField = ({ form, name, label, placeholder }: TextareaFieldProps) => {
  return (
    <div className="col-span-2">
      <Label htmlFor={name}>{label}</Label>
      <Textarea
        id={name}
        {...form.register(name)}
        placeholder={placeholder}
      />
      {form.formState.errors[name] && (
        <p className="text-sm text-red-500">
          {form.formState.errors[name]?.message}
        </p>
      )}
    </div>
  );
};

export default TextareaField;
