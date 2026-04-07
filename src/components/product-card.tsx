import { Product } from "@/features/product/product.type";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import monthlyPriceFormat from "@/lib/monthly-price-format";
import Link from "next/link";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="h-full relative hover:-translate-y-1 transition-transform pt-0">
      <div className="relative aspect-16/10 w-full">
        <Image
          src={product.imageUrl}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover h-48 w-full"
        />
      </div>

      <CardHeader>
        <CardTitle>
          {product.title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap justify-between">
          <ul className="flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <li key={tag}>
                <Badge className="uppercase font-medium">{tag}</Badge>
              </li>
            ))}
          </ul>
          <p className="text-sm font-medium">{monthlyPriceFormat(product.price)}</p>
        </div>
      </CardContent>
      <Link href={`/produits/${product.id}`} className="absolute inset-0 z-10" />
    </Card>
  )
};