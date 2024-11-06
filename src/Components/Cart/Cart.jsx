import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import CartListCard from "../CartListCard/CartListCard";
import logoSort from "../../assets/logos-images/logo-sort.svg";
import btnBg from "../../assets/logos-images/btn-bg.png";
import {
  PurchaseHistoryContext,
  SetCartContext,
  SetPurchaseHistoryContext,
} from "../context/StoredContext";
import success from "../../assets/logos-images/Group.png";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartList }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  const [sortedCartProducts, setSortedCartProducts] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const editCart = useContext(SetCartContext);
  const editPurchaseHistory = useContext(SetPurchaseHistoryContext);
  const purchaseHistory = useContext(PurchaseHistoryContext);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  useEffect(() => {
    setCartProducts(
      cartList.flatMap((id) =>
        allProducts.filter((prod) => prod.product_id == id)
      )
    );
    setSortedCartProducts(
      cartList.flatMap((id) =>
        allProducts.filter((prod) => prod.product_id == id)
      )
    );
  }, [allProducts, cartList]);
  useEffect(() => {
    const sumCost = cartProducts.reduce((preValue, currentProduct) => {
      return preValue + currentProduct.price;
    }, 0);
    cartProducts.length >= 0 && setTotalCost(sumCost);
  }, [cartProducts]);

  const handleSort = () => {
    setSortedCartProducts(
      cartProducts.sort((a, b) => a.price - b.price).reverse()
    );
  };

  const handlePurchase = () => {
    document.getElementById("my_modal_1").showModal();
    editPurchaseHistory([...purchaseHistory, ...cartList]);
  };
  const handleRedirectHome = () => {
    editCart([]);
    navigate("/");
  };

  return (
    <div className="">
      <div className="flex justify-between items-center mb-8">
        <div className="h-fit ">
          <p className="text-2xl font-bold ">Cart</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="h-fit ">
            <p className="text-2xl font-bold ">Total Cost: {totalCost}$</p>
          </div>
          <button
            onClick={handleSort}
            className="btn rounded-full btn-outline text-default-color border-2 border-default-color"
          >
            Sort By Price <img src={logoSort} alt="" />
          </button>
          <button
            onClick={handlePurchase}
            style={{
              backgroundImage: `url(${btnBg})`,
              backgroundSize: "cover",
            }}
            className={`btn rounded-full border-2 text-white ]`}
          >
            Purchase
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {sortedCartProducts.map((prod) => (
          <CartListCard key={prod.product_id} product={prod}></CartListCard>
        ))}
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_1" className="modal max-w-[400px] mx-auto">
        <div className="modal-box p-8 text-center">
          <img
            className="mx-auto mb-6"
            src={success}
            alt="purchase successful"
          />
          <h3 className="font-bold text-2xl mb-3">
            {sortedCartProducts.length <= 0
              ? "Nothing to Purchase"
              : "Payment Successful !"}
          </h3>
          <hr className="opacity-10 mb-3" />
          <p className="mb-3 font-medium opacity-60">
            {sortedCartProducts.length <= 0
              ? "Check our Gadgets"
              : "Thanks for purchasing."}
          </p>
          <p className="mb-3 font-medium opacity-60">Total: {totalCost}$</p>
          <div className="modal-action w-full flex-none">
            <form method="dialog" className="w-full">
              <button
                onClick={handleRedirectHome}
                className="btn rounded-full w-full font-semibold"
              >
                {sortedCartProducts.length <= 0 ? "Show Gadgets" : "Close"}
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

Cart.propTypes = {
  cartList: PropTypes.array,
};

export default Cart;
