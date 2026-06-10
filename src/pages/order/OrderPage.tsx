import { useReducer, Fragment } from "react";
import Header from "../../components/Header";
import type { OrderPageProps } from "../../types/types";

const OrderPage = ({
  currentUser,
  setCurrentUser,
  orders,
}: OrderPageProps) => {

  const ITEMS_PER_PAGE = 10

  const totalPages = Math.round(orders.length / ITEMS_PER_PAGE);
  const pages = Array.from({ length: totalPages }, (_, i) => String(i + 1));

  const pageButton: ((typeof pages)[number] | "next" | "prev")[] = [
    "prev",
    ...pages,
    "next",
  ];

  const initialState = {
    currentPage: 1,
    paginatedOrders: orders.slice(0, ITEMS_PER_PAGE),
  };


  const reducer = (
    state: typeof initialState,
    action: (typeof pageButton)[number],
  ) => {
    switch (action) {
      case "prev": {
        if (state.currentPage <= 1) return state;
        const prevPage = state.currentPage - 1;
        return {
          ...state,
          currentPage: prevPage,
          paginatedOrders: orders.slice((prevPage - 1) * ITEMS_PER_PAGE, prevPage * ITEMS_PER_PAGE),
        };
      }
      case "next": {
        if (state.currentPage >= totalPages) return state;
        const nextPage = state.currentPage + 1;
        return {
          ...state,
          currentPage: nextPage,
          paginatedOrders: orders.slice((nextPage - 1) * ITEMS_PER_PAGE, nextPage * ITEMS_PER_PAGE),
        };
      }

      default: {
        const targetPage = Number(action);
        if (isNaN(targetPage)) return state;

        return {
          ...state,
          currentPage: targetPage,
          paginatedOrders: orders.slice((targetPage - 1) * ITEMS_PER_PAGE, targetPage * ITEMS_PER_PAGE),
        };
      }
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <main>
      <Header
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
      <section className="w-10/12 mx-auto my-10">
        <h4 className="text-base-content text-lg">
          Total orders : {orders.length}
        </h4>
        <div className="overflow-x-auto">
          {orders.length > 0 && (
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
                {state.paginatedOrders.map((orderDetail) => (
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
          )}
        </div>
        <div className="text-base-content flex my-20 items-end justify-end">
          <div className="bg-base-200 rounded-xl">
            {pageButton.map((btn) => {
              const current = state.currentPage;
              const btnNum = Number(btn);
              const isNavButton = btn === "prev" || btn === "next";
              const isCurrentPage = current === btnNum;

              // Show nav arrows, current page, and immediate neighbor numbers
              const showButton =
                isNavButton || isCurrentPage || Math.abs(current - btnNum) <= 1;

              // Flags to isolate single ellipsis positions
              const showLeftEllipsis = !isNavButton && btnNum === current - 2;
              const showRightEllipsis = !isNavButton && btnNum === current + 2;

              // Disable nav arrows at structural boundaries
              const isPrevDisabled = btn === "prev" && current === 1;
              const isNextDisabled = btn === "next" && current === totalPages;
              const isDisabled = isPrevDisabled || isNextDisabled;

              return (
                <Fragment key={btn}>
                  {showButton ? (
                    <button
                      onClick={() => !isDisabled && dispatch(btn)}
                      disabled={isDisabled}
                      className={`btn btn-sm md:btn-lg uppercase ${
                        isCurrentPage ? "btn-active font-bold" : "btn-ghost"
                      } rounded-none ${btn === "prev" ? "rounded-l-xl" : ""} ${
                        btn === "next" ? "rounded-r-xl" : ""
                      } ${isDisabled ? "btn-disabled opacity-50" : ""}`}
                    >
                      {btn}
                    </button>
                  ) : showLeftEllipsis || showRightEllipsis ? (
                    <button className="btn btn-sm md:btn-lg btn-disabled rounded-none pointer-events-none">
                      ...
                    </button>
                  ) : null}
                </Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default OrderPage;
