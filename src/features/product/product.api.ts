import { findProductByIdParams, Product } from "./product.type";
import siteConfig from "@/constants/site";

const CACHE_REVALIDATE_SECONDS = 3600; // 1 hour

async function findProducts(): Promise<Product[]> {
  try {
    return await fetch(`${siteConfig.apiUrl}/api/products`, {
      next: { revalidate: CACHE_REVALIDATE_SECONDS },
    }).then((res) =>
      res.json()
    ) || [];
  } catch (error) {
    return [];
  }
};

async function findProductById({ id }: findProductByIdParams): Promise<Product | null> {
  try {
    return await fetch(`${siteConfig.apiUrl}/api/products/${id}`, {
      next: { revalidate: CACHE_REVALIDATE_SECONDS },
    }).then((res) =>
      res.json()
    ) || null;
  } catch (error) {
    return null;
  }
}

const ProductApi = {
  findProducts,
  findProductById
}

export default ProductApi;