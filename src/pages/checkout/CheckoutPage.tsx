import { useContext, useEffect } from "react";
import Header from "../../components/Header";
import PaymentSummary from "../../components/PaymentSummary";
import type { CheckoutPageProps } from "../../types/checkout";
import { formatCurrency } from "../../utilities/money";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import { useNavigate } from "react-router-dom";
import { useForm, type SubmitHandler } from "react-hook-form";
import { CartContext } from "../../hooks/useCart";
import { ToastContext } from "../../hooks/useToast";

type FormData = {
  name: string;
  address: string;
};

const CheckoutPage = ({ isShipping, setOrder }: CheckoutPageProps) => {
  const navigate = useNavigate();

  const { carts, dispatch } = useContext(CartContext);
  const toastContext = useContext(ToastContext);

  if (!toastContext) {
    throw new Error("toastContext must be provided");
  }

  dayjs.extend(advancedFormat);

  const date = dayjs();
  const orderedDate = date.format("hh:mm a - MMM Do, YYYY");

  useEffect(() => {
    document.title = "Checkout";
  }, []);

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

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormData>({
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const name = data.name;
    const address = data.address;

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
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <main>
      <Header />
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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5"
            >
              <div>
                <label htmlFor="fname" className="capitarize label block mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="fname"
                  className="input input-lg w-full bg-base-200"
                  {...register("name", {
                    required: "First name is require",
                    minLength: {
                      value: 3,
                      message: "First name must be at least 3 characters",
                    },
                  })}
                />
                {errors.name && (
                  <p className="text-error mt-2">{errors.name.message}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="capitarize label block mb-2"
                >
                  Adress
                </label>
                <input
                  type="text"
                  id="address"
                  className="input input-lg w-full bg-base-200"
                  {...register("address", {
                    required: "address is require",
                    minLength: {
                      value: 10,
                      message: "Address must be at least 10 characters",
                    },
                  })}
                />
                {errors.address && (
                  <p className="text-error mt-2">{errors.address.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={!isValid || isSubmitting}
                className={`btn btn-primary btn-lg uppercase btn-block ${isSubmitting && "btn-ghost"}`}
              >
                {isSubmitting ? "Submitting" : "Place an order"}
              </button>
            </form>
          </div>
          <PaymentSummary
            checkoutIsUsingPayment={true}
            isShipping={isShipping}
          />
        </section>
      )}
    </main>
  );
};

export default CheckoutPage;
