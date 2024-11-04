import clsx from "clsx";
import { Link, NavLink, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  console.log(location.search);
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div
        className={clsx(
          "rounded-t-3xl  p-0 lg:mx-8 lg:mt-8 sm:mt-6 mt-4 mx-auto mb-0",
          { "bg-default-color text-white": location.search == "?filter=home" }
        )}
      >
        <div className="navbar max-w-[1280px] mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navLinks}
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost text-xl">
              Gadget Heaven
            </Link>
          </div>
          <div className="navbar-center hidden  lg:flex">
            <ul className="menu menu-horizontal gap-2 px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end gap-4">
            <Link className="btn btn-circle">
              <img src="logos-images/cart.svg" alt="" />
            </Link>
            <Link className="btn btn-circle">
              <img src="logos-images/heart.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
