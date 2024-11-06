import { Route, BrowserRouter, Routes } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import Statistics from "../Statistics/Statistics";
import Dashboard from "../Dashboard/Dashboard";
import Error from "../Error/Error";
import DisplayGadgets from "../DisplayGadgets/DisplayGadgets";
import {
  CartContext,
  PurchaseHistoryContext,
  SetCartContext,
  SetPurchaseHistoryContext,
  SetShowCartContext,
  SetWishlistContext,
  ShowCartContext,
  WishlistContext,
} from "../context/StoredContext";
import { useEffect, useState } from "react";
import { addToStoredList } from "../../Utility/addToDB";
import History from "../History/History";

const Root = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) ?? []
  );
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) ?? []
  );

  const [showCart, setShowCart] = useState(true);

  const [purchaseHistory, setPurchaseHistory] = useState(
    JSON.parse(localStorage.getItem("purchaseHistory")) ?? []
  );

  useEffect(() => {
    addToStoredList(cart, "cart");
  }, [cart]);
  useEffect(() => {
    addToStoredList(wishlist, "wishlist");
  }, [wishlist]);
  useEffect(() => {
    addToStoredList(purchaseHistory, "purchaseHistory");
  }, [purchaseHistory]);

  return (
    <CartContext.Provider value={cart}>
      <SetPurchaseHistoryContext.Provider value={setPurchaseHistory}>
        <PurchaseHistoryContext.Provider value={purchaseHistory}>
          <ShowCartContext.Provider value={showCart}>
            <SetShowCartContext.Provider value={setShowCart}>
              <WishlistContext.Provider value={wishlist}>
                <SetCartContext.Provider value={setCart}>
                  <SetWishlistContext.Provider value={setWishlist}>
                    <BrowserRouter>
                      <div className="font-sora  md:p-0 px-4">
                        <NavBar />
                        <div className="bg-[#F6F6F6] pb-24">
                          <Routes>
                            <Route path="/" element={<Home />}>
                              <Route
                                path="/"
                                element={<DisplayGadgets />}
                              ></Route>
                            </Route>
                            <Route
                              path="/statistics"
                              element={<Statistics />}
                            ></Route>
                            <Route
                              path="/dashboard"
                              element={<Dashboard />}
                            ></Route>
                            <Route
                              path="/dashboard"
                              element={<Dashboard />}
                            ></Route>
                            <Route
                              path="/history"
                              element={<History />}
                            ></Route>
                            <Route path="/*" element={<Error />}></Route>
                          </Routes>
                        </div>

                        <Footer />
                      </div>
                    </BrowserRouter>
                  </SetWishlistContext.Provider>
                </SetCartContext.Provider>
              </WishlistContext.Provider>
            </SetShowCartContext.Provider>
          </ShowCartContext.Provider>
        </PurchaseHistoryContext.Provider>
      </SetPurchaseHistoryContext.Provider>
    </CartContext.Provider>
  );
};

export default Root;
