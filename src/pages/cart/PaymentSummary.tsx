import { Link } from "react-router-dom";
import type { Cart } from "../../types";
import { formatCurrency } from "../../utilitis/money";

const PaymentSummary = ({
  carts,
  isShipping,
  currentUser,
}: {
  carts: Cart[];
  isShipping: boolean;
  currentUser: {username: string; email: string} | null;
}) => {
  let subtotal = 0;
  const shippingPrice = isShipping ? 500 : 0;
  const taxPrice = 1380;
  const pricesWithQuantity = carts.map((p) => p.price * p.quantity);

  for (let i = 0; i < pricesWithQuantity.length; i++) {
    const price = pricesWithQuantity[i];
    subtotal += price;
  }

  const totalOrderPrice = subtotal + shippingPrice + taxPrice;

  return (
    <div className="w-10/12 mx-auto py-15 md:py-10 flex flex-col gap-10">
      <div className="bg-base-200 px-10 pt-5 pb-10 md:pb-5 rounded-2xl">
        <p className="flex justify-between text-xs border-b border-base-300 py-3">
          <span>Subtotal</span>
          <span className="font-medium">{formatCurrency(subtotal)}</span>
        </p>

        <p className="flex justify-between text-xs border-b border-base-300 py-3">
          <span>Shipping</span>
          <span className="font-medium">{formatCurrency(shippingPrice)}</span>
        </p>

        <p className="flex justify-between text-xs border-b border-base-300 py-3">
          <span>Tax</span>
          <span className="font-medium">{formatCurrency(taxPrice)}</span>
        </p>

        <p className="flex justify-between text-sm py-2 mt-5">
          <span>Order Total</span>
          <span className="font-medium">{formatCurrency(totalOrderPrice)}</span>
        </p>
      </div>

      <Link to={(currentUser?.username && currentUser.username !== "demo user") ? "/checkout" : "/login"} className="btn btn-primary btn-md uppercase">
        {(currentUser?.username && currentUser.username !== "demo user") ? "Place an order" : "Please login"}
      </Link>
    </div>
  );
};

export default PaymentSummary;
