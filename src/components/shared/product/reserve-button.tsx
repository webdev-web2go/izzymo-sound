"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "~/components/ui/button";

interface Props {
  model?: string;
  productFunction?: string;
  image?: string;
  isPackage: boolean;
  packageNumber?: number;
}

export default function ReserveButton({
  model,
  productFunction,
  image,
  isPackage,
  packageNumber,
}: Props) {
  const t = useTranslations("home");
  const tEquip = useTranslations("equipmentFeatures");

  const [whatsappMessage, setWhatsappMessage] = useState("");

  const sendMessage = () => {
    let message = "";

    if (!isPackage) {
      if (image?.includes("light")) {
        message = `${t("interested")} ${model}`;
      } else {
        message = `${t("interested")} ${model} ${tEquip(productFunction)}`;
      }
    } else {
      message = `${t("interested")} ${t("package")} ${packageNumber}`;
    }

    setWhatsappMessage(message);
  };

  return (
    <Button
      asChild
      className="col-span-full w-full py-6 text-xl"
      onClick={sendMessage}
    >
      <a
        href={`https://api.whatsapp.com/send?phone=529993931271&text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("reserve")}
      </a>
    </Button>
  );
}
