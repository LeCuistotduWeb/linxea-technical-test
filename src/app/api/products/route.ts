import ProductService from "@/features/product/product.service";

export async function GET() {
  const products = await ProductService.findProducts();
  return Response.json(products, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};