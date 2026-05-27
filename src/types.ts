import z from "zod";

const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  image: z.string(),
  colors: z.array(z.string()),
  company: z.string(),
  description: z.string(),
  category: z.string(),
  price: z.number(),
})

export const productSchemaArrary = z.array(productSchema)

export type Products = z.infer<typeof productSchema>

export type ThemeName = 'winter' | 'dracula'

export type ThemeProp = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  carts: Cart[];
  setCart?: (cart:Cart) => void;
  setQuantity?: (quantity: number) => void
}

export type ProductProps = {
  products: Products[];
  isError: boolean;
  error: Error | null;
  isLoading: boolean;
  theme?: ThemeName;
  setTheme?: (theme: ThemeName) => void;
  gridForm?: 'col' | 'row';
  carts?: Cart[];
  setCart?: (cart: Cart) => void;
  setQuantity?: (quantity: number) => void
  quantity?: number
}

export type Forms = {
  name: string;
  labelName: string;
  inputType: string;
}

export type Cart = {
  id: string;
  name: string;
  image: string;
  color: string;
  company: string;
  price: number;
  quantity: number
}