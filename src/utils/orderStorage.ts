
export interface OrderData {
  customer: {
    fullName: string;
    email: string;
    phoneNumber: string;
    shippingAddress: {
      address: string;
      city: string;
      postalCode: string;
      country: string;
    };
  };
  product: {
    name: string;
    color: string;
    price: number;
    currency: string;
  };
  orderDate: string;
  paymentMethod: string;
  status?: string;
}

export interface Order extends OrderData {
  id: string;
}

// Save order to localStorage
export const saveOrder = (orderId: string, orderData: OrderData): void => {
  try {
    // Get existing orders
    const existingOrdersJson = localStorage.getItem('orders');
    const existingOrders: Record<string, OrderData> = existingOrdersJson 
      ? JSON.parse(existingOrdersJson) 
      : {};
    
    // Add new order
    existingOrders[orderId] = {
      ...orderData,
      status: 'New'
    };
    
    // Save back to localStorage
    localStorage.setItem('orders', JSON.stringify(existingOrders));
    
    console.log(`Order ${orderId} saved successfully`);
  } catch (error) {
    console.error('Failed to save order:', error);
    throw new Error('Failed to save order data');
  }
};

// Get all orders from localStorage
export const getAllOrders = (): Order[] => {
  try {
    const ordersJson = localStorage.getItem('orders');
    if (!ordersJson) return [];
    
    const ordersObj: Record<string, OrderData> = JSON.parse(ordersJson);
    
    return Object.entries(ordersObj).map(([id, data]) => ({
      id,
      ...data
    }));
  } catch (error) {
    console.error('Failed to retrieve orders:', error);
    return [];
  }
};

// Get specific order by ID
export const getOrderById = (orderId: string): Order | null => {
  try {
    const orders = getAllOrders();
    return orders.find(order => order.id === orderId) || null;
  } catch (error) {
    console.error(`Failed to retrieve order ${orderId}:`, error);
    return null;
  }
};

// Update order status
export const updateOrderStatus = (orderId: string, status: string): boolean => {
  try {
    const ordersJson = localStorage.getItem('orders');
    if (!ordersJson) return false;
    
    const ordersObj: Record<string, OrderData> = JSON.parse(ordersJson);
    
    if (!ordersObj[orderId]) return false;
    
    ordersObj[orderId] = {
      ...ordersObj[orderId],
      status
    };
    
    localStorage.setItem('orders', JSON.stringify(ordersObj));
    return true;
  } catch (error) {
    console.error(`Failed to update order ${orderId}:`, error);
    return false;
  }
};
