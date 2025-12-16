"use client";

import { useEffect, useState } from "react";
import { useAppStore } from "@/store/useAppStore";
import { loadLocaleFile } from "@/utils/i18n-loader";

const FILES = [
  "top_nav",
  "middle_nav",
  "main_nav",
  "footer",
  "categories",
  "product",
  "type",
  "deal"
//   "footer",
//   "common",
//   "sidebar",
//   "button",
//   "auth",
//   "profile",
//   "errors",
//   "product"
] as const;

type LocaleFileName = (typeof FILES)[number];
type LocaleDictionary = Record<LocaleFileName, Record<string, string>>;

export const useTranslate = () => {
  const lang = useAppStore((s) => s.language);
  const [dict, setDict] = useState<LocaleDictionary>({} as LocaleDictionary);

  useEffect(() => {
  const load = async () => {
    const merged: Partial<LocaleDictionary> = {};

    for (const fileName of FILES) {
      const data = await loadLocaleFile<Record<string, string>>(lang, fileName);
      // console.log("loaded file", lang, fileName, data);  // 👈 THÊM
      merged[fileName] = data;
    }

    setDict(merged as LocaleDictionary);
  };

  load();
}, [lang]);

// console.log("dict:", dict); // 👈 THÊM


  const t = (fileName: LocaleFileName, key: string): string => {
    return dict[fileName]?.[key] ?? key;
  };

  return { t, lang };
};
