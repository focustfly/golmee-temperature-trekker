
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { CheckoutFormValues } from "@/components/checkout/types";
import { Form } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// List of countries for the dropdown
const COUNTRIES = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "China",
  "India",
  "Brazil",
  "Mexico",
  "Spain",
  "Italy",
  "Netherlands",
  "Sweden",
  "Norway",
  "Denmark",
  "Finland",
  "South Korea",
  "Singapore",
  "New Zealand",
  "Ireland",
  "Switzerland",
  "Belgium",
  "Austria",
  // Add more countries as needed
];

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

  const handleCountryChange = (value: string) => {
    form.setValue("country", value, { shouldValidate: true });
  };

  return (
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
              <p className="text-sm text-red-500">
                {form.formState.errors.fullName.message}
              </p>
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
              <p className="text-sm text-red-500">
                {form.formState.errors.email.message}
              </p>
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
              <p className="text-sm text-red-500">
                {form.formState.errors.phoneNumber.message}
              </p>
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
              <p className="text-sm text-red-500">
                {form.formState.errors.address.message}
              </p>
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
              <p className="text-sm text-red-500">
                {form.formState.errors.city.message}
              </p>
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
              <p className="text-sm text-red-500">
                {form.formState.errors.postalCode.message}
              </p>
            )}
          </div>

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

          <div className="col-span-2 flex justify-between pt-4">
            <Button type="button" variant="outline" onClick={onBack}>
              Back to Colors
            </Button>
            <Button
              type="button"
              className="bg-golmee-blue hover:bg-blue-600 text-white"
              onClick={handleContinue}
            >
              Continue to Payment
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ShippingStep;
