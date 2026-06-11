import { Link } from "react-router-dom";
import type { ProductsGridProp } from "../types/types";
import { formatCurrency } from "../utilitis/money";
import { useContext } from "react";
import { productContext } from "../hooks/useProduct";

const ProductsGrid = ({
  products,
  gridForm,
}: ProductsGridProp) => {

  const { error, isError, isLoading} = useContext(productContext)

  if (isError) {
    return <p className="text-2xl text-center mt-5">{error?.message}</p>;
  }

  if (isLoading) {
    return (
      <div className="w-full py-20 flex justify-center items-center">
        <p className="text-2xl font-bold animate-pulse text-base-content/70">
          Loading Catalog Inventory...
        </p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="w-full py-20 text-center border-2 border-dashed border-base-200 rounded-2xl mt-15">
        <p className="text-xl text-base-content/60 font-medium">
          No products match your active search filters.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`grid ${gridForm === "col" && "sm:grid-cols-2 md:grid-cols-3"} gap-5 items-center mt-15`}
    >
      {products.map((product) => (
        <Link
          key={product.id}
          to={`/item/${product.id}`}
          className={`bg-base-100 shadow hover:shadow-2xl rounded-2xl p-4 pb-6 ${gridForm === "row" && "grid md:grid-cols-[150px_1fr] gap-y-3 gap-x-6 items-start"}`}
        >
          <img
            src={product.image}
            alt={product.description}
            className={`${gridForm === "row" ? "h-30 w-30 md:w-40 md:h-35" : "h-64 md:h-48 w-full"} object-cover rounded-xl`}
          />

          <div
            className={`flex flex-col items-center gap-2 ${gridForm === "row" ? "items-start mt-0 md:flex-row md:justify-between md:px-10 md:w-full" : "mt-8"}`}
          >
            <div>
              <h2 className="capitalize text-base-content font-semibold text-xl">
                {product.name}
              </h2>

              {gridForm === "row" && (
                <h2 className="text-base-300">{product.company}</h2>
              )}
            </div>
            <span
              className={`${gridForm === "row" ? "text-base-content font-semibold" : "text-primary"}`}
            >
              {formatCurrency(product.price)}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductsGrid;
