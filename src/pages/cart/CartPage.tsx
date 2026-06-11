import { useContext, useEffect } from "react";

import Header from "../../components/Header";
import CartItem from "./CartItem";
import PaymentSummary from "../../components/PaymentSummary";
import { CartContext } from "../../hooks/useCart";

const CartPage = ({ isShipping }: {isShipping: boolean}) => {
  useEffect(() => {
    document.title = "Cart";
  }, []);

  const { carts } = useContext(CartContext);

  return (
    <main>
      <Header />
      <section>
        <div className="w-10/12 mx-auto mt-20">
          <h1 className="capitalize text-3xl  text-base-content">
            {carts.length === 0 ? "your cart is empty" : "shopping cart"}
          </h1>
          <hr className="border-base-300 mt-5" />
        </div>
      </section>
      <section className="lg:w-10/12 lg:mx-auto lg:grid lg:item-start lg:grid-cols-[1fr_24rem] lg:justify-between">
        <CartItem />
        {carts.length > 0 && (
          <PaymentSummary isShipping={isShipping} />
        )}
      </section>
    </main>
  );
};

export default CartPage;
