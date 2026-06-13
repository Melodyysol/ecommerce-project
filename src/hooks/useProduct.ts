import { createContext } from "react";
import type { ProductContextType } from "../types/product";

export const productContext = createContext<ProductContextType>({
  products: [],
  error: null,
  isError: false,
  isLoading: false,
});
