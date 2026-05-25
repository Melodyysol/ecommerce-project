import Item1 from '../assets/item-1.jpeg'
import { Link } from 'react-router-dom'


const ProductsGrid = ({ gridForm }: { gridForm: 'col' | 'row' }) => {
  return (
    <div className={`grid ${gridForm === 'col' && 'sm:grid-cols-2 md:grid-cols-3'} gap-5 items-center mt-15`}>
      <Link to='/item/1' className={`bg-base-100 shadow hover:shadow-2xl rounded-2xl p-4 pb-6 ${gridForm === 'row' && 'grid md:grid-cols-[150px_1fr] gap-y-3 gap-x-6 items-start'}`}>
          <img src={Item1} alt="item1" className={`${gridForm === 'row' ? 'h-30 w-30 md:w-40 md:h-35' : 'h-64 md:h-48 w-full'} object-cover rounded-xl`} />

        <div className={`flex flex-col items-center gap-2 ${gridForm === 'row' ? 'items-start mt-0 md:flex-row md:justify-between md:px-10 md:w-full' : 'mt-8'}`}>
          <div>
            <h2 className='capitalize text-base-content font-semibold text-xl'>Convertible Sleeper Sofa</h2>

            {gridForm === 'row' && <h2 className='text-base-300'>Modenza</h2>}
          </div>
          <span className={`${gridForm === 'row' ? 'text-base-content font-semibold' : 'text-primary'}`}>$119.99</span>
        </div>
      </Link>

      <Link to='/item/2' className={`bg-base-100 shadow hover:shadow-2xl rounded-2xl p-4 pb-6 ${gridForm === 'row' && 'grid md:grid-cols-[150px_1fr] gap-y-3 gap-x-6 items-start'}`}>
          <img src={Item1} alt="item1" className={`${gridForm === 'row' ? 'h-30 w-30 md:w-40 md:h-35' : 'h-64 md:h-48 w-full'} object-cover rounded-xl`} />

        <div className={`flex flex-col items-center gap-2 ${gridForm === 'row' ? 'items-start mt-0 md:flex-row md:justify-between md:px-10 md:w-full' : 'mt-8'}`}>
          <div>
            <h2 className='capitalize text-base-content font-semibold text-xl'>Convertible Sleeper Sofa</h2>

            {gridForm === 'row' && <h2 className='text-base-300'>Modenza</h2>}
          </div>
          <span className={`${gridForm === 'row' ? 'text-base-content font-semibold' : 'text-primary'}`}>$119.99</span>
        </div>
      </Link>
      <Link to='/item/3' className={`bg-base-100 shadow hover:shadow-2xl rounded-2xl p-4 pb-6 ${gridForm === 'row' && 'grid md:grid-cols-[150px_1fr] gap-y-3 gap-x-6 items-start'}`}>
          <img src={Item1} alt="item1" className={`${gridForm === 'row' ? 'h-30 w-30 md:w-40 md:h-35' : 'h-64 md:h-48 w-full'} object-cover rounded-xl`} />

        <div className={`flex flex-col items-center gap-2 ${gridForm === 'row' ? 'items-start mt-0 md:flex-row md:justify-between md:px-10 md:w-full' : 'mt-8'}`}>
          <div>
            <h2 className='capitalize text-base-content font-semibold text-xl'>Convertible Sleeper Sofa</h2>

            {gridForm === 'row' && <h2 className='text-base-300'>Modenza</h2>}
          </div>
          <span className={`${gridForm === 'row' ? 'text-base-content font-semibold' : 'text-primary'}`}>$119.99</span>
        </div>
      </Link>
      <Link to='/item/4' className={`bg-base-100 shadow hover:shadow-2xl rounded-2xl p-4 pb-6 ${gridForm === 'row' && 'grid md:grid-cols-[150px_1fr] gap-y-3 gap-x-6 items-start'}`}>
          <img src={Item1} alt="item1" className={`${gridForm === 'row' ? 'h-30 w-30 md:w-40 md:h-35' : 'h-64 md:h-48 w-full'} object-cover rounded-xl`} />

        <div className={`flex flex-col items-center gap-2 ${gridForm === 'row' ? 'items-start mt-0 md:flex-row md:justify-between md:px-10 md:w-full' : 'mt-8'}`}>
          <div>
            <h2 className='capitalize text-base-content font-semibold text-xl'>Convertible Sleeper Sofa</h2>

            {gridForm === 'row' && <h2 className='text-base-300'>Modenza</h2>}
          </div>
          <span className={`${gridForm === 'row' ? 'text-base-content font-semibold' : 'text-primary'}`}>$119.99</span>
        </div>
      </Link>
      <Link to='/item/5' className={`bg-base-100 shadow hover:shadow-2xl rounded-2xl p-4 pb-6 ${gridForm === 'row' && 'grid md:grid-cols-[150px_1fr] gap-y-3 gap-x-6 items-start'}`}>
          <img src={Item1} alt="item1" className={`${gridForm === 'row' ? 'h-30 w-30 md:w-40 md:h-35' : 'h-64 md:h-48 w-full'} object-cover rounded-xl`} />

        <div className={`flex flex-col items-center gap-2 ${gridForm === 'row' ? 'items-start mt-0 md:flex-row md:justify-between md:px-10 md:w-full' : 'mt-8'}`}>
          <div>
            <h2 className='capitalize text-base-content font-semibold text-xl'>Convertible Sleeper Sofa</h2>

            {gridForm === 'row' && <h2 className='text-base-300'>Modenza</h2>}
          </div>
          <span className={`${gridForm === 'row' ? 'text-base-content font-semibold' : 'text-primary'}`}>$119.99</span>
        </div>
      </Link>
      <Link to='/item/6' className={`bg-base-100 shadow hover:shadow-2xl rounded-2xl p-4 pb-6 ${gridForm === 'row' && 'grid md:grid-cols-[150px_1fr] gap-y-3 gap-x-6 items-start'}`}>
          <img src={Item1} alt="item1" className={`${gridForm === 'row' ? 'h-30 w-30 md:w-40 md:h-35' : 'h-64 md:h-48 w-full'} object-cover rounded-xl`} />

        <div className={`flex flex-col items-center gap-2 ${gridForm === 'row' ? 'items-start mt-0 md:flex-row md:justify-between md:px-10 md:w-full' : 'mt-8'}`}>
          <div>
            <h2 className='capitalize text-base-content font-semibold text-xl'>Convertible Sleeper Sofa</h2>

            {gridForm === 'row' && <h2 className='text-base-300'>Modenza</h2>}
          </div>
          <span className={`${gridForm === 'row' ? 'text-base-content font-semibold' : 'text-primary'}`}>$119.99</span>
        </div>
      </Link>
      <Link to='/item/7' className={`bg-base-100 shadow hover:shadow-2xl rounded-2xl p-4 pb-6 ${gridForm === 'row' && 'grid md:grid-cols-[150px_1fr] gap-y-3 gap-x-6 items-start'}`}>
          <img src={Item1} alt="item1" className={`${gridForm === 'row' ? 'h-30 w-30 md:w-40 md:h-35' : 'h-64 md:h-48 w-full'} object-cover rounded-xl`} />

        <div className={`flex flex-col items-center gap-2 ${gridForm === 'row' ? 'items-start mt-0 md:flex-row md:justify-between md:px-10 md:w-full' : 'mt-8'}`}>
          <div>
            <h2 className='capitalize text-base-content font-semibold text-xl'>Convertible Sleeper Sofa</h2>

            {gridForm === 'row' && <h2 className='text-base-300'>Modenza</h2>}
          </div>
          <span className={`${gridForm === 'row' ? 'text-base-content font-semibold' : 'text-primary'}`}>$119.99</span>
        </div>
      </Link>
      <Link to='/item/8' className={`bg-base-100 shadow hover:shadow-2xl rounded-2xl p-4 pb-6 ${gridForm === 'row' && 'grid md:grid-cols-[150px_1fr] gap-y-3 gap-x-6 items-start'}`}>
          <img src={Item1} alt="item1" className={`${gridForm === 'row' ? 'h-30 w-30 md:w-40 md:h-35' : 'h-64 md:h-48 w-full'} object-cover rounded-xl`} />

        <div className={`flex flex-col items-center gap-2 ${gridForm === 'row' ? 'items-start mt-0 md:flex-row md:justify-between md:px-10 md:w-full' : 'mt-8'}`}>
          <div>
            <h2 className='capitalize text-base-content font-semibold text-xl'>Convertible Sleeper Sofa</h2>

            {gridForm === 'row' && <h2 className='text-base-300'>Modenza</h2>}
          </div>
          <span className={`${gridForm === 'row' ? 'text-base-content font-semibold' : 'text-primary'}`}>$119.99</span>
        </div>
      </Link>
      <Link to='/item/9' className={`bg-base-100 shadow hover:shadow-2xl rounded-2xl p-4 pb-6 ${gridForm === 'row' && 'grid md:grid-cols-[150px_1fr] gap-y-3 gap-x-6 items-start'}`}>
          <img src={Item1} alt="item1" className={`${gridForm === 'row' ? 'h-30 w-30 md:w-40 md:h-35' : 'h-64 md:h-48 w-full'} object-cover rounded-xl`} />

        <div className={`flex flex-col items-center gap-2 ${gridForm === 'row' ? 'items-start mt-0 md:flex-row md:justify-between md:px-10 md:w-full' : 'mt-8'}`}>
          <div>
            <h2 className='capitalize text-base-content font-semibold text-xl'>Convertible Sleeper Sofa</h2>

            {gridForm === 'row' && <h2 className='text-base-300'>Modenza</h2>}
          </div>
          <span className={`${gridForm === 'row' ? 'text-base-content font-semibold' : 'text-primary'}`}>$119.99</span>
        </div>
      </Link>
      <Link to='/item/10' className={`bg-base-100 shadow hover:shadow-2xl rounded-2xl p-4 pb-6 ${gridForm === 'row' && 'grid md:grid-cols-[150px_1fr] gap-y-3 gap-x-6 items-start'}`}>
          <img src={Item1} alt="item1" className={`${gridForm === 'row' ? 'h-30 w-30 md:w-40 md:h-35' : 'h-64 md:h-48 w-full'} object-cover rounded-xl`} />

        <div className={`flex flex-col items-center gap-2 ${gridForm === 'row' ? 'items-start mt-0 md:flex-row md:justify-between md:px-10 md:w-full' : 'mt-8'}`}>
          <div>
            <h2 className='capitalize text-base-content font-semibold text-xl'>Convertible Sleeper Sofa</h2>

            {gridForm === 'row' && <h2 className='text-base-300'>Modenza</h2>}
          </div>
          <span className={`${gridForm === 'row' ? 'text-base-content font-semibold' : 'text-primary'}`}>$119.99</span>
        </div>
      </Link>
      <Link to='/item/11' className={`bg-base-100 shadow hover:shadow-2xl rounded-2xl p-4 pb-6 ${gridForm === 'row' && 'grid md:grid-cols-[150px_1fr] gap-y-3 gap-x-6 items-start'}`}>
          <img src={Item1} alt="item1" className={`${gridForm === 'row' ? 'h-30 w-30 md:w-40 md:h-35' : 'h-64 md:h-48 w-full'} object-cover rounded-xl`} />

        <div className={`flex flex-col items-center gap-2 ${gridForm === 'row' ? 'items-start mt-0 md:flex-row md:justify-between md:px-10 md:w-full' : 'mt-8'}`}>
          <div>
            <h2 className='capitalize text-base-content font-semibold text-xl'>Convertible Sleeper Sofa</h2>

            {gridForm === 'row' && <h2 className='text-base-300'>Modenza</h2>}
          </div>
          <span className={`${gridForm === 'row' ? 'text-base-content font-semibold' : 'text-primary'}`}>$119.99</span>
        </div>
      </Link>
    </div>
  )
}

export default ProductsGrid
