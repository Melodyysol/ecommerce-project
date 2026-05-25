import { CgMenu, CgMenuGridR } from "react-icons/cg"

import ProductsGrid from "../../components/ProductsGrid"
import { useState } from "react"

const Products = () => {

  const [gridForm, setGridForm] = useState<'col' | 'row'>('col')

  const activeIcon = (colRow: 'col' | 'row') => `${gridForm === colRow && 'btn btn-sm p-1 btn-primary rounded-full'}`

  return (
    <section className="w-10/12 mx-auto text-base-content pb-5">
      {/* Number of products and gid mode */}
      <div className="flex items-center justify-between">
        <h1 className="font-bold">21 Products</h1>
        <div className="flex gap-3 items-center">
          <button onClick={() => setGridForm('col')} className={activeIcon('col')}>
            <CgMenuGridR className="text-2xl cursor-pointer" />
          </button>
          <button onClick={() => setGridForm('row')} className={activeIcon('row')}>
            <CgMenu className="text-2xl cursor-pointer" />
          </button>
        </div>
      </div>


      {/*  Products grid */}
      <ProductsGrid gridForm={gridForm} />

      {/* Change page */}
      <div className="text-base-content flex my-20 items-end justify-end">
        <div className="bg-base-200 rounded-xl">
          <button className="btn btn-sm md:btn-md">PREV</button>
          <button className="btn btn-sm md:btn-md ">1</button>
          <button className="btn btn-sm btn-active md:btn-md ">2</button>
          <button className="btn btn-sm md:btn-md ">3</button>
          <button className="btn btn-sm md:btn-md ">NEXT</button>
        </div>
      </div>

    </section>
  )
}

export default Products
