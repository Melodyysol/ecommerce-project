import { CgMenu, CgMenuGridR } from "react-icons/cg";

import ProductsGrid from "../../components/ProductsGrid";
import { useEffect, useReducer, useState } from "react";
import { type Products, type ProductsProp } from "../../types";

const pageButton: ("1" | "2" | "3" | "next" | "prev")[] = [
  "prev",
  "1",
  "2",
  "3",
  "next",
];

type paginationState = {
  currentPage: 1 | 2 | 3;
  paginatedItems: Products[];
};

type paginationAction =
  | "1"
  | "2"
  | "3"
  | "next"
  | "prev"
  | { type: "SET_PAGINATION"; payload: Products[] };

const Products = ({ products, isLoading, isError, error }: ProductsProp) => {
  const reducer = (state: paginationState, action: paginationAction) => {
    if (typeof action === "object" && action.type === "SET_PAGINATION") {
      return {
        currentPage: 1,
        paginatedItems: action.payload.slice(0, 10),
      };
    }
    let nextPage = state.currentPage;

    if (action === "next") {
      nextPage =
        state.currentPage < 3 ? ((state.currentPage + 1) as 1 | 2 | 3) : 3;
    } else if (action === "prev") {
      nextPage =
        state.currentPage > 1 ? ((state.currentPage - 1) as 1 | 2 | 3) : 1;
    } else {
      nextPage = parseInt(action) as 1 | 2 | 3;
    }

    const start = (nextPage - 1) * 10;
    const end = start + 10;

    return {
      currentPage: nextPage,
      paginatedItems: products.slice(start, end),
    };
  };

  const [gridForm, setGridForm] = useState<"col" | "row">("col");

  const [state, dispatch] = useReducer(reducer, {
    currentPage: 1,
    paginatedItems: [],
  });

  useEffect(() => {
    if (products && products.length > 0) {
      dispatch({ type: "SET_PAGINATION", payload: products });
    }
  }, [products]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [state.currentPage])

  const activeIcon = (colRow: "col" | "row") =>
    `${gridForm === colRow ? "btn btn-sm p-1 btn-primary rounded-full" : "btn btn-sm p-1 hover:bg-base-200 rounded-full bg-transparent"}`;

  return (
    <section className="w-10/12 mx-auto text-base-content pb-5">
      {/* Number of products and gid mode */}
      <div className="flex items-center justify-between">
        <h1 className="font-bold">
          {products.length === 0
            ? "No Product"
            : products.length === 1
              ? "1 Product"
              : products.length + " Products"}
        </h1>
        <div className="flex gap-3 items-center">
          <button
            onClick={() => setGridForm("col")}
            className={activeIcon("col")}
          >
            <CgMenuGridR className="text-2xl cursor-pointer" />
          </button>
          <button
            onClick={() => setGridForm("row")}
            className={activeIcon("row")}
          >
            <CgMenu className="text-2xl cursor-pointer" />
          </button>
        </div>
      </div>

      {/*  Products grid */}
      <ProductsGrid
        products={state.paginatedItems}
        error={error}
        isError={isError}
        isLoading={isLoading}
        gridForm={gridForm}
      />

      {/* Change page */}
      <div className="text-base-content flex my-20 items-end justify-end">
        <div className="bg-base-200 rounded-xl">
          {pageButton.map((btn) => {
            const isCurrentPage = String(state.currentPage) === btn;
            const isPrevDisabled = state.currentPage === 1 && btn === 'prev';
            const isNextDisabled = state.currentPage === 3 && btn === 'next';

            const isDisable = isPrevDisabled || isNextDisabled


            return (
              <button
                onClick={() => dispatch(btn)}
                key={btn}
                disabled={isDisable}
                className={`btn btn-sm md:btn-lg uppercase ${
                  isCurrentPage ? "btn-active font-bold" : "btn-ghost"
                } rounded-none ${btn === "prev" ? "rounded-l-xl" : ""} ${btn === "next" ? "rounded-r-xl" : ""}`}
              >
                {btn}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
