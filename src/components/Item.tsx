import { useEffect, useState } from "react";

import Header from "./Header";
import { Link, useParams } from "react-router-dom";
import type { ItemPageProp } from "../types";
import Toast from "./Toast";

const Item = ({
  theme,
  setTheme,
  products,
  carts,
  addToBag,
  setQuantity,
  quantity,
  currentUser,
  setCurrentUser,
  toasts,
  setToasts
}: ItemPageProp) => {
  const params = useParams<{ id: string }>();

  const itemId = params.id!;
  

  const filteredItem = products.find((item) => String(item.id) === itemId);

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const [activeColor, setActiveColor] = useState<string>(() => {
    if (filteredItem && filteredItem.colors && filteredItem.colors.length > 0) {
      return filteredItem.colors[0];
    }
    return "";
  });

  useEffect(() => {
    if (filteredItem) {
      document.title = `Item / ${filteredItem.name}`;
    } else {
      document.title = `Item / ${itemId}`;
    }
  }, [itemId, filteredItem]);

  if (!itemId) {
    return <div>Invalid data ID</div>;
  }

  if (!filteredItem) {
    return (
      <div className="w-screen h-screen flex bg-base-100">
        <p className="text-center m-auto text-3xl font-bold animate-pulse text-base-content">
          Loading Product Details...
        </p>
      </div>
    );
  }

  return (
    <main>
      <Header
        theme={theme}
        setTheme={setTheme!}
        carts={carts}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <section className="w-10/12 mx-auto py-5 rounded-md mt-10">
        <div>
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <span className="mx-2"> &gt;</span>
          <Link to="/products" className="hover:underline">
            Products
          </Link>
        </div>

        {/* image and details */}

        <div className="flex flex-col md:flex-row gap-10 my-10">
          <img
            src={filteredItem.image}
            alt={filteredItem.description}
            className="w-full md:w-1/2 h-96 object-cover rounded-md"
          />
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-semibold">{filteredItem.name}</h1>
            <h2 className="text-xl text-base-300 font-semibold">
              {filteredItem.company}
            </h2>
            <p className="text-base-content text-2xl">$119.99</p>
            <p>{filteredItem.description}</p>

            <div>
              <h3 className="text-lg font-semibold">Colors</h3>
              <div className="flex items-center gap-3 mt-2">
                {filteredItem.colors.map((col) => (
                  <button
                    key={col}
                    onClick={() => setActiveColor(col)}
                    type="button"
                    className={`w-6 h-6 badge rounded-full cursor-pointer ${activeColor === col && "border-2 border-primary"}`}
                    style={{ backgroundColor: col }}
                    aria-label={`Select color ${col}`}
                  ></button>
                ))}
              </div>
            </div>

            <div>
              <label className="block">Amount</label>
              <select
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                value={quantity}
                name="quntity"
                id="quantity"
                className="select select-lg select-secondary cursor-pointer mt-2"
              >
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => addToBag(filteredItem, activeColor)}
              className="btn btn-secondary btn-lg w-max my-5 uppercase"
            >
              Add to Bag
            </button>
          </div>
        </div>
      </section>
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
    </main>
  );
};

export default Item;
