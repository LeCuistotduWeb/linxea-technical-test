import { ProductsSortOrder } from "@/features/product/product.type";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

type ProductsListToolbarProps = {
  allTags: string[];
  activeTags: string[];
  sortOrder: ProductsSortOrder;
  onSortOrderChange: (sortOrder: ProductsSortOrder) => void;
  onToggleTag: (tag: string) => void;
  onReset: () => void;
};

export default function ProductsListToolbar({
  allTags,
  activeTags,
  sortOrder,
  onSortOrderChange,
  onToggleTag,
  onReset,
}: ProductsListToolbarProps) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
      {allTags.length > 0 && (
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filtrer par tag">
          <span className="text-sm text-muted-foreground">Filtrer :</span>
          {allTags.map((tag) => {
            const isActive = activeTags.includes(tag);

            return (
              <button
                key={tag}
                onClick={() => onToggleTag(tag)}
                aria-pressed={isActive}
                className="cursor-pointer"
              >
                <Badge
                  className={cn(
                    "uppercase font-medium transition-opacity",
                    isActive ? "bg-foreground text-background" : "opacity-60 hover:opacity-100"
                  )}
                >
                  {tag}
                </Badge>
              </button>
            );
          })}
          {activeTags.length > 0 && (
            <button
              onClick={onReset}
              className="cursor-pointer text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground"
            >
              Reinitialiser
            </button>
          )}
        </div>
      )}
      <div className="flex items-center gap-2">
        <label htmlFor="products-sort" className="text-sm text-muted-foreground">
          Trier :
        </label>
        <select
          id="products-sort"
          value={sortOrder}
          onChange={(event) => onSortOrderChange(event.target.value as ProductsSortOrder)}
          className="p-2 rounded-md border border-foreground/15 text-sm"
        >
          <option value="updatedAt_desc">Plus recent</option>
          <option value="updatedAt_asc">Plus ancien</option>
        </select>
      </div>
    </div>
  );
}
