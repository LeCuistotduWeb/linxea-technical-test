import "server-only";
import { ApiProduct, Product } from "./product.type";

/**
 * Converts an API product to an internal application product format.
 * @param apiProduct - The product data from the API
 * @returns A product object in the application's internal format
 */
export function mapApiProductToProduct(apiProduct: ApiProduct): Product {
  return {
    id: apiProduct.id,
    slug: apiProduct.slug,
    title: apiProduct.title,
    description: apiProduct.description,
    price: apiProduct.price,
    imageUrl: apiProduct.imageUrl,
    tags: apiProduct.tags,
    updatedAt: apiProduct.updatedAt,
  };
}