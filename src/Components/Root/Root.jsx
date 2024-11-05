import { Route, BrowserRouter, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import Statistics from "../Statistics/Statistics";
import Dashboard from "../Dashboard/Dashboard";
import Error from "../Error/Error";
import DisplayGadgets from "../DisplayGadgets/DisplayGadgets";
import { CartContext, WishlistContext } from "../context/StoredContext";
import { useEffect, useState } from "react";
import { addToStoredList } from "../../Utility/addToDB";

const Root = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) ?? []
  );
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) ?? []
  );

  useEffect(() => {
    addToStoredList(cart, "cart");
  }, [cart]);
  useEffect(() => {
    addToStoredList(wishlist, "wishlist");
  }, [wishlist]);

  return (
    <CartContext.Provider value={cart}>
      <WishlistContext.Provider value={wishlist}>
        <BrowserRouter>
          <div className="font-sora  md:p-0 px-4">
            <NavBar />
            <div className="bg-[#F6F6F6] pb-24">
              <Routes>
                <Route
                  path="/"
                  element={<Home setCart={setCart} setWishlist={setWishlist} />}
                >
                  <Route path="/" element={<DisplayGadgets />}></Route>
                </Route>
                <Route path="/statistics" element={<Statistics />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/*" element={<Error />}></Route>
              </Routes>
            </div>

            <Footer />
          </div>
        </BrowserRouter>
      </WishlistContext.Provider>
    </CartContext.Provider>
  );
};

export default Root;
