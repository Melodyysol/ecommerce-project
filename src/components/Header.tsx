import { Link } from "react-router-dom";
import NavBar from "./NavBar"
import type { ThemeProp } from "../types";

const Header = ({ theme, setTheme }: ThemeProp) => {
  return (
    <>
      <header className="bg-neutral text-neutral-content p-2 flex">
        <div className="flex mx-auto justify-center md:justify-end w-4/5 items-center gap-4">
          <h1 className="hidden text-[12px] sm:text-sm text-gray-400">Hello! Melodyysol</h1>
          <button className="hidden hover:bg-blue-700 hover:text-white cursor-pointer font-bold text-blue-500 border border-blue-500 py-0.5 px-2 rounded-lg text-[12px] sm:text-sm transition-all duration-500">
            LOGOUT
          </button>
          <Link to="/signin" className="text-[12px] sm:text-[14px] text-gray-300 cursor-pointer hover:underline transition-all duration-500">
            Sign in/Guest
          </Link>
          <Link to="/register" className="text-[12px] sm:text-[14px] text-gray-300 cursor-pointer hover:underline transition-all duration-500">
            Create account
          </Link>
        </div>
      </header>
      <NavBar theme={theme} setTheme={setTheme} />
    </>
  )
}

export default Header
