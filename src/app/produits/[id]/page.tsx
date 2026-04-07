import { notFound } from "next/navigation";
import { LayoutMain } from "@/components/layout";
import ProductDetail from "@/components/product-detail";
import Link from "next/link";
import { Metadata } from "next";
import ProductApi from "@/features/product/product.api";

type ProductDetailPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: ProductDetailPageProps,
): Promise<Metadata> {
  const id = (await params).id
  const post = await ProductApi.findProductById({ id });
  if (!post) { return notFound(); }
  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams() {
  const products = await ProductApi.findProducts() || [];
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const product = await ProductApi.findProductById({ id });
  if (!product) { return notFound(); }
  return (
    <LayoutMain>
      <Link href="/produits" className="text-sm hover:underline mb-4 inline-block">
        &larr; Retour à la liste des produits
      </Link>
      <ProductDetail product={product} />
    </LayoutMain>
  );
}
