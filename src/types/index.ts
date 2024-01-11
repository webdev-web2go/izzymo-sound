import type { pathnames } from "~/navigation";

export interface ProductI {
  model: string;
  size: string;
  productFunction: string;
  system?: string;
  power?: string;
  price: string;
  image: string;
  description: string;
  href: keyof typeof pathnames;
}

export interface FormState {
  email: string;
  errors: {
    email: string;
  };
}

export interface Event {
  id: string;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
}
