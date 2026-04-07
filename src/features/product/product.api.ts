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
  } catch () {
    return [];
  }
};

async function findProductById({ id }: findProductByIdParams): Promise<Product | null> {
  try {
    const response = await fetch(`${siteConfig.apiUrl}/api/products/${id}`, {
      next: { revalidate: CACHE_REVALIDATE_SECONDS },
    }).then((res) =>
      res.json()
    );
    if (response?.message) {
      return null;
    }
    return response;
  } catch () {
    return null;
  }
}

const ProductApi = {
  findProducts,
  findProductById
}

export default ProductApi;