
import { z } from "zod";

export type ColorOption = {
  name: string;
  value: string;
  image: string;
};

export const checkoutFormSchema = z.object({
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

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;

export type CheckoutStep = "color" | "shipping" | "payment" | "confirmation";
