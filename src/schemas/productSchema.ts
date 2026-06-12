import z from "zod";

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  colors: z.array(z.string()),
  company: z.string(),
  description: z.string(),
  category: z.string(),
  price: z.number(),
});

export const productSchemaArrary = z.array(productSchema);

export type Products = z.infer<typeof productSchema>;
