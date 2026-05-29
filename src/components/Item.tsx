import { useEffect, useState } from "react"
import type { Cart, ItemPageProp } from "../types"

import Header from "./Header"
import { Link, useParams } from "react-router-dom"


const Item = ({ theme, setTheme, products, carts, setCart, setQuantity, quantity }: ItemPageProp) => {
  const [activeColor, setActiveColor] = useState<string>('')

  const params = useParams<{ id: string }>()

  const itemId = params.id!


  useEffect(() => {
    document.title = `Item-${itemId}`
  }, [itemId])

  if (!itemId) {
    return <div>Invalid data ID</div>
  }


  const filteredItem = products.find(item => String(item.id) === itemId);
  if (!filteredItem) {
    return <div className="w-screen h-screen flex">
      <p className="text-center m-auto text-3xl font-bold animate-pulse">Loading...</p>
    </div>
  }


  const addToBag = () => {
    const newCart: Cart = {
      id: filteredItem.id,
      name: filteredItem.name,
      image: filteredItem.image,
      color: activeColor,
      company: filteredItem.company,
      price: filteredItem.price,
      quantity: quantity,
    }
    setCart(prev =>
      [...prev, newCart]
    )
    localStorage.setItem(JSON.stringify(carts), 'cart')
  }

  return (
    <main>
      <Header theme={theme!} setTheme={setTheme!} carts={carts!} />
      <section className="w-10/12 mx-auto py-5 rounded-md mt-10">
        <div>
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-2"> &gt;</span>
          <Link to="/products" className="hover:underline">Products</Link>
        </div>

        {/* image and details */}

        <div className="flex flex-col md:flex-row gap-10 my-10">
          <img src={filteredItem.image} alt={filteredItem.description} className="w-full md:w-1/2 h-96 object-cover rounded-md" />
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-semibold">{filteredItem.name}</h1>
            <h2 className="text-xl text-base-300 font-semibold">{filteredItem.company}</h2>
            <p className="text-base-content text-2xl">$119.99</p>
            <p>{filteredItem.description}</p>

            <div>
              <h3 className="text-lg font-semibold">Colors</h3>
              <div className="flex items-center gap-3 mt-2">

                {filteredItem.colors.map(col =>
                  <button key={col}
                    onClick={() => setActiveColor(col)}
                    type="button" className={`w-6 h-6 badge rounded-full cursor-pointer ${activeColor === col && 'border-2 border-primary'}`} style={{ backgroundColor: col }}></button>
                )}
              </div>
            </div>

            <div>
              <label className="block">Amount</label>
              <select
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                value={quantity}
                name="quntity" id="quantity" className="select select-lg select-secondary cursor-pointer mt-2">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
              </select>
            </div>

            <button onClick={addToBag} className="btn btn-secondary btn-lg w-max my-5 uppercase">Add to Bag</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Item
