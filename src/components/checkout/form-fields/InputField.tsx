
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UseFormReturn } from "react-hook-form";
import { CheckoutFormValues } from "@/components/checkout/types";

interface InputFieldProps {
  form: UseFormReturn<CheckoutFormValues>;
  name: keyof CheckoutFormValues;
  label: string;
  placeholder: string;
  type?: string;
}

const InputField = ({ form, name, label, placeholder, type = "text" }: InputFieldProps) => {
  return (
    <div className="col-span-2 md:col-span-1">
      <Label htmlFor={name}>{label}</Label>
      <Input
        id={name}
        type={type}
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

export default InputField;
