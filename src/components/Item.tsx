import { useEffect, useState } from "react"
import type { ThemeProp } from "../types"

import item1 from '../assets/item-1.jpeg'

import Header from "./Header"
import { Link } from "react-router-dom"

const colors: {
  id: number;
  backgroundColor: string;
  active: boolean
}[] = [{
  id: 1,
  backgroundColor: 'rgb(255,69,0)',
  active: true
}, {
  id: 2,
  backgroundColor: 'rgb(50,205,50)',
  active: false
}, {
  id: 3,
  backgroundColor: 'rgb(30,144,255)',
  active: false
}, {
  id: 4,
  backgroundColor: 'rgb(255,20,147)',
  active: false
}, {
  id: 5,
  backgroundColor: 'rgb(255,215,0)',
  active: false
}]

const Item = ({ theme, setTheme }: ThemeProp) => {

  const [activeColor, setActiveColor] = useState<{
  id: number;
  backgroundColor: string;
  active: boolean
}[]>(colors)

  useEffect(() => {
    document.title = 'Item'
  }, [])

  const toggleActive = (id: number) => setActiveColor(prev => 
    prev.map(col => 
      col.id === id ? {...col, active: true} : {...col, active: false}
    )
  )

  return (
    <main>
      <Header theme={theme} setTheme={setTheme} />
      <section className="w-10/12 mx-auto py-5 rounded-md mt-10">
        <div>
          <Link to="/" className="hover:underline">Home</Link>
          <span className="mx-2"> &gt;</span>
          <Link to="/products" className="hover:underline">Products</Link>
        </div>

        {/* image and details */}

        <div className="flex flex-col md:flex-row gap-10 my-10">
          <img src={item1} alt="item1" className="w-full md:w-1/2 h-96 object-cover rounded-md" />
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-semibold">Convertible Sleeper Sofa</h1>
            <h2 className="text-xl text-base-300 font-semibold">Modenza</h2>
            <p className="text-base-content text-2xl">$119.99</p>
            <p>Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge.</p>

            <div>
              <h3 className="text-lg font-semibold">Colors</h3>
              <div className="flex items-center gap-3 mt-2">

                {activeColor.map(col =>
                  <button key={col.id} onClick={() => toggleActive(col.id)} type="button" className={`w-6 h-6 badge rounded-full cursor-pointer ${col.active && 'border-2 border-primary'}`} style={{ backgroundColor: col.backgroundColor }}></button>
                )}
              </div>
            </div>

            <div>
              <label className="block">Amount</label>
              <select name="quntity" id="quantity" className="select select-lg select-secondary cursor-pointer mt-2">
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

            <button className="btn btn-secondary btn-lg w-max my-5 uppercase">Add to Bag</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Item
