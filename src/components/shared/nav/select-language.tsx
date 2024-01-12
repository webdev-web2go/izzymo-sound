"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { usePathname, useRouter } from "~/navigation";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";

export default function SelectLanguage({
  placeholder,
}: {
  placeholder: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const params = useParams();
  return (
    <Select
      onValueChange={(locale) =>
        router.replace({ pathname, params: params as any }, { locale })
      }
    >
      <SelectTrigger className="w-[130px] text-base text-primary">
        <SelectValue placeholder={placeholder} defaultValue={currentLocale} />
      </SelectTrigger>
      <SelectContent className="text-base">
        <SelectItem
          value={currentLocale === "en" ? "es" : "en"}
          className="text-base text-primary antialiased"
        >
          {currentLocale === "en" ? "Español" : "English"}
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
