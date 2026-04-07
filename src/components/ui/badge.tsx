import * as React from "react"
import { cn } from "@/lib/utils"

function Badge({
  className,
  ...props
}: React.ComponentProps<"span"> & { asChild?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-800",
        className)}
      {...props}
    />
  )
}

export { Badge }
