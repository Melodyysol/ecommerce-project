import { useEffect } from "react"
import Header from "../../components/Header"
import RenderHomePage from "./RenderHomePage"
import type { HomePageProp } from "../../types"

const HomePage = ({ theme, setTheme, products, isLoading, isError, error, carts }: HomePageProp) => {


  useEffect(() => {
    document.title = 'Home page'
  }, [])

  return (
    <main className="bg-base-100 text-base-content min-h-screen pb-15">
      <Header theme={theme} setTheme={setTheme} carts={carts} />
      <RenderHomePage
        products={products}
        error={error}
        isError={isError}
        isLoading={isLoading}
      />
    </main>
  )
}

export default HomePage
