import "server-only";
import data from "@/datas/products.json";
import { mapApiProductToProduct } from "./product.mapper";
import { ApiProduct, findProductByIdParams, Product } from "./product.type";
import { ProductIdSchema } from "./product.schema";

async function findProducts(): Promise<Product[]> {
  const products: ApiProduct[] = data;
  if (!products) { return []; }
  return products.map((product) => mapApiProductToProduct(product));
};

async function findProductById({ id }: findProductByIdParams): Promise<Product | null> {
  const parsedId = ProductIdSchema.safeParse(id);

  if (!parsedId.success) {
    return null;
  }

  const products: ApiProduct[] = data;
  const product = products.find((product) => product.id === id);
  if (!product) {
    return null;
  }
  return mapApiProductToProduct(product);
}

const ProductService = {
  findProducts,
  findProductById
}

export default ProductService;