
// Fixed Stripe payment link for the Temperature Trekker product
// In a production app, you would generate this dynamically on your backend
export const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/test_28o29E2lx6Pc7n2cMM";

export interface StripePaymentOptions {
  color: string;
  customerEmail?: string;
  customerName?: string;
  shippingAddress?: {
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
}

/**
 * Redirects to Stripe payment link with prefilled customer information
 */
export const redirectToStripePayment = (options: StripePaymentOptions) => {
  try {
    // Base payment link
    let paymentUrl = STRIPE_PAYMENT_LINK;
    
    // Add parameters for prefilling customer data 
    const params = new URLSearchParams();
    
    // Add product color as a parameter
    params.append("prefilled_metadata[color]", options.color);
    
    // Add customer info if available
    if (options.customerEmail) {
      params.append("prefilled_email", options.customerEmail);
    }
    
    if (options.customerName) {
      params.append("prefilled_metadata[customer_name]", options.customerName);
    }
    
    // Add shipping info if available
    if (options.shippingAddress) {
      params.append("prefilled_metadata[shipping_address]", options.shippingAddress.address);
      params.append("prefilled_metadata[shipping_city]", options.shippingAddress.city);
      params.append("prefilled_metadata[shipping_postal_code]", options.shippingAddress.postalCode);
      params.append("prefilled_metadata[shipping_country]", options.shippingAddress.country);
    }
    
    // Append parameters to URL
    if (params.toString()) {
      paymentUrl += `?${params.toString()}`;
    }
    
    // Redirect to Stripe
    window.location.href = paymentUrl;
    
    return true;
  } catch (error) {
    console.error("Error redirecting to Stripe payment:", error);
    return false;
  }
};
