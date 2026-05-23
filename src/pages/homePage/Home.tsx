// import projects from "../../data/projects"
import Item1 from '../../assets/item-1.jpeg'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <section className="w-10/12 mx-auto my-15 flex flex-col gap-15 items-start">
      <div className='flex justify-between items-center w-full gap-20'>
        <div className="flex flex-col gap-10 items-start">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-700">We are changing the way people shop</h1>
          <p className="text-gray-600">Discover a wide range of products at unbeatable prices. Shop now and enjoy exclusive deals and discounts on your favorite items. Experience seamless shopping with fast delivery and excellent customer service.</p>
          <button className="bg-blue-500 text-white p-4 rounded-md hover:bg-blue-600 transition-all duration-500 uppercase text-sm cursor-pointer">Our Products</button>
        </div>

        <div className='hidden md:flex bg-gray-800 w-400 h-120 p-4 rounded-2xl overflow-scroll gap-5'>
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
          <h2 className="text-3xl font-semibold text-gray-800">Featured Products</h2>
          <hr className="border-gray-300 mt-5" />
        </div>

        <div className="grid md:grid-cols-3 gap-5 items-center mt-15">
          <Link to='' className="bg-white shadow hover:shadow-2xl rounded-2xl p-4 pb-6">
            <img src={Item1} alt="item1" className='h-64 md:h-48 object-cover w-full rounded-xl' />
            <div className='flex flex-col items-center gap-2 mt-8'>
              <h2 className='capitalize text-gray-700 font-bold text-xl'>Convertible Sleeper Sofa</h2>
              <span className='text-blue-900'>$119.99</span>
            </div>
          </Link>
          <Link to='' className="bg-white shadow hover:shadow-2xl rounded-2xl p-4 pb-6">
            <img src={Item1} alt="item1" className='h-64 md:h-48 object-cover w-full rounded-xl' />
            <div className='flex flex-col items-center gap-2 mt-8'>
              <h2 className='capitalize text-gray-700 font-bold text-xl'>Convertible Sleeper Sofa</h2>
              <span className='text-blue-900'>$119.99</span>
            </div>
          </Link>
          <Link to='' className="bg-white shadow hover:shadow-2xl rounded-2xl p-4 pb-6">
            <img src={Item1} alt="item1" className='h-64 md:h-48 object-cover w-full rounded-xl' />
            <div className='flex flex-col items-center gap-2 mt-8'>
              <h2 className='capitalize text-gray-700 font-bold text-xl'>Convertible Sleeper Sofa</h2>
              <span className='text-blue-900'>$119.99</span>
            </div>
          </Link>
          <Link to='' className="bg-white shadow hover:shadow-2xl rounded-2xl p-4 pb-6">
            <img src={Item1} alt="item1" className='h-64 md:h-48 object-cover w-full rounded-xl' />
            <div className='flex flex-col items-center gap-2 mt-8'>
              <h2 className='capitalize text-gray-700 font-bold text-xl'>Convertible Sleeper Sofa</h2>
              <span className='text-blue-900'>$119.99</span>
            </div>
          </Link>

          <Link to='' className="bg-white shadow hover:shadow-2xl rounded-2xl p-4 pb-6">
            <img src={Item1} alt="item1" className='h-64 md:h-48 object-cover w-full rounded-xl' />
            <div className='flex flex-col items-center gap-2 mt-8'>
              <h2 className='capitalize text-gray-700 font-bold text-xl'>Convertible Sleeper Sofa</h2>
              <span className='text-blue-900'>$119.99</span>
            </div>
          </Link>
          <Link to='' className="bg-white shadow hover:shadow-2xl rounded-2xl p-4 pb-6">
            <img src={Item1} alt="item1" className='h-64 md:h-48 object-cover w-full rounded-xl' />
            <div className='flex flex-col items-center gap-2 mt-8'>
              <h2 className='capitalize text-gray-700 font-bold text-xl'>Convertible Sleeper Sofa</h2>
              <span className='text-blue-900'>$119.99</span>
            </div>
          </Link>
          <Link to='' className="bg-white shadow hover:shadow-2xl rounded-2xl p-4 pb-6">
            <img src={Item1} alt="item1" className='h-64 md:h-48 object-cover w-full rounded-xl' />
            <div className='flex flex-col items-center gap-2 mt-8'>
              <h2 className='capitalize text-gray-700 font-bold text-xl'>Convertible Sleeper Sofa</h2>
              <span className='text-blue-900'>$119.99</span>
            </div>
          </Link>
        </div>

      </div>
    </section>
  )
}

export default Home
