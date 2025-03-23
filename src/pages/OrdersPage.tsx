
import { useState, useEffect } from 'react';
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Order, getAllOrders, updateOrderStatus } from '@/utils/orderStorage';
import { formatDate } from '@/utils/dateUtils';
import { useToast } from '@/hooks/use-toast';

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    loadOrders();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredOrders(orders);
    } else {
      const term = searchTerm.toLowerCase();
      setFilteredOrders(
        orders.filter(order => 
          order.id.toLowerCase().includes(term) ||
          order.customer.fullName.toLowerCase().includes(term) ||
          order.customer.email.toLowerCase().includes(term) ||
          order.product.color.toLowerCase().includes(term)
        )
      );
    }
  }, [searchTerm, orders]);

  const loadOrders = () => {
    const allOrders = getAllOrders();
    // Sort by date (newest first)
    allOrders.sort((a, b) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime());
    setOrders(allOrders);
    setFilteredOrders(allOrders);
  };

  const handleStatusChange = (orderId: string, newStatus: string) => {
    const success = updateOrderStatus(orderId, newStatus);
    
    if (success) {
      toast({
        title: "Status Updated",
        description: `Order ${orderId} status changed to ${newStatus}`,
      });
      loadOrders(); // Reload orders to reflect changes
    } else {
      toast({
        title: "Update Failed",
        description: "Failed to update order status",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Order Management</h1>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="flex-grow">
          <Input
            placeholder="Search orders by ID, customer name, email, or color..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <Button onClick={loadOrders}>Refresh</Button>
      </div>

      {filteredOrders.length === 0 ? (
        <div className="text-center py-8 bg-gray-50 rounded-md">
          <p className="text-gray-500">No orders found</p>
          {orders.length > 0 && searchTerm && (
            <p className="text-gray-400 mt-2">Try a different search term</p>
          )}
        </div>
      ) : (
        <div className="overflow-x-auto">
          <Table>
            <TableCaption>List of all customer orders</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer.fullName}</TableCell>
                  <TableCell>{order.customer.email}</TableCell>
                  <TableCell>
                    {order.product.name} - {order.product.color}
                  </TableCell>
                  <TableCell>
                    {order.product.price} {order.product.currency}
                  </TableCell>
                  <TableCell>{formatDate(order.orderDate)}</TableCell>
                  <TableCell>
                    <Select
                      defaultValue={order.status || 'New'}
                      onValueChange={(value) => handleStatusChange(order.id, value)}
                    >
                      <SelectTrigger className="w-24">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="New">New</SelectItem>
                        <SelectItem value="Processing">Processing</SelectItem>
                        <SelectItem value="Shipped">Shipped</SelectItem>
                        <SelectItem value="Delivered">Delivered</SelectItem>
                        <SelectItem value="Cancelled">Cancelled</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        // Show customer details
                        const { customer, product } = order;
                        const message = `
                          Customer: ${customer.fullName}
                          Email: ${customer.email}
                          Phone: ${customer.phoneNumber}
                          Address: ${customer.shippingAddress.address}, ${customer.shippingAddress.city}, ${customer.shippingAddress.postalCode}, ${customer.shippingAddress.country}
                          Product: ${product.name} - ${product.color}
                          Price: ${product.price} ${product.currency}
                        `;
                        alert(message);
                      }}
                    >
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
