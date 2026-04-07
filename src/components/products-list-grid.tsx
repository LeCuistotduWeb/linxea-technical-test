import { Product } from "@/features/product/product.type";
import ProductCard from "./product-card";

type ProductsListGridProps = {
  products: Product[];
};

export default function ProductsListGrid({ products }: ProductsListGridProps) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}
