import { useEffect } from "react"
import Header from "../../components/Header"
import FormGrid from "./FormGrid"
import Products from "./Products"
import type { ProductProps } from "../../types"

const ProductPage = ({ theme, setTheme, products, isLoading, isError, error }: ProductProps) => {

  useEffect(() => {
    document.title = 'Products'
  }, [])


  return (
    <main>
      <Header theme={theme!} setTheme={setTheme!} />
      {isError ? <div className="w-screen h-screen flex">
        <div className="m-auto flex flex-col items-center gap-5 w-4/5">
          <p className="text-center text-3xl font-bold">{error?.message}</p>
          <details className="cursor-pointer max-w-100">{error?.stack}</details>
        </div>
      </div> : isLoading ? <div className="w-screen h-screen flex">
        <p className="text-center m-auto text-3xl font-bold">Loading...</p>
      </div> :
        <>
          <FormGrid />
          <Products
            products={products}
            error={error}
            isError={isError}
            isLoading={isLoading}
          />
        </>}

    </main>
  )
}

export default ProductPage
