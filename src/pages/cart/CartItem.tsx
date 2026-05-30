import type { Cart } from "../../types";
import { formatCurrency } from "../../utilitis/money";

const CartItem = ({
  carts,
  setCart,
}: {
  carts: Cart[];
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
}) => {
  const removeCart = (id: string, color: string) => {
    setCart((prev) =>
      prev.filter(
        (cart) => String(cart.id) !== id || String(cart.color) !== color,
      ),
    );
  };

  const updateCartQuantity = (
    id: string,
    color: string,
    newQuantity: number,
  ) => {
    setCart((prev) =>
      prev.map((cart) =>
        cart.id === id && cart.color === color
          ? { ...cart, quantity: newQuantity }
          : cart,
      ),
    );
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
    </div>
  );
};

export default CartItem;
