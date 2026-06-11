import type { ReactNode } from "react";
import { productContext } from "../hooks/useProduct";
import { fetchProducts } from "../services/productApi";
import { useQuery } from "@tanstack/react-query";

const ProductProvider = ({ children }: { children: ReactNode }) => {
  const {
    data: products = [],
    error,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ["product"],
    queryFn: fetchProducts,
  });
  return (
    <productContext.Provider value={{ products, error, isError, isLoading }}>
      {children}
    </productContext.Provider>
  );
};

export default ProductProvider;
