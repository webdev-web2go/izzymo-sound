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
import type { Dispatch, SetStateAction } from "react";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  startDate: string;
  endDate: Date | null;
}

export default function ChooseEquipmentDialog({
  open,
  setOpen,
  startDate,
  endDate,
}: Props) {
  const t = useTranslations("equipmentFeatures");

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-primary">
            Elige el equipo que se rentó
          </DialogTitle>
        </DialogHeader>
        <form
          action={createEventAction}
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
          <Button onClick={() => setOpen(false)}>Enviar</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
