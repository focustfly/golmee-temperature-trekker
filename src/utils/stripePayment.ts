
import { loadStripe } from '@stripe/stripe-js';

// This is a publishable key, so it's safe to include in client-side code
const STRIPE_PUBLISHABLE_KEY = 'pk_test_51QzAd4GSdAlnjfttQjU8LV2E5ks0Zon1GAXq67m5AhbtnxB3B5A0Xx0QBLBkjyMhicWWT3VPSXgJV7zsGug0RN9v00lXcVI74w';

// Initialize Stripe
let stripePromise: Promise<any> | null = null;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
};

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
 * Creates a Stripe Checkout Session and redirects the customer to Stripe
 */
export const redirectToStripePayment = async (options: StripePaymentOptions) => {
  try {
    // Create a checkout session on your server
    const response = await fetch('https://api.your-server.com/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        product: 'Temperature Trekker',
        price: 15.00,
        color: options.color,
        customerEmail: options.customerEmail,
        customerName: options.customerName,
        shippingAddress: options.shippingAddress,
        notificationEmail: 'golmeestore@gmail.com' // Updated notification email
      }),
    });
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const { sessionId } = await response.json();
    
    // Redirect to Stripe Checkout
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({ sessionId });
    
    if (error) {
      console.error('Stripe checkout error:', error);
      throw new Error(error.message);
    }
    
    return true;
  } catch (error) {
    console.error("Error redirecting to Stripe payment:", error);
    return false;
  }
};

/**
 * Send order confirmation email with customer and product details
 */
export const sendOrderConfirmationEmail = async (orderData: any) => {
  try {
    const response = await fetch('https://api.your-server.com/send-order-confirmation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'golmeestore@gmail.com',
        subject: `New Order: Temperature Trekker - ${orderData.product.color}`,
        orderData: orderData
      }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to send order confirmation email');
    }
    
    return true;
  } catch (error) {
    console.error('Error sending order confirmation email:', error);
    return false;
  }
};

/**
 * This function would be called by a webhook in a real application
 * to verify and process the payment after Stripe redirects back
 */
export const handleStripePaymentSuccess = (sessionId: string) => {
  // In a real application, your backend would verify the payment
  // using Stripe webhooks and return the result
  return true;
};
