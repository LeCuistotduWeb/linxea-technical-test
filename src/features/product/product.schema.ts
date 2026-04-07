import z from "zod";

export const ProductIdSchema = z.string().regex(/^pdt_\d+$/, "Invalid product id");