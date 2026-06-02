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

export type NavBarProps = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  carts: Cart[];
  currentUser: { username: string; email: string } | null;
};

export type AboutPageProps = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  carts: Cart[];
  currentUser: { username: string; email: string } | null;
  setCurrentUser: (user: { username: string; email: string } | null) => void;
};

export type HeaderProps = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  carts: Cart[];
  currentUser: { username: string; email: string } | null;
  setCurrentUser: (user: { username: string; email: string } | null) => void;
};

export type HomePageProps = {
  products: Products[];
  isError: boolean;
  error: Error | null;
  isLoading: boolean;
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  carts: Cart[];
  currentUser: { username: string; email: string } | null;
  setCurrentUser: (user: { username: string; email: string } | null) => void;
  toasts: {
    message: string;
    type: "success" | "error";
    id: number;
  }[];
  setToasts: React.Dispatch<
    React.SetStateAction<
      {
        message: string;
        type: "error" | "success";
        id: number;
      }[]
    >
  >;
};

export type ProductPageProps = {
  products: Products[];
  isError: boolean;
  error: Error | null;
  isLoading: boolean;
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  carts: Cart[];
  setIsShipping: React.Dispatch<React.SetStateAction<boolean>>;
  currentUser: { username: string; email: string } | null;
  setCurrentUser: (user: { username: string; email: string } | null) => void;
};

export type CartPageProps = {
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  carts: Cart[];
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
  isShipping: boolean;
  currentUser: { username: string; email: string } | null;
  setCurrentUser: (user: { username: string; email: string } | null) => void;
};

export type ItemPageProp = {
  products: Products[];
  isError: boolean;
  error: Error | null;
  isLoading: boolean;
  theme: ThemeName;
  setTheme: (theme: ThemeName) => void;
  carts: Cart[];
  addToBag: (filteredItem: Products, activeColor: string) => void;
  setQuantity: (quantity: number) => void;
  quantity: number;
  currentUser: { username: string; email: string } | null;
  setCurrentUser: (user: { username: string; email: string } | null) => void;
  toasts: {
    message: string;
    type: "success" | "error";
    id: number;
  }[];
  setToasts: React.Dispatch<
    React.SetStateAction<
      {
        message: string;
        type: "error" | "success";
        id: number;
      }[]
    >
  >;
};

export type ProductsGridProp = {
  products: Products[];
  isError: boolean;
  error: Error | null;
  isLoading: boolean;
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

export type FormProps = {
  setCurrentUser: (user: { username: string; email: string } | null) => void;
  toasts: {
    message: string;
    type: "success" | "error";
    id: number;
  }[];
  setToasts: React.Dispatch<
    React.SetStateAction<
      {
        message: string;
        type: "error" | "success";
        id: number;
      }[]
    >
  >;
};

export type FormData = { username?: string; email: string; password: string };
