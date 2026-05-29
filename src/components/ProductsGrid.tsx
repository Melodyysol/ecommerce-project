import { Link } from 'react-router-dom'
import type { ProductsGridProp } from '../types'
import { formatCurrency } from '../utilitis/money'


const ProductsGrid = ({ products, isError, isLoading, error, gridForm }: ProductsGridProp) => {

  if(isError) {
    return <p className='text-2xl text-center mt-5'>{error?.message}</p>
  }

  return (
    <div className={`grid ${gridForm === 'col' && 'sm:grid-cols-2 md:grid-cols-3'} gap-5 items-center mt-15`}>

      {isLoading 
      ?<p className='text-2xl text-center animate-pulse'>Loading...</p>  
      : products.map(product =>
        <Link key={product.id} to={`/item/${product.id}`} className={`bg-base-100 shadow hover:shadow-2xl rounded-2xl p-4 pb-6 ${gridForm === 'row' && 'grid md:grid-cols-[150px_1fr] gap-y-3 gap-x-6 items-start'}`}>
          <img src={product.image} alt={product.description} className={`${gridForm === 'row' ? 'h-30 w-30 md:w-40 md:h-35' : 'h-64 md:h-48 w-full'} object-cover rounded-xl`} />

          <div className={`flex flex-col items-center gap-2 ${gridForm === 'row' ? 'items-start mt-0 md:flex-row md:justify-between md:px-10 md:w-full' : 'mt-8'}`}>
            <div>
              <h2 className='capitalize text-base-content font-semibold text-xl'>{product.name}</h2>

              {gridForm === 'row' && <h2 className='text-base-300'>{product.company}</h2>}
            </div>
            <span className={`${gridForm === 'row' ? 'text-base-content font-semibold' : 'text-primary'}`}>{formatCurrency(product.price)}</span>
          </div>
        </Link>
      )}
    </div>
  )
}

export default ProductsGrid
