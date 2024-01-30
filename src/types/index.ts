import type { pathnames } from "~/navigation";

export interface ProductI {
  model: string;
  size: string;
  productFunction: string;
  productFunctionNoTranslate: string;
  system?: string;
  power?: string;
  price: string;
  image: string;
  description: string;
  totalPieces: number;
  href: keyof typeof pathnames;
}

export interface FormState {
  email: string;
  errors: {
    email: string;
  };
}

export interface Event {
  id: string | number;
  title: string;
  start: Date;
  end: Date;
  allDay: boolean;
}

export interface NavContextI {
  activeTab: string;
  changeActiveTab: (newActiveTab: string) => void;
}
