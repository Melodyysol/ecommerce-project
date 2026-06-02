import Header from "../../components/Header";
import type { OrderPageProps } from "../../types";

const OrderPage = ({
  theme,
  setTheme,
  carts,
  currentUser,
  setCurrentUser,
  orders,
}: OrderPageProps) => {

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
            {orders.length === 0 ? "your cart is empty" : "your orders"}
          </h1>
          <hr className="border-base-300 mt-5" />
        </div>
      </section>
      <section className="w-10/12 mx-auto mt-10">
        <h4 className="text-base-content text-lg">
          Total orders : {orders.length}
        </h4>

        {orders.length > 0 && (
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Products</th>
                  <th>Cost</th>
                  <th className="hidden sm:block">Date</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((orderDetail) => (
                  <tr key={orderDetail.id}>
                    <td>{orderDetail.name}</td>
                    <td>{orderDetail.address}</td>
                    <td>{orderDetail.products}</td>
                    <td>{orderDetail.cost}</td>
                    <td className="hidden sm:block">{orderDetail.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
};

export default OrderPage;
