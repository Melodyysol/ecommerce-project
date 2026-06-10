import type { Products } from "../types/types";

export type ProductContextType = {
  products: Products[];
  error: Error | null;
  isError: boolean;
  isLoading: boolean;
};
