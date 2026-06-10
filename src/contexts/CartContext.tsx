import { useEffect, useReducer, type ReactNode } from "react";
import { CartContext, cartReducer } from "../hooks/useCart";

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, [], () => {
    const savedData = localStorage.getItem("cart");
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ carts: state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
