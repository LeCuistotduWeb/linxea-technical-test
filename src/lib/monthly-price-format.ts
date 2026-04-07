export default function monthlyPriceFormat(price: number): string {
  if (price <= 0) {
    return "Sans frais";
  }
  const formattedPrice = new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
  return `à partir de ${formattedPrice}€/mois`;
}