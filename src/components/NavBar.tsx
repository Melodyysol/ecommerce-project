import { useEffect, useState, useContext } from "react";

import { BsCart3 } from "react-icons/bs";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../hooks/useCart";
import { ThemeContext } from "../hooks/useTheme";
import { UserContext } from "../hooks/useUser";

const NavBar = () => {
  const { carts } = useContext(CartContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const currentUser = useContext(UserContext);

  const [showMenu, setShowMenu] = useState<boolean>(false);

  let totalQuantity = 0;

  useEffect(() => {
    const handleClick = () => setShowMenu(false);

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  if (!currentUser) {
    throw new Error("useUser must be used within UserProvider");
  }

  carts.map((cart) => {
    totalQuantity = totalQuantity + cart.quantity;
  });

  const activeLink = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? `bg-neutral text-neutral-content rounded-lg px-3 py-1 md:px-4 md:py-2 text-sm w-full block`
      : `text-base-content hover:bg-base-200 md:hover:bg-base-300 rounded-lg px-3 py-1 text-sm md:px-4 md:py-2 transition-all duration-500 w-full block`;

  return (
    <nav className="w-screen bg-base-200 py-2">
      <div className="mx-auto w-10/12 flex justify-between">
        <div className="relative md:flex items-center gap-5 justify-between flex-1">
          <button
            className={`md:hidden hover:bg-base-300 rounded-md text-3xl px-4 py-3 cursor-pointer transition-all duration-500`}
            onClick={(e) => {
              setShowMenu(true);
              e.stopPropagation();
            }}
          >
            <RiMenu3Fill />
          </button>
          <Link
            to="/"
            className="hidden md:block bg-primary py-2 px-4 rounded-xl text-base-300 transition-all duration-500 uppercase text-3xl font-bold hover:opacity-80"
          >
            C
          </Link>
          <ul
            onClick={(e) => e.stopPropagation()}
            className={`capitalize absolute p-2 top-17 rounded-2xl w-55 ${showMenu ? "block" : "hidden"} group-hover:block md:flex md:static md:w-auto md:mx-auto md:gap-2 md:items-center bg-base-300 md:bg-transparent`}
          >
            <li>
              <NavLink to="/" className={activeLink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={activeLink}>
                about
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={activeLink}>
                products
              </NavLink>
            </li>
            <li>
              <NavLink to="/cart" className={activeLink}>
                cart
              </NavLink>
            </li>
            {currentUser.user && currentUser.user.username !== "demo" && (
              <>
                <li>
                  <NavLink to="/checkout" className={activeLink}>
                    checkout
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/order" className={activeLink}>
                    orders
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="flex gap-5 items-center">
          <button
            onClick={toggleTheme}
            className="cursor-pointer text-xl md:text-2xl"
          >
            {theme === "winter" ? (
              <MdDarkMode className="text-base-content" />
            ) : (
              <MdLightMode className="text-base-content" />
            )}
          </button>

          <Link
            to="/cart"
            className="relative btn btn-ghost btn-circle btn-md cursor-pointer"
          >
            <div className="rounded-full text-2xl p-2 transition-all duration-500 text-base-content hover:bg-base-200">
              <BsCart3 />
            </div>

            <div className="absolute -top-1.5 -right-1.5 badge badge-sm badge-primary">
              {totalQuantity}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
