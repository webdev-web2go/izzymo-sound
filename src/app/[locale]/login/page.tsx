"use client";

import { signIn } from "next-auth/react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import type { FormState } from "~/types";
import { FormEvent, useState } from "react";
import { adminEmail } from "~/constants";

export default function LoginPage() {
  const [formState, setFormState] = useState<FormState>({
    email: "",
    errors: {
      email: "",
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const email = formState.email;
    const errors = formState.errors;

    if (email === "") {
      errors["email"] = "Es necesario ingresar el correo";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      errors["email"] = "El correo debe ser válido";
    } else if (email !== adminEmail) {
      errors["email"] = "El correo ingresado no tiene autorización";
    } else {
      errors["email"] = "";
    }

    setFormState({ ...formState, errors });

    if (formState.errors.email.length > 0) return;

    setFormState({ email: "", errors });

    signIn("email", {
      email: formState.email,
      callbackUrl: "/admin",
    });
  };

  return (
    <main className="flex min-h-screen items-center justify-center">
      <form
        noValidate
        onSubmit={handleSubmit}
        className="flex w-80 flex-col gap-4 text-muted-foreground antialiased"
      >
        <label className="flex flex-col gap-1">
          Correo electrónico
          <Input
            type="email"
            name="email"
            placeholder="ejemplo@algo.com"
            value={formState.email}
            onChange={(e) => {
              setFormState({
                ...formState,
                [e.target.name]: e.target.value,
              });
            }}
          />
          {formState?.errors.email.length > 0 && (
            <p className="text-sm text-destructive">{formState.errors.email}</p>
          )}
        </label>
        <Button className="w-full">Iniciar sesión</Button>
      </form>
    </main>
  );
}
