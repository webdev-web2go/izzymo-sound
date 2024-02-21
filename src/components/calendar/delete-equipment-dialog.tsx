import { type Dispatch, type SetStateAction, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { deleteEventAction } from "~/components/calendar/event-actions";
import { toast } from "sonner";
import { cn } from "~/lib/utils";
import { Music } from "lucide-react";
import type { Event } from "~/types";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  event: Event;
}

export default function DeleteEquipmentDialog({ open, setOpen, event }: Props) {
  const [loading, setLoading] = useState(false);

  const deleteEvent = async (id: number) => {
    setLoading(true);
    const result = await deleteEventAction(id);

    if (result.error) {
      toast.error(result.error, {
        style: { background: "#fff0f0", color: "red", border: "none" },
      });
    } else {
      setOpen(false);
      toast.success(result.success, {
        style: { background: "#ecfdf3", color: "green", border: "none" },
      });
    }

    setLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="flex flex-col gap-3">
        <DialogHeader>
          <DialogTitle className="text-primary">
            ¿Deseas eliminar ésta reservación?
          </DialogTitle>
        </DialogHeader>
        <DialogDescription className="space-y-2">
          <p className="text-base font-semibold">{event?.title}</p>
          <ul className="space-y-1">
            {event?.extendedProps.split("|").map((product: string) => (
              <li className="flex items-center gap-1 text-base">
                <Music /> {product}
              </li>
            ))}
          </ul>
        </DialogDescription>
        <Button
          className={cn(loading && "animate-pulse")}
          onClick={async () => await deleteEvent(Number(event?.id))}
        >
          {loading ? "Eliminando reservación..." : "Eliminar reservación"}
        </Button>
      </DialogContent>
    </Dialog>
  );
}
