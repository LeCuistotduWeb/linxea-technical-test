"use client";

import useProducts from "@/hooks/use-products";
import ProductsListToolbar from "./products-list-toolbar";
import ProductsListGrid from "./products-list-grid";
import ProductsListLoading from "./products-list-loading";

export default function ProductsList() {
  const {
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
  } = useProducts();

  if (isPending) {
    return <ProductsListLoading />;
  }

  if (isError) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return <span className="text-red-600">Error: {errorMessage}</span>
  }

  return (
    <div className="space-y-4">
      <ProductsListToolbar
        allTags={allTags}
        activeTags={activeTags}
        sortOrder={sortOrder}
        onSortOrderChange={setSortOrder}
        onToggleTag={toggleTag}
        onReset={resetTags}
      />
      <ProductsListGrid products={products} />
    </div>
  );
}