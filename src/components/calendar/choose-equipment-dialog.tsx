import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { lights, mixers, sound } from "~/constants";
import { Button } from "~/components/ui/button";
import { createEventAction } from "~/components/calendar/event-actions";
import { Input } from "~/components/ui/input";
import { useTranslations } from "next-intl";
import { useState, type Dispatch, type SetStateAction, useEffect } from "react";
import { toast } from "sonner";
import { useFormStatus } from "react-dom";
import { cn } from "~/lib/utils";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  startDate: string;
  endDate: string;
}

export default function ChooseEquipmentDialog({
  open,
  setOpen,
  startDate,
  endDate,
}: Props) {
  const t = useTranslations("equipmentFeatures");
  const [success, setSuccess] = useState(false);

  const createEvent = async (formData: FormData) => {
    const result = await createEventAction(formData);

    if (result.error) {
      toast.error(result.error, {
        style: { background: "#fff0f0", color: "red" },
      });
    } else {
      setSuccess(true);
      toast.success(result.success, {
        style: { background: "#ecfdf3", color: "green" },
      });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-primary">
            Elige el equipo que se rentó
          </DialogTitle>
        </DialogHeader>
        <form
          action={createEvent}
          className="flex flex-col gap-4 text-muted-foreground antialiased"
        >
          <input type="hidden" name="date" value={startDate} />
          <input type="hidden" name="endDate" value={endDate?.toString()} />
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Mezcladoras</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {mixers.map((mixer) => (
                <label key={mixer.image} className="flex items-center gap-1">
                  <Input
                    type="radio"
                    name="product"
                    className="h-4 w-4 accent-primary"
                    value={`${mixer.model} ${t(mixer.productFunction)}`}
                  />
                  {`${mixer.model} ${t(mixer.productFunction)}`}
                </label>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Iluminación</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {lights.map((light) => (
                <label key={light.image} className="flex items-center gap-1">
                  <Input
                    type="radio"
                    name="product"
                    className="h-4 w-4 accent-primary"
                    value={light.model}
                  />
                  {light.model}
                </label>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Sonido</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {sound.map((product) => (
                <label key={product.image} className="flex items-center gap-1">
                  <Input
                    type="radio"
                    name="product"
                    className="h-4 w-4 accent-primary"
                    value={`${product.model} ${t(product.productFunction)}`}
                  />
                  {`${product.model} ${t(product.productFunction)}`}
                </label>
              ))}
            </div>
          </div>
          <SubmitButton
            success={success}
            setSuccess={setSuccess}
            setOpen={setOpen}
          />
        </form>
      </DialogContent>
    </Dialog>
  );
}

function SubmitButton({
  setOpen,
  setSuccess,
  success,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
  setSuccess: Dispatch<SetStateAction<boolean>>;
  success: boolean;
}) {
  const { pending } = useFormStatus();

  useEffect(() => {
    if (success) setOpen(false);
    setSuccess(false);
  }, [success]);

  return (
    <Button className={cn(pending && "animate-pulse")}>
      {pending ? "Creando reservación..." : "Crear reservación"}
    </Button>
  );
}
