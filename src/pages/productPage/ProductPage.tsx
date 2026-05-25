import { useEffect } from "react"
import Header from "../../components/Header"
import type { ThemeProp } from "../../types"
import FormGrid from "./FormGrid"
import Products from "./Products"

const ProductPage = ({theme, setTheme}: ThemeProp) => {

  useEffect(() => {
    document.title = 'Products'
  }, [])

  return (
    <main>
      <Header theme={theme} setTheme={setTheme} />
      <FormGrid />
      <Products />
    </main>
  )
}

export default ProductPage
