import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import ThemeProvider from "../contexts/ThemeContext";
import { UserContext } from "../hooks/useUser";
import {  useContext } from "react";

const Header = () => {
  const navigate = useNavigate();
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used within UserProvider");
  }

  const handleLogout = () => {
    context?.setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <>
      <header className="bg-neutral text-neutral-content p-2 flex">
        <div className="flex mx-auto justify-center md:justify-end w-4/5 items-center gap-4">
          {context.user ? (
            <>
              <h1 className="text-[12px] sm:text-sm text-gray-400">
                Hello!{" "}
                {context.user.username.split(" ")[0] ||
                  context.user.username.split("@")[0]}
              </h1>

              <button
                onClick={handleLogout}
                className="hover:bg-blue-700 hover:text-white cursor-pointer font-bold text-blue-500 border border-blue-500 py-0.5 px-2 rounded-lg text-[12px] sm:text-sm transition-all duration-500"
              >
                LOGOUT
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-[12px] sm:text-[14px] text-gray-300 cursor-pointer hover:underline transition-all duration-500"
              >
                Sign in/Guest
              </Link>
              <Link
                to="/register"
                className="text-[12px] sm:text-[14px] text-gray-300 cursor-pointer hover:underline transition-all duration-500"
              >
                Create account
              </Link>
            </>
          )}
        </div>
      </header>
      <ThemeProvider>
        <NavBar />
      </ThemeProvider>
    </>
  );
};

export default Header;
