import { CgMenu, CgMenuGridR } from "react-icons/cg";

import ProductsGrid from "../../../components/ProductsGrid";
import { useEffect, useReducer, useState } from "react";
import type { Products } from "../../../types/product";

const pageButton: ("1" | "2" | "3" | "next" | "prev")[] = [
  "prev",
  "1",
  "2",
  "3",
  "next",
];


const RenderProducts = ({ products }: {products: Products[]}) => {

  const [gridForm, setGridForm] = useState<"col" | "row">("col");

  const initialState = {
    currentPage: 1,
    paginatedItems: products.slice(0, 10)
  }

  const reducer = (state: typeof initialState, action: typeof pageButton[number]) => {
    switch (action) {
      case "prev":
        return {
          ...state,
          currentPage: state.currentPage - 1,
          paginatedItems: products.slice((state.currentPage - 2) * 10, (state.currentPage - 1) * 10)
        }
      case "next":
        return {
          ...state,
          currentPage: state.currentPage + 1,
          paginatedItems: products.slice(state.currentPage * 10, (state.currentPage + 1) * 10)
        }
      case "1":
      case "2":
      case "3":
        return {
          ...state,
          currentPage: Number(action),
          paginatedItems: products.slice((Number(action) - 1) * 10, Number(action) * 10)
        }
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

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

export default RenderProducts;
