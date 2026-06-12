import type { Products } from "../schemas/productSchema";

export type { Products };

export type ProductContextType = {
  products: Products[];
  error: Error | null;
  isError: boolean;
  isLoading: boolean;
};
