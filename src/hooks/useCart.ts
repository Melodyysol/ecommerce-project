import { createContext } from "react";
import type { CartAction, CartContextType } from "../types/cart";
import type { Cart } from "../types/types";

export const CartContext = createContext<CartContextType>({
  carts: [],
  dispatch: (action: CartAction) => {
    console.log(action);
  },
});

export const cartReducer = (state: Cart[], action: CartAction) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const newCart: Cart = {
        id: action.payload.filteredItem.id,
        name: action.payload.filteredItem.name,
        image: action.payload.filteredItem.image,
        color: action.payload.activeColor,
        company: action.payload.filteredItem.company,
        price: action.payload.filteredItem.price,
        quantity: action.payload.quantity,
      };

      const itemAlreadyExist = state.some(
        (prev) => prev.id === newCart.id && prev.color === newCart.color,
      );

      if (itemAlreadyExist) {
        return state.map((cart) =>
          cart.id === newCart.id && cart.color === newCart.color
            ? { ...cart, quantity: cart.quantity + newCart.quantity }
            : cart,
        );
      }

      return [...state, newCart];
    }

    case "REMOVE_ITEM":
      return state.filter(
        (cart) =>
          cart.id !== action.payload.id || cart.color !== action.payload.color,
      );

    case "UPDATE_CART_QUANTITY":
      return state.map((cart) =>
        cart.id === action.payload.id && cart.color === action.payload.color
          ? {
              ...cart,
              quantity: action.payload.newQuantity,
            }
          : cart,
      );
    case "CLEAR_CART":
      return [];

    default:
      return state;
  }
};
