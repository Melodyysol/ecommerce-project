// import projects from "../../data/projects"
import Item1 from '../../assets/item-1.jpeg'
import { Link } from 'react-router-dom'
import ProductsGrid from '../../components/ProductsGrid'


const RenderHomePage = () => {
  return (
    <section className="w-10/12 mx-auto mt-15 flex flex-col gap-15 items-start">
      <div className='flex justify-between items-center w-full gap-20'>
        <div className="flex flex-col gap-10 items-start">
          <h1 className="text-4xl md:text-6xl font-bold text-base-content">We are changing the way people shop</h1>
          <p className="text-base-content">Discover a wide range of products at unbeatable prices. Shop now and enjoy exclusive deals and discounts on your favorite items. Experience seamless shopping with fast delivery and excellent customer service.</p>
          <Link to='/products' className="btn btn-primary transition-all duration-500 uppercase text-sm cursor-pointer">Our Products</Link>
        </div>

        <div className='hidden md:flex bg-neutral w-400 h-120 p-4 rounded-2xl overflow-scroll gap-5'>
          <img src={Item1} alt="" className='rounded-2xl h-full object-cover w-[20rem]' />
          <img src={Item1} alt="" className='rounded-2xl h-full object-cover w-[20rem]' />
          <img src={Item1} alt="" className='rounded-2xl h-full object-cover w-[20rem]' />
          <img src={Item1} alt="" className='rounded-2xl h-full object-cover w-[20rem]' />
          <img src={Item1} alt="" className='rounded-2xl h-full object-cover w-[20rem]' />
          <img src={Item1} alt="" className='rounded-2xl h-full object-cover w-[20rem]' />
          <img src={Item1} alt="" className='rounded-2xl h-full object-cover w-[20rem]' />
          <img src={Item1} alt="" className='rounded-2xl h-full object-cover w-[20rem]' />
          <img src={Item1} alt="" className='rounded-2xl h-full object-cover w-[20rem]' />
          <img src={Item1} alt="" className='rounded-2xl h-full object-cover w-[20rem]' />
          <img src={Item1} alt="" className='rounded-2xl h-full object-cover w-[20rem]' />
          <img src={Item1} alt="" className='rounded-2xl h-full object-cover w-[20rem]' />
        </div>
      </div>


      <div className="w-full">
        <div>
          <h2 className="text-3xl font-semibold text-base-content">Featured Products</h2>
          <hr className="border-neutral-200 mt-5" />
        </div>

        {/* Products grid */}
        <ProductsGrid gridForm={'col'} />

      </div>
    </section>
  )
}

export default RenderHomePage
