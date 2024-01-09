import { Loader2 } from "lucide-react";
import { Button } from "~/components/ui/button";

export default function SubmitButton({ loading }: { loading: boolean }) {
  return (
    <Button disabled={loading} type="submit" className="flex w-full gap-2">
      {loading ? (
        <>
          <span>Cargando</span>
          <span className="animate-spin">
            <Loader2 />
          </span>
        </>
      ) : (
        <span>Iniciar sesión</span>
      )}
    </Button>
  );
}
