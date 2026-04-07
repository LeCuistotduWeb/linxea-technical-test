"use client";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Product, ProductsSortOrder } from "@/features/product/product.type";

export default function useProducts() {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [sortOrder, setSortOrder] = useState<ProductsSortOrder>("updatedAt_desc");

  const { data, error, isError, isPending } = useQuery({
    queryKey: ["products"],
    queryFn: async (): Promise<Product[]> => {
      const response = await fetch("/api/products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  const allTags = useMemo(
    () => Array.from(new Set((data ?? []).flatMap((product) => product.tags))).sort(),
    [data]
  );

  const products = useMemo(() => {
    const filteredProducts = activeTags.length === 0
      ? (data ?? [])
      : (data ?? []).filter((product) =>
        activeTags.every((tag) => product.tags.includes(tag))
      );

    return [...filteredProducts].sort((a, b) => {
      const timeA = new Date(a.updatedAt).getTime();
      const timeB = new Date(b.updatedAt).getTime();
      return sortOrder === "updatedAt_desc" ? timeB - timeA : timeA - timeB;
    });
  }, [activeTags, data, sortOrder]);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const resetTags = () => {
    setActiveTags([]);
  };

  return {
    allTags,
    activeTags,
    sortOrder,
    products,
    error,
    isError,
    isPending,
    toggleTag,
    resetTags,
    setSortOrder,
  };
}
