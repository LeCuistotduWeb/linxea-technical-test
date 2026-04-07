import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { LayoutDescription, LayoutTitle } from "@/components/layout";
import monthlyPriceFormat from "@/lib/monthly-price-format";
import { Product } from "@/features/product/product.type";

type ProductDetailProps = {
  product: Product;
};

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <article>
      <div className="grid items-start gap-8 md:grid-cols-2">
        <div className="relative min-h-72 overflow-hidden rounded-xl ring-1 ring-foreground/10">
          <Image
            src={product.imageUrl}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        <div className="space-y-6">
          <header className="space-y-3">
            <LayoutTitle>{product.title}</LayoutTitle>
            <LayoutDescription className="text-base leading-relaxed">
              {product.description}
            </LayoutDescription>
          </header>

          <ul className="flex flex-wrap gap-2" aria-label="Tags du produit">
            {product.tags.map((tag) => (
              <li key={tag}>
                <Badge className="uppercase font-medium">{tag}</Badge>
              </li>
            ))}
          </ul>

          <p className="text-lg font-semibold text-title" aria-label="Prix du produit">
            {monthlyPriceFormat(product.price)}
          </p>
        </div>
      </div>
    </article>
  );
}
