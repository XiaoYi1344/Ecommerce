// useCurrency.ts
"use client";
import { useEffect, useState } from "react";
import { useAppStore } from "@/store/useAppStore";

type Rates = Record<string, number>;

export const useCurrency = () => {
  const currency = useAppStore((s) => s.currency);
  const [rates, setRates] = useState<Rates>({ usd: 1, eur: 0.92, vnd: 24000 }); // ví dụ initial static

  // Optionally: fetch live rates (example: exchangerate.host free API)
  useEffect(() => {
    // nếu muốn fetch, mở comment và thay URL bằng API hợp lệ
    // fetch("https://api.exchangerate.host/latest?base=USD&symbols=USD,EUR,VND")
    //   .then(res => res.json())
    //   .then(data => {
    //     setRates({
    //       usd: 1,
    //       eur: data.rates.EUR,
    //       vnd: data.rates.VND
    //     });
    //   }).catch(()=>{/* giữ rates mặc định nếu lỗi */});
  }, []);

  // convert value from USD-base to target currency
  const convert = (valueInUsd: number) => {
    const rate = rates[currency] ?? 1;
    return valueInUsd * rate;
  };

  // format number to currency string using Intl
  const format = (valueInUsd: number) => {
    const converted = convert(valueInUsd);
    // choose locale per currency if you want:
    const locales: Record<string, string> = { usd: "en-US", eur: "de-DE", vnd: "vi-VN" };
    const options: Intl.NumberFormatOptions = { style: "currency", currency: currency.toUpperCase() };
    return new Intl.NumberFormat(locales[currency] || "en-US", options).format(converted);
  };

  return { currency, rates, setRates, convert, format };
};
