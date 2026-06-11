import { Link } from "react-router-dom";
import { formatCurrency } from "../utilitis/money";
import { useContext } from "react";
import { CartContext } from "../hooks/useCart";
import { UserContext } from "../hooks/user";

const PaymentSummary = ({
  isShipping,
  checkoutIsUsingPayment,
}: {
  isShipping: boolean;
  checkoutIsUsingPayment?: boolean;
}) => {
  const { carts } = useContext(CartContext);
  const currentUser = useContext(UserContext);

  if (!currentUser) {
    throw new Error("useUser must be used within UserProvider");
  }

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

      {currentUser.user?.userId === "demo" && (
        <Link to="/login" className="btn btn-primary btn-md uppercase">
          "Please login"
        </Link>
      )}

      {currentUser.user?.userId &&
        (checkoutIsUsingPayment === undefined || !checkoutIsUsingPayment) && (
          <Link
            to="/checkout"
            type="button"
            className="btn btn-primary btn-md uppercase"
          >
            Procede to checkout
          </Link>
        )}
    </div>
  );
};

export default PaymentSummary;
