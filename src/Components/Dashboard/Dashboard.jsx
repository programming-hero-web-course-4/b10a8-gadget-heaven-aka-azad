import { useContext } from "react";
import {
  CartContext,
  SetShowCartContext,
  ShowCartContext,
  WishlistContext,
} from "../context/StoredContext";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import clsx from "clsx";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const cartData = useContext(CartContext);
  const wishlistData = useContext(WishlistContext);
  const showCart = useContext(ShowCartContext);
  const setShowCart = useContext(SetShowCartContext);

  const handleShowCart = () => {
    setShowCart(true);
  };
  const handleShowWishlist = () => {
    setShowCart(false);
  };
  return (
    <div>
      <Helmet>
        <title>Gadget Heaven - Dashboard</title>
        <meta name="description" content="Dashboard" />
      </Helmet>
      <div className="text-center bg-default-color text-white py-8 mb-12">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="mb-8 max-w-[800px] mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className=" ">
          <button
            onClick={handleShowCart}
            className={clsx(
              "btn btn-outline rounded-full md:px-16 border-white  mr-6",
              { "bg-white text-default-color font-extrabold": showCart },
              { "text-white": !showCart }
            )}
          >
            Cart
          </button>
          <button
            onClick={handleShowWishlist}
            className={clsx(
              "btn btn-outline rounded-full md:px-16 border-white",
              { "bg-white text-default-color font-extrabold": !showCart },
              { "text-white": showCart }
            )}
          >
            Wishlist
          </button>
        </div>
      </div>
      <div className="max-w-[1280px] mx-auto">
        {showCart ? (
          <Cart cartList={cartData} />
        ) : (
          <Wishlist wishlist={wishlistData} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
