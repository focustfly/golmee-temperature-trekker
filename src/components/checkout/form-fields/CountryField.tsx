
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { CheckoutFormValues } from "@/components/checkout/types";
import { COUNTRIES } from "@/utils/countries";

interface CountryFieldProps {
  form: UseFormReturn<CheckoutFormValues>;
}

const CountryField = ({ form }: CountryFieldProps) => {
  const handleCountryChange = (value: string) => {
    form.setValue("country", value, { shouldValidate: true });
  };

  return (
    <div className="col-span-2">
      <Label htmlFor="country">Country</Label>
      <Select 
        onValueChange={handleCountryChange}
        defaultValue={form.getValues("country") || ""}
      >
        <SelectTrigger id="country" className="w-full">
          <SelectValue placeholder="Select your country" />
        </SelectTrigger>
        <SelectContent>
          {COUNTRIES.map((country) => (
            <SelectItem key={country} value={country}>
              {country}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {form.formState.errors.country && (
        <p className="text-sm text-red-500">
          {form.formState.errors.country.message}
        </p>
      )}
    </div>
  );
};

export default CountryField;
