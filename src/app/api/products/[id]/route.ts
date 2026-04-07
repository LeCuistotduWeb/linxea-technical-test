import ProductService from "@/features/product/product.service";

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await ProductService.findProductById({ id });

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