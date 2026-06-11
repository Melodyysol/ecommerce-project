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
});

export const productSchemaArrary = z.array(productSchema);

export type Products = z.infer<typeof productSchema>;

export type ThemeName = "winter" | "dracula";

export type Forms = {
  name: string;
  labelName: string;
  inputType: string;
};

export type Cart = {
  id: string;
  name: string;
  image: string;
  color: string;
  company: string;
  price: number;
  quantity: number;
};

export type Order = {
  id: number;
  name: string;
  address: string;
  products: number;
  cost: string;
  date: string;
};

export type NavBarProps = {
  currentUser: { username: string; email: string } | null;
};

export type AboutPageProps = {
  currentUser: { username: string; email: string } | null;
  setCurrentUser: (user: { username: string; email: string } | null) => void;
};

export type HeaderProps = {
  currentUser: { username: string; email: string } | null;
  setCurrentUser: (user: { username: string; email: string } | null) => void;
};

export type ProductPageProps = {
  setIsShipping: React.Dispatch<React.SetStateAction<boolean>>;
};

export type CartPageProps = {
  isShipping: boolean;
};

export type CheckoutPageProps = {
  isShipping: boolean;
  setOrder: React.Dispatch<React.SetStateAction<Order[]>>;
};
export type OrderPageProps = {
  orders: Order[];
};

export type ItemPageProp = {
  setQuantity: (quantity: number) => void;
  quantity: number;
};

export type ProductsGridProp = {
  products: Products[];
  gridForm: "col" | "row";
};

export type ProductsProp = {
  products: Products[];
  isError: boolean;
  error: Error | null;
  isLoading: boolean;
};

export type FormGridData = {
  search: string;
  categoryRef: string;
  order: string;
  companyRef: string;
  range: string;
};

export type FormData = { userId: string; username?: string; email: string; password: string };

export type User = {
  userId: string;
  username: string;
  email: string;
};
