export type Product = {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  tags: string[];
  updatedAt: string;
};

export type findProductByIdParams = {
  id: string;
};

export type ProductsSortOrder = "updatedAt_desc" | "updatedAt_asc";

export type ApiProduct = {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  tags: string[];
  updatedAt: string;
};