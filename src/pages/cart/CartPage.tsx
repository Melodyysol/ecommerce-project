import { useEffect } from "react";

import Header from "../../components/Header";
import type { CartPageProps } from "../../types";
import CartItem from "./CartItem";
import PaymentSummary from "../../components/PaymentSummary";

const CartPage = ({
  theme,
  setTheme,
  carts,
  setCart,
  isShipping,
  currentUser,
  setCurrentUser,
}: CartPageProps) => {
  useEffect(() => {
    document.title = "Cart";
  }, []);

  return (
    <main>
      <Header
        theme={theme}
        setTheme={setTheme}
        carts={carts}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <section>
        <div className="w-10/12 mx-auto mt-20">
          <h1 className="capitalize text-3xl  text-base-content">
            {carts.length === 0 ? "your cart is empty" : "shopping cart"}
          </h1>
          <hr className="border-base-300 mt-5" />
        </div>
      </section>
      <section className="lg:w-10/12 lg:mx-auto lg:grid lg:item-start lg:grid-cols-[1fr_24rem] lg:justify-between">
        <CartItem carts={carts} setCart={setCart} />
        <PaymentSummary
          carts={carts}
          isShipping={isShipping}
          currentUser={currentUser}
        />
      </section>
    </main>
  );
};

export default CartPage;
