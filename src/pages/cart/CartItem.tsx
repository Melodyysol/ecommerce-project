import { use } from "react";
import Toast from "../../components/Toast";
import { formatCurrency } from "../../utilitis/money";
import { CartContext } from "../../hooks/useCart";

const CartItem = ({
  toasts,
  setToasts,
}: {
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
}) => {
  const {carts, dispatch} = use(CartContext)

  

  const removeCart = (id: string, color: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id, color } });
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    setToasts([
      {
        message: "Item removed from cart",
        type: "success",
        id: parseInt(crypto.randomUUID()),
      },
    ]);
  };

  const updateCartQuantity = (
    id: string,
    color: string,
    newQuantity: number,
  ) => {
    dispatch({
      type: "UPDATE_CART_QUANTITY",
      payload: { id, color, newQuantity },
    });
  };

  return (
    <div className="py-10 w-10/12 mx-auto grid gap-10">
      {carts.map((cart) => (
        <article
          key={`${cart.id}-${cart.color}`}
          className="md:grid md:grid-cols-[150px_150px_50px_1fr] gap-4 md:justify-between md:items-start"
        >
          <img
            src={cart.image}
            alt=""
            className="h-30 w-30 rounded-xl object-cover mb-3"
          />
          <div className=" flex flex-col gap-2">
            <h3 className="capitalize font-medium">{cart.name}</h3>
            <h4 className="text-base-300 font-medium">{cart.company}</h4>
            <p className="flex items-center gap-3">
              Color:{" "}
              <button
                type="button"
                className="badge badge-sm"
                style={{ backgroundColor: cart.color }}
              />
            </p>
          </div>
          <div className="pb-3 flex flex-col gap-2 items-start">
            <label htmlFor="amount">Amount</label>
            <select
              onChange={(e) =>
                updateCartQuantity(
                  cart.id,
                  cart.color,
                  parseInt(e.target.value),
                )
              }
              value={cart.quantity}
              name="amount"
              id={`amount-${cart.id}-${cart.color}`}
              className="select select-sm"
            >
              {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            <button
              onClick={() => removeCart(cart.id, cart.color)}
              className="text-primary hover:underline cursor-pointer"
            >
              remove
            </button>
          </div>

          <p className="font-medium md:text-end">
            {formatCurrency(cart.price * cart.quantity)}
          </p>
        </article>
      ))}

      <div className=" gap-4 flex flex-col fixed top-5 left-0 right-0 pointer-events-none">
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            message={toast.message}
            type={toast.type}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default CartItem;
