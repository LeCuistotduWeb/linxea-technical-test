import ProductApi from "@/features/product/product.api";

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await ProductApi.findProductById({ id });

  if (product) {
    return Response.json(product, {
      headers: { "Content-Type": "application/json" },
    });
  }

  return Response.json({ message: "Product not found" }, {
    status: 404,
    headers: { "Content-Type": "application/json" },
  });
}