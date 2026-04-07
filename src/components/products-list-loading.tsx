import { Skeleton } from "./ui/skeleton";

export default function ProductsListLoading() {
  return (
    <div className="space-y-4" aria-busy="true" aria-live="polite">
      <div className="flex flex-wrap gap-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-7 w-20 rounded-full" />
        ))}
      </div>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, index) => (
          <li key={index}>
            <Skeleton className="h-60" />
          </li>
        ))}
      </ul>
    </div>
  );
}
