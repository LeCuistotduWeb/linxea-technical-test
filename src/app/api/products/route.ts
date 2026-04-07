import ProductApi from "@/features/product/product.api";

export async function GET(_: Request) {
  const products = await ProductApi.findProducts();
  return new Response(JSON.stringify(products), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};