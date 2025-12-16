export function calculateDiscount(
  price?: string | number,
  priceSale?: string | number
): number {
  const original = Number(price);
  const sale = Number(priceSale);

  if (!original || !sale || sale >= original) return 0;

  return Math.round(((original - sale) / original) * 100);
}
