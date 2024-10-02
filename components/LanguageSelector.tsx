"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const locales = [
  { value: "en", label: "English" },
  { value: "pt", label: "Português" },
];

const LanguageSelector = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [currentLocale, setCurrentLocale] = useState("en");

  useEffect(() => {
    const pathLocale = pathname.split("/")[1];
    if (locales.some((locale) => locale.value === pathLocale)) {
      setCurrentLocale(pathLocale);
    }
  }, [pathname]);

  const handleLanguageChange = (newLocale: string) => {
    const newPathname = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    setCurrentLocale(newLocale);
    router.push(newPathname);
  };

  return (
    <Select value={currentLocale} onValueChange={handleLanguageChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select language" />
      </SelectTrigger>
      <SelectContent>
        {locales.map((locale) => (
          <SelectItem key={locale.value} value={locale.value}>
            {locale.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguageSelector;
