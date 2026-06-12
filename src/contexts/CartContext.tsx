import { useContext, useEffect, useReducer, useRef, type ReactNode } from "react";
import { CartContext, cartReducer } from "../hooks/useCart";
import { UserContext } from "../hooks/useUser";

export const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }
  const userId = context.user?.userId ?? "demo";
  const previousUserId = useRef(userId);

  const [state, dispatch] = useReducer(cartReducer, [], () => {
    const savedData = localStorage.getItem(`cart_${userId}`);
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    if (previousUserId.current !== userId) {
      previousUserId.current = userId;
      return;
    }

    localStorage.setItem(`cart_${userId}`, JSON.stringify(state));
  }, [state, userId]);

  useEffect(() => {
    const savedCart = localStorage.getItem(`cart_${userId}`);
    dispatch({
      type: "LOAD_CART",
      payload: savedCart ? JSON.parse(savedCart) : [],
    });
  }, [userId]);

  return (
    <CartContext.Provider value={{ carts: state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
