import { useEffect } from "react"

import Header from "../../components/Header"
import type { CartPageProp } from "../../types"
import CartItem from "./CartItem"
import PaymentSummary from "./PaymentSummary"

const CartPage = ({ theme, setTheme, carts, setCart, setQuantity }: CartPageProp) => {

  useEffect(() => {
    document.title = 'Cart'
  }, [])

  return (
    <main>
      <Header theme={theme} setTheme={setTheme} carts={carts!} />
      <section>
        <div className="w-10/12 mx-auto mt-20">
          <h1 className="capitalize text-3xl  text-base-content">{carts.length === 0 ? 'your cart is empty' : 'shopping cart'}</h1>
          <hr className="border-base-300 mt-5" />
        </div>
      </section>
      <section className="lg:w-10/12 lg:mx-auto lg:grid lg:item-start lg:grid-cols-[1fr_24rem] lg:justify-between">
        <CartItem carts={carts} setCart={setCart} setQuantity={setQuantity} />
        <PaymentSummary />
      </section>

    </main>
  )
}

export default CartPage
