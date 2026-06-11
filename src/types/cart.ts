import type { Cart, Products } from "./types";

export type CartAction =
  | { type: "LOAD_CART"; payload: Cart[] }
  | {
      type: "ADD_ITEM";
      payload: {
        filteredItem: Products;
        activeColor: string;
        quantity: number;
      };
    }
  | { type: "REMOVE_ITEM"; payload: { id: string; color: string } }
  | {
      type: "UPDATE_CART_QUANTITY";
      payload: { id: string; color: string; newQuantity: number };
    }
  | {
      type: "CLEAR_CART";
    };

export type CartContextType = {
  carts: Cart[];
  dispatch: React.ActionDispatch<[action: CartAction]>;
};
