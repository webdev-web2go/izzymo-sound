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
import { useState, type Dispatch, type SetStateAction, useEffect } from "react";
import { toast } from "sonner";
import { useFormStatus } from "react-dom";
import { cn } from "~/lib/utils";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function ChooseEquipmentDialog({ open, setOpen }: Props) {
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
            Edita la información del evento
          </DialogTitle>
        </DialogHeader>
        <form
          action={createEvent}
          className="flex flex-col gap-4 text-muted-foreground antialiased"
        >
          <div className="flex flex-col gap-2">
            <div>
              <label htmlFor="title">Nombre del evento</label>
              <Input id="title" type="text" name="title" />
            </div>
            <div className="flex gap-2">
              <div className="w-full">
                <label htmlFor="start">Inicio</label>
                <Input id="start" type="datetime-local" name="start" />
              </div>
              <div className="w-full">
                <label htmlFor="end">Fin</label>
                <Input id="end" type="datetime-local" name="end" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold">Mezcladoras</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {mixers.map((mixer) => (
                <label key={mixer.image} className="flex items-center gap-1">
                  <Input
                    type="checkbox"
                    name="product"
                    className="h-4 w-4 accent-primary"
                    value={`${mixer.model} ${mixer.productFunctionNoTranslate}`}
                  />
                  {`${mixer.model} ${mixer.productFunctionNoTranslate}`}
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
                    type="checkbox"
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
                    type="checkbox"
                    name="product"
                    className="h-4 w-4 accent-primary"
                    value={`${product.model} ${product.size} ${product.productFunctionNoTranslate}`}
                  />
                  {`${product.model} ${product.size} ${product.productFunctionNoTranslate}`}
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
