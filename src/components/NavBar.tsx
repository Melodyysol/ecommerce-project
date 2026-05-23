import { BsCart3 } from "react-icons/bs"
import { MdDarkMode } from "react-icons/md"
import { RiMenu3Fill } from "react-icons/ri"
import { NavLink } from "react-router-dom"

const NavBar = ({ showMenu, setShowMenu }: { showMenu: boolean; setShowMenu: (show: boolean) => void }) => {

  // const showMenu = () => {
  //   const menu = document.querySelector('.menu')
  //   menu?.classList.toggle('hidden')
  // }

  const activeLink = (({ isActive }: { isActive: boolean; }) => isActive ? 'bg-black text-gray-400 rounded-lg px-3 py-1 md:px-4 md:py-2 text-sm w-full block' : 'text-gray-700 rounded-lg px-3 py-1 text-sm md:px-4 md:py-2 hover:bg-gray-300 transition-all duration-500 w-full block')

  return (
    <nav className="w-screen bg-[hsla(216,100%,97%,1)] py-2">
      <div className="mx-auto w-10/12 flex justify-between">
        <div className="relative md:flex items-center gap-5 justify-between flex-1">
          <button className="md:hidden hover:bg-gray-300 rounded-md text-3xl px-4 py-3 cursor-pointer transition-all duration-500" onClick={(e) => {
            setShowMenu(true);
            e.stopPropagation();
  }}>
            <RiMenu3Fill />
          </button>
          <button className="hidden md:block bg-blue-500 px-5 py-2 rounded-xl hover:bg-blue-600 transition-all duration-500 uppercase text-3xl text-gray-200 font-bold cursor-pointer">C</button>
          <ul
          onClick={e => e.stopPropagation()}
          className={`capitalize absolute bg-[hsla(216,100%,97%,1)] p-2 top-17 rounded-2xl w-55 ${showMenu ? 'block' : 'hidden'} group-hover:block md:flex md:static md:w-auto md:mx-auto md:gap-2 md:items-center`}>
            <li><NavLink to='/' className={activeLink}>Home</NavLink></li>
            <li><NavLink to='/about' className={activeLink}>about</NavLink></li>
            <li><NavLink to='/products' className={activeLink}>products</NavLink></li>
            <li><NavLink to='/cart' className={activeLink}>cart</NavLink></li>
            {/* <li><NavLink to='/checkout' className={activeLink}>checkout</NavLink></li>
            <li><NavLink to='/order' className={activeLink}>orders</NavLink></li> */}
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          <MdDarkMode className="text-2xl" />
          <div className="relative">
            <div className="hover:bg-gray-300 rounded-full text-3xl p-2 cursor-pointer transition-all duration-500 text-gray-600">
              <BsCart3 />
            </div>

            <div className="absolute top-0 right-0 bg-blue-500 text-white rounded-full px-2.5 text-[12px]">0</div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
