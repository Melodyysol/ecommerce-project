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

export type ThemeProp = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  carts: Cart[];
  setCart?: (cart: Cart) => void;
  setQuantity?: (quantity: number) => void
}

export type HomePageProp = {
  products: Products[];
  isError: boolean;
  error: Error | null;
  isLoading: boolean;
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  carts: Cart[];
}

export type CartPageProp = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  carts: Cart[];
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
  setQuantity: (quantity: number) => void;
}

export type ItemPageProp = {
  products: Products[];
  isError: boolean;
  error: Error | null;
  isLoading: boolean;
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  carts: Cart[];
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
  setQuantity: (quantity: number) => void
  quantity: number
}

export type ProductsGridProp = {
  products: Products[];
  isError: boolean;
  error: Error | null;
  isLoading: boolean;
  gridForm: 'col' | 'row'
}

export type ProductsProp = {
  products: Products[];
  isError: boolean;
  error: Error | null;
  isLoading: boolean;
}

export type FormGridData = {
  search: string;
  categoryRef: string;
  order: string;
  companyRef: string;
  range: string;
  shipping: string
}

