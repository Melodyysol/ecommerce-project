import { useEffect } from "react"

import Header from "../components/Header"
import type { ThemeProp } from "../types"

const CartPage = ({ theme, setTheme }: ThemeProp) => {

  useEffect(() => {
    document.title = 'Cart'
  }, [])

  return (
    <main>
      <Header theme={theme} setTheme={setTheme} />
      <section>
        <div className="w-10/12 mx-auto mt-20">
          <h1 className="capitalize text-3xl  text-base-content">your cart is empty</h1>
          <hr className="border-base-300 mt-5" />
        </div>
      </section>
    </main>
  )
}

export default CartPage
