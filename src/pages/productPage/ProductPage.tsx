import { use, useEffect, useState } from "react";
import Header from "../../components/Header";
import FormGrid from "./FormGrid";
import RenderProducts from "./RenderProducts";
import type { FormGridData, ProductPageProps } from "../../types/types";
import { productContext } from "../../hooks/useProduct";

const ProductPage = ({
  setIsShipping,
  currentUser,
  setCurrentUser,
}: ProductPageProps) => {
  const [submitedData, setSubmitedData] = useState<FormGridData>({
    search: "",
    categoryRef: "",
    order: "",
    companyRef: "",
    range: "",
  });

  const {products, isLoading, isError, error} = use(productContext)

  const filteredProducts = products.filter((product) => {
    // 1. Case-insensitive search match
    const matchesSearch = product.name
      .toLowerCase()
      .includes(submitedData.search.toLowerCase());

    // 2. Clean conditional logic (No backticks!)
    const matchesCategory =
      submitedData.categoryRef === "all" ||
      product.category === submitedData.categoryRef;

    // 3. Clean conditional logic
    const matchesCompany =
      submitedData.companyRef === "all" ||
      product.company === submitedData.companyRef;

    // 4. Numeric range check
    const matchesPrice = product.price <= Number(submitedData.range) * 100;

    // Return true only if ALL conditions pass
    return (
      (matchesSearch && matchesCategory && matchesCompany && matchesPrice) ||
      (matchesSearch && matchesPrice)
    );
  });
  // let orderedProducts = [...filteredProducts]

  if (submitedData.order === "z-a") {
    filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
  } else if (submitedData.order === "a-z") {
    filteredProducts.toSorted((a, b) => a.name.localeCompare(b.name));
  } else if (submitedData.order === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (submitedData.order === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  useEffect(() => {
    document.title = "Products";
  }, []);

  return (
    <main>
      <Header
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      {isError ? (
        <div className="w-screen h-screen flex">
          <div className="m-auto flex flex-col items-center gap-5 w-4/5">
            <p className="text-center text-3xl font-bold">{error?.message}</p>
            <details className="cursor-pointer max-w-100">
              {error?.stack}
            </details>
          </div>
        </div>
      ) : isLoading ? (
        <div className="w-screen h-screen flex">
          <p className="text-center m-auto text-3xl font-bold animate-pulse">
            Loading...
          </p>
        </div>
      ) : (
        <>
          <FormGrid
            setSubmitedData={setSubmitedData}
            setIsShipping={setIsShipping}
          />
          <RenderProducts
            products={submitedData.search === "" ? products : filteredProducts}
          />
        </>
      )}
    </main>
  );
};

export default ProductPage;
