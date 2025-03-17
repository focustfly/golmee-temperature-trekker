
import { Package } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const TrackOrderDialog = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [trackingInfo, setTrackingInfo] = useState<null | { status: string; location: string; estimatedDelivery: string }>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleTrackOrder = () => {
    // Reset states
    setError("");
    setTrackingInfo(null);
    setIsLoading(true);
    
    // Basic validation
    if (!orderNumber.trim() || !email.trim()) {
      setError("Please enter both order number and email address.");
      setIsLoading(false);
      return;
    }
    
    // Simulate API call with timeout
    setTimeout(() => {
      // For demonstration purposes, show tracking info for specific test order
      if (orderNumber === "GML123456") {
        setTrackingInfo({
          status: "In Transit",
          location: "Distribution Center, Chicago IL",
          estimatedDelivery: "August 15, 2023",
        });
      } else {
        setError("Order not found. Please check your order number and email address.");
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="text-gray-400 hover:text-white transition-colors flex items-center">
          Track Order
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[550px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Track Your Order
          </DialogTitle>
          <DialogDescription>
            Enter your order details to check the status of your GolMee purchase.
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <label htmlFor="order-number" className="text-sm font-medium">
              Order Number
            </label>
            <Input
              id="order-number"
              placeholder="e.g., GML123456"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              placeholder="The email you used for your order"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <Button 
            onClick={handleTrackOrder} 
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "Searching..." : "Track Order"}
          </Button>
          
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
              {error}
            </div>
          )}
          
          {trackingInfo && (
            <div className="bg-blue-50 p-4 rounded-md">
              <h3 className="font-medium text-base mb-3">Order Status</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">Status:</span>
                  <span className="font-medium">{trackingInfo.status}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Current Location:</span>
                  <span className="font-medium">{trackingInfo.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Estimated Delivery:</span>
                  <span className="font-medium">{trackingInfo.estimatedDelivery}</span>
                </div>
              </div>
              <div className="mt-4 text-xs text-gray-500">
                <p>For detailed tracking information, please use the tracking number provided in your shipping confirmation email.</p>
              </div>
            </div>
          )}
          
          <div className="text-xs text-gray-500 mt-2">
            <p>Need help? Contact our customer service team at support@golmee.com or use the Contact form.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TrackOrderDialog;
