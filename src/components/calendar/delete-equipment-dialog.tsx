import { Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { Event } from "~/types";
import { deleteEventAction } from "~/app/[locale]/admin/event-actions";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  event: Event;
}

export default function DeleteEquipmentDialog({ open, setOpen, event }: Props) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="flex flex-col gap-3">
        <DialogHeader>
          <DialogTitle className="text-primary">
            ¿Deseas eliminar ésta reservación?
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>{event?.title}</DialogDescription>
        <Button
          onClick={async () => {
            await deleteEventAction(Number(event?.id));
            setOpen(false);
          }}
        >
          eliminar
        </Button>
      </DialogContent>
    </Dialog>
  );
}
