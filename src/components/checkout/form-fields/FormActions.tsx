
import { Button } from "@/components/ui/button";

interface FormActionsProps {
  onBack: () => void;
  onContinue: () => void;
}

const FormActions = ({ onBack, onContinue }: FormActionsProps) => {
  return (
    <div className="col-span-2 flex justify-between pt-4">
      <Button type="button" variant="outline" onClick={onBack}>
        Back to Colors
      </Button>
      <Button
        type="button"
        className="bg-golmee-blue hover:bg-blue-600 text-white"
        onClick={onContinue}
      >
        Continue to Payment
      </Button>
    </div>
  );
};

export default FormActions;
