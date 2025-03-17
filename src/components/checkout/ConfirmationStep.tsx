
import { Button } from "@/components/ui/button";

interface ConfirmationStepProps {
  selectedColor: string;
  onClose: () => void;
}

const ConfirmationStep = ({ selectedColor, onClose }: ConfirmationStepProps) => {
  return (
    <div className="space-y-6 text-center">
      <div className="py-8">
        <div className="rounded-full bg-green-100 p-3 w-16 h-16 mx-auto flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-medium text-gray-900">
          Order Complete!
        </h3>
        <p className="mt-2 text-gray-600">
          Thank you for your order. Your Temperature Trekker in {selectedColor} will
          be shipped soon.
        </p>
      </div>
      <Button
        className="bg-golmee-blue hover:bg-blue-600 text-white"
        onClick={onClose}
      >
        Return to Shopping
      </Button>
    </div>
  );
};

export default ConfirmationStep;
