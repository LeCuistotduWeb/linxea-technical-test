import { LayoutDescription, LayoutMain, LayoutTitle } from "@/components/layout";
import ProductsList from "@/components/products-list";

export const metadata = {
  title: "Produits",
  description: "Liste des produits disponibles",
};

export default function ProductsPage() {
  return (
    <LayoutMain>
      <div className="space-y-2 mb-4">
        <LayoutTitle>Nos produits</LayoutTitle>
        <LayoutDescription>
          Découvrez notre sélection de produits de qualité, conçus pour répondre à tous vos besoins.
        </LayoutDescription>
      </div>
      <ProductsList />
    </LayoutMain>
  );
}
