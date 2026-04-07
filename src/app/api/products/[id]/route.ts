import ProductApi from "@/features/product/product.api";

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await ProductApi.findProductById({ id });
  if (product) {
    return new Response(JSON.stringify(product), {
      headers: { "Content-Type": "application/json" },
    });
  } else {
    return new Response("Product not found", { status: 404 });
  }
}