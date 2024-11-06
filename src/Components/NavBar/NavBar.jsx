import clsx from "clsx";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import heartLogo from "../../assets/logos-images/heart.svg";
import cartLogo from "../../assets/logos-images/cart.svg";
import { useContext } from "react";
import {
  CartContext,
  SetShowCartContext,
  WishlistContext,
} from "../context/StoredContext";

const NavBar = () => {
  const location = useLocation();

  const cart = useContext(CartContext);
  const wishlist = useContext(WishlistContext);
  const setShowCart = useContext(SetShowCartContext);
  const navigate = useNavigate();

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
      <li>
        <NavLink to="/history">History</NavLink>
      </li>
    </>
  );

  const handleShowCart = () => {
    navigate("/dashboard");
    setShowCart(true);
  };
  const handleShowWishlist = () => {
    navigate("/dashboard");
    setShowCart(false);
  };
  return (
    <>
      <div
        className={clsx(
          "rounded-t-3xl  p-0 lg:mx-8 lg:mt-8 sm:mt-6 mt-4 mx-auto mb-0",
          { "bg-default-color text-white": location.search == "?filter=home" },
          {
            "bg-default-color text-white":
              location.pathname == "/" && location.search == "",
          },
          { "bg-default-color text-white": location.search == null }
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[black]"
              >
                {navLinks}
              </ul>
            </div>
            <Link to="/" className="btn btn-ghost md:text-xl text-base">
              Gadget Heaven
            </Link>
          </div>
          <div className="navbar-center hidden  lg:flex">
            <ul className="menu menu-horizontal gap-2 px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end gap-4">
            <div className="relative inline-block">
              <button onClick={handleShowCart} className="btn btn-circle">
                <img src={cartLogo} alt="" />
              </button>
              {cart.length > 0 && (
                <span className="absolute border border-default-color top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs  leading-none text-white bg-default-hover rounded-full transform translate-x-1/2 -translate-y-1/2">
                  {cart.length}
                </span>
              )}
            </div>
            <div className="relative inline-block">
              <button onClick={handleShowWishlist} className="btn btn-circle">
                <img src={heartLogo} alt="" />
              </button>
              {wishlist.length > 0 && (
                <span className="absolute border border-default-color top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs  leading-none text-white bg-default-hover rounded-full transform translate-x-1/2 -translate-y-1/2">
                  {wishlist.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
