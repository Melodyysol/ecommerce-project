import type { Products } from "./product";

export type ProductPageProps = {
  setIsShipping: React.Dispatch<React.SetStateAction<boolean>>;
};

export type FormGridData = {
  search: string;
  categoryRef: string;
  order: string;
  companyRef: string;
  range: string;
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
