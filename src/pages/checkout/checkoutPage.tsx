import { useEffect, useRef } from "react";
import Header from "../../components/Header";
import PaymentSummary from "../../components/PaymentSummary";
import type { CheckoutPageProps } from "../../types";
import { formatCurrency } from "../../utilitis/money";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { useNavigate } from "react-router-dom";

const CheckoutPage = ({
  theme,
  setTheme,
  carts,
  currentUser,
  setCurrentUser,
  isShipping,
  setOrder,
  setCart,
}: CheckoutPageProps) => {
  const navigate = useNavigate();

  dayjs.extend(advancedFormat);

  const date = dayjs();
  const orderedDate = date.format("hh:mm a - MMM Do, YYYY");

  useEffect(() => {
    document.title = "Checkout";
  }, []);

  const nameRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);

  let subtotal = 0;
  const shippingPrice = isShipping ? 500 : 0;
  const taxPrice = 1380;
  const pricesWithQuantity = carts.map((p) => p.price * p.quantity);

  for (let i = 0; i < pricesWithQuantity.length; i++) {
    const price = pricesWithQuantity[i];
    subtotal += price;
  }
  const totalOrderCost = subtotal + shippingPrice + taxPrice;
  const cost = formatCurrency(totalOrderCost);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const name = nameRef.current!.value;
    const address = addressRef.current!.value;

    setOrder((prev) => [
      ...prev,
      {
        id: Date.now(),
        name,
        address,
        products: carts.length,
        cost,
        date: orderedDate,
      },
    ]);
    navigate("/order");
    setCart([]);
  };

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
            {carts.length === 0 ? "your cart is empty" : "Place your order"}
          </h1>
          <hr className="border-base-300 mt-5" />
        </div>
      </section>
      {carts.length > 0 && (
        <section className="w-10/12 mx-auto lg:grid lg:item-start lg:grid-cols-2 lg:justify-between">
          <div className="mt-10 flex flex-col gap-5">
            <h4 className="text-xl text-base-content">Shipping Information</h4>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="fname" className="capitarize label block mb-2">
                  First Name
                </label>
                <input
                  ref={nameRef}
                  type="text"
                  id="fname"
                  className="input input-lg w-full bg-base-200"
                  required
                />
              </div>
              <div>
                <label htmlFor="fname" className="capitarize label block mb-2">
                  Adress
                </label>
                <input
                  ref={addressRef}
                  type="text"
                  id="address"
                  className="input input-lg w-full bg-base-200"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg uppercase btn-block"
              >
                Place an order
              </button>
            </form>
          </div>
          <PaymentSummary
            checkoutIsUsingPayment={true}
            carts={carts}
            isShipping={isShipping}
            currentUser={currentUser}
          />
        </section>
      )}
    </main>
  );
};

export default CheckoutPage;
