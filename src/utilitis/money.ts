export function formatCurrency(price: number): string {
  const calculatedPrice = price / 100;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(calculatedPrice);
}
