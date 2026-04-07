import { notFound } from "next/navigation";
import { LayoutMain } from "@/components/layout";
import ProductDetail from "@/components/product-detail";
import Link from "next/link";
import { Product } from "@/features/product/product.type";
import siteConfig from "@/constants/site";
import { Metadata } from "next";

type ProductDetailPageProps = {
  params: Promise<{ id: string }>;
};

const CACHE_REVALIDATE_SECONDS = 3600; // 1 hour

export async function generateMetadata(
  { params }: ProductDetailPageProps,
): Promise<Metadata> {
  const id = (await params).id
  const post = await fetch(`${siteConfig.apiUrl}/api/products/${id}`).then((res) =>
    res.json()
  )
  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams() {
  const response = await fetch(`${siteConfig.apiUrl}/api/products`, {
    next: { revalidate: CACHE_REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    return [];
  }
  const products = await response.json() as Product[];
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;

  const response = await fetch(`${siteConfig.apiUrl}/api/products/${id}`, {
    next: { revalidate: CACHE_REVALIDATE_SECONDS },
  });

  const product = await response.json() as Product;

  if (!product.id) { return notFound(); }

  return (
    <LayoutMain>
      <Link href="/produits" className="text-sm hover:underline mb-4 inline-block">
        &larr; Retour à la liste des produits
      </Link>
      <ProductDetail product={product} />
    </LayoutMain>
  );
}
