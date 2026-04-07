import ProductApi from "@/features/product/product.api";

export async function GET() {
  const products = await ProductApi.findProducts();
  return Response.json(products, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};