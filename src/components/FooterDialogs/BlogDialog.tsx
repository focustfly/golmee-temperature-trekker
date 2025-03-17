
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface BlogDialogProps {
  trigger?: React.ReactNode;
}

const BlogDialog = ({ trigger }: BlogDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger || (
          <Button
            variant="link"
            className="p-0 text-gray-400 hover:text-white transition-colors"
          >
            Our Blog
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-3xl h-[80vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            The Science Behind Temperature Control in Modern Bottles
          </DialogTitle>
          <DialogDescription className="text-center text-gray-500">
            Published on March 18, 2024 • 8 min read
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full pr-4">
          <div className="space-y-6 p-2">
            <img
              src="/lovable-uploads/626b3ba1-16b8-43ee-a17d-b22251f9f3a2.png"
              alt="GolMee Temperature Trekker"
              className="w-full h-auto max-h-64 object-contain my-6"
            />

            <p className="text-lg leading-relaxed">
              In our fast-paced world, staying hydrated with your beverage at the perfect temperature has never been more important. Whether you're an outdoor enthusiast, a busy professional, or someone who simply enjoys a hot cup of coffee or a cold refreshment throughout the day, temperature maintenance is key to an optimal experience.
            </p>

            <h3 className="text-xl font-semibold mt-8">Vacuum Insulation: The Core Technology</h3>
            <p className="text-lg leading-relaxed">
              The foundation of modern temperature retention in bottles like our GolMee Temperature Trekker lies in vacuum insulation technology. This involves creating a double-walled container with a vacuum between the walls. Since heat requires a medium to transfer (conduction, convection, or radiation), the vacuum significantly reduces heat transfer between the inside and outside of the bottle.
            </p>

            <h3 className="text-xl font-semibold mt-8">304 Stainless Steel: The Material That Makes the Difference</h3>
            <p className="text-lg leading-relaxed">
              Our choice of 304 stainless steel isn't arbitrary. This high-grade steel offers exceptional temperature retention properties while being resistant to corrosion, odors, and staining. The steel walls, combined with the vacuum insulation, create a powerful barrier against external temperature influences.
            </p>

            <h3 className="text-xl font-semibold mt-8">The Digital Temperature Display: Innovation Meets Practicality</h3>
            <p className="text-lg leading-relaxed">
              What truly sets the Temperature Trekker apart is its LED temperature display. Using precision temperature sensors, the bottle provides real-time feedback on your beverage's temperature. This isn't just a novelty feature—it's a practical tool that ensures your drink is at the perfect temperature before consumption.
            </p>

            <h3 className="text-xl font-semibold mt-8">The Science of Heat Retention</h3>
            <p className="text-lg leading-relaxed">
              When you fill your Temperature Trekker with a hot beverage, the internal stainless steel wall absorbs minimal heat due to its reflective properties. The vacuum between the walls prevents conductive and convective heat transfer, while the outer wall remains at room temperature, comfortable to hold regardless of the temperature inside.
            </p>

            <h3 className="text-xl font-semibold mt-8">Cold Retention: Equally Impressive</h3>
            <p className="text-lg leading-relaxed">
              The same principles apply to cold beverages. The vacuum insulation prevents the cold inside from being affected by the warmer environment outside. Our testing has shown that ice can remain solid for over 24 hours in our bottles, even in warm ambient conditions.
            </p>

            <h3 className="text-xl font-semibold mt-8">Real-World Performance</h3>
            <p className="text-lg leading-relaxed">
              In practical terms, the Temperature Trekker can maintain hot beverages above 140°F (60°C) for 12 hours and cold beverages below 45°F (7°C) for 24 hours. This exceptional performance is why our customers consistently rate the Temperature Trekker as one of the best thermos bottles on the market.
            </p>

            <h3 className="text-xl font-semibold mt-8">The Future of Temperature Control</h3>
            <p className="text-lg leading-relaxed">
              At GolMee, we're continuously researching new technologies to improve temperature retention even further. From advanced materials science to smart temperature regulation, we're committed to pushing the boundaries of what's possible in beverage temperature control.
            </p>

            <p className="text-lg leading-relaxed mt-8">
              The next time you take a sip of your perfectly hot coffee or refreshingly cold water from your Temperature Trekker, you'll know that it's not just a bottle—it's a sophisticated feat of engineering designed to enhance your hydration experience.
            </p>

            <div className="border-t border-gray-200 pt-6 mt-8">
              <p className="text-sm text-gray-500">
                For more information about the GolMee Temperature Trekker and its features, visit our product page or contact our customer service team.
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default BlogDialog;
