import { useContext } from "react";
import { CartContext, WishlistContext } from "../context/StoredContext";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";

const Dashboard = () => {
  const cartData = useContext(CartContext);
  const wishlistData = useContext(WishlistContext);
  console.log(cartData);
  console.log(wishlistData);
  return (
    <div>
      <div className="text-center bg-default-color text-white py-8 mb-12">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="mb-8">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div>
          <button className="btn btn-outline rounded-full px-16 border-white text-white mr-6">
            Cart
          </button>
          <button className="btn btn-outline rounded-full px-16 border-white text-white">Wishlist</button>
        </div>
      </div>
      <Cart />
      <Wishlist />
    </div>
  );
};

export default Dashboard;
