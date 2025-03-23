
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
    const stripe = await getStripe();
    
    if (!stripe) {
      throw new Error('Failed to initialize Stripe');
    }

    // In a real application, you would create a checkout session on your server
    // and redirect using the session ID. Since we don't have a server, we'll
    // use Stripe's redirect method directly with the product information.
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Temperature Trekker',
              description: `Color: ${options.color}`,
              images: ['https://example.com/product-image.jpg'], // Replace with actual product image
            },
            unit_amount: 1500, // $15.00 in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${window.location.origin}/`,
      customerEmail: options.customerEmail,
      shippingAddressCollection: {
        allowedCountries: ['US', 'CA', 'GB', 'AU'],
      },
      billingAddressCollection: 'required',
      submitType: 'pay',
      metadata: {
        color: options.color,
        customerName: options.customerName || '',
        shippingAddress: options.shippingAddress ? JSON.stringify(options.shippingAddress) : '',
        notificationEmail: 'golmeestore@gmail.com'
      },
    });
    
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
