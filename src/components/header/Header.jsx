import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { WiDaySunny } from "react-icons/wi";
import { MdNightsStay } from "react-icons/md";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [theme, setTheme] = useState(
    JSON.parse(localStorage.getItem("theme")) || false
  );

  const handleThemeChange = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    let newTheme = "light";
    if (theme) {
      newTheme = "dark";
    }

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  const navlink = (
    <>
      <li>
        <a>Item 1</a>
      </li>
      <li>
        <a>Parent</a>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">BD LAND</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlink}</ul>
        </div>
        <div className="navbar-end mr-3 gap-3">
          {user ? (
            <>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>
              <button onClick={logout} className="flex items-center gap-2">
                <span>Logout</span>
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="flex items-center gap-2">
                <FaRegUserCircle className="text-2xl"></FaRegUserCircle>
                <span>Login</span>
              </Link>
            </>
          )}

          <div onClick={handleThemeChange} className="text-xl">
            {theme ? <WiDaySunny></WiDaySunny> : <MdNightsStay></MdNightsStay>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
