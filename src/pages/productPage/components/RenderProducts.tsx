import { CgMenu, CgMenuGridR } from "react-icons/cg";

import ProductsGrid from "../../../components/ProductsGrid";
import { useEffect, useReducer, useState } from "react";
import type { Products } from "../../../types/product";

const RenderProducts = ({ products }: { products: Products[] }) => {
  const [gridForm, setGridForm] = useState<"col" | "row">("col");

  const ITEMS_PER_PAGE = 8;
  const initialState = {
    currentPage: 1,
    paginatedItems: products.slice(0, ITEMS_PER_PAGE),
  };

  const totalPages = Math.max(1, Math.ceil(products.length / ITEMS_PER_PAGE));

  const pages = Array.from({ length: totalPages }, (_, i) => String(i + 1));

  // Update pageButton array based on totalPages
  const pageButton = ["prev", ...pages, "next"] as (string | "next" | "prev")[];

  const reducer = (
    state: typeof initialState,
    action: (typeof pageButton)[number] | "LOAD_PAGE",
  ) => {
    switch (action) {
      case "prev":
        return {
          ...state,
          currentPage: state.currentPage - 1,
          paginatedItems: products.slice(
            (state.currentPage - 2) * ITEMS_PER_PAGE,
            (state.currentPage - 1) * ITEMS_PER_PAGE,
          ),
        };
      case "next":
        return {
          ...state,
          currentPage: state.currentPage + 1,
          paginatedItems: products.slice(
            state.currentPage * ITEMS_PER_PAGE,
            (state.currentPage + 1) * ITEMS_PER_PAGE,
          ),
        };
      case `${Number(action)}`:
        return {
          ...state,
          currentPage: Number(action),
          paginatedItems: products.slice(
            (Number(action) - 1) * ITEMS_PER_PAGE,
            Number(action) * ITEMS_PER_PAGE,
          ),
        };
      case "LOAD_PAGE":
        return {
          ...state,
          currentPage: 1,
          paginatedItems: products.slice(0, ITEMS_PER_PAGE),
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: import.meta.env.DEV ? "auto" : "smooth",
    });
  }, [state.currentPage]);

  useEffect(() => {
    dispatch("LOAD_PAGE");
  }, [products]);

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
      <ProductsGrid products={state.paginatedItems} gridForm={gridForm} />

      {/* Change page */}
      <div className="text-base-content flex my-20 items-end justify-end">
        <div className="bg-base-200 rounded-xl">
          {pageButton.map((btn) => {
            const isCurrentPage = String(state.currentPage) === btn;
            const isPrevDisabled = state.currentPage === 1 && btn === "prev";
            const isNextDisabled =
              state.currentPage === totalPages && btn === "next";

            const isDisable = isPrevDisabled || isNextDisabled;

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

export default RenderProducts;
