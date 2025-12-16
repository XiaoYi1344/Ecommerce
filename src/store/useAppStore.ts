// useAppStore.ts
import { create } from "zustand";

export type Language = "en" | "vi" | "fr";
export type Currency = "usd" | "eur" | "vnd";

interface AppStore {
  language: Language;
  currency: Currency;
  setLanguage: (lang: Language) => void;
  setCurrency: (cur: Currency) => void;
}

export const useAppStore = create<AppStore>((set) => {
  // initial plain defaults; will be overridden on client hydration
  const initLang = typeof window !== "undefined" ? (localStorage.getItem("lang") as Language) : "en";
  const initCur = typeof window !== "undefined" ? (localStorage.getItem("cur") as Currency) : "usd";

  return {
    language: initLang || "en",
    currency: initCur || "usd",
    setLanguage: (lang) => {
      if (typeof window !== "undefined") localStorage.setItem("lang", lang);
      set({ language: lang });
    },
    setCurrency: (cur) => {
      if (typeof window !== "undefined") localStorage.setItem("cur", cur);
      set({ currency: cur });
    },
  };
});
