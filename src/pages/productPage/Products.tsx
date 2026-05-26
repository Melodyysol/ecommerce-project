import { CgMenu, CgMenuGridR } from "react-icons/cg"

import ProductsGrid from "../../components/ProductsGrid"
import { useState } from "react"
import type { ProductProps } from "../../types"

const Products = ({ products, isLoading, isError, error }: ProductProps) => {

  const [gridForm, setGridForm] = useState<'col' | 'row'>('col')

  const activeIcon = (colRow: 'col' | 'row') => `${gridForm === colRow ? 'btn btn-sm p-1 btn-primary rounded-full' : 'btn btn-sm p-1 hover:bg-base-200 rounded-full bg-transparent'}`

  

  return (
    <section className="w-10/12 mx-auto text-base-content pb-5">
      {/* Number of products and gid mode */}
      <div className="flex items-center justify-between">
        <h1 className="font-bold">{products.length === 0 
        ? 'No Product'
        : products.length === 1 ? '1 Product'
        : products.length + ' Products'}</h1>
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
      <ProductsGrid
        products={products}
        error={error}
        isError={isError}
        isLoading={isLoading}
        gridForm={gridForm}
      />

      {/* Change page */}
      <div className="text-base-content flex my-20 items-end justify-end">
        <div className="bg-base-200 rounded-xl">
          <button className="btn btn-sm md:btn-lg rounded-r-none">PREV</button>
          <button className="btn btn-sm md:btn-lg btn-active rounded-none">1</button>
          <button className="btn btn-sm md:btn-lg rounded-none">2</button>
          <button className="btn btn-sm md:btn-lg rounded-none">3</button>
          <button className="btn btn-sm md:btn-lg rounded-l-none">NEXT</button>
        </div>
      </div>

    </section>
  )
}

export default Products
