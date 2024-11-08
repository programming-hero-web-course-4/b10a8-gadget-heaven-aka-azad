import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import clsx from "clsx";
import {
  CartContext,
  SetCartContext,
  SetWishlistContext,
  WishlistContext,
} from "../context/StoredContext";
import "react-toastify/dist/ReactToastify.css";

import cartWhite from "../../assets/logos-images/cart-white.svg";
import heatLogo from "../../assets/logos-images/heart.svg";
import { toast, ToastContainer } from "react-toastify";
import Error from "../Error/Error";
import { Helmet } from "react-helmet";

const Details = () => {
  const setWishlist = useContext(SetWishlistContext);

  const setCart = useContext(SetCartContext);

  const cartList = useContext(CartContext);
  const wishlist = useContext(WishlistContext);

  const [params] = useSearchParams();
  const [allProducts, setAllProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [prodId, setProdId] = useState("");

  const notify = toast;

  useEffect(() => {
    setProdId(params.get("filterproducts") ? params.get("filterproducts") : "");
  }, [params]);

  useEffect(() => {
    fetch("../products.json")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  useEffect(() => {
    const filteredProduct = allProducts.filter(
      (product) => product.product_id == prodId
    );
    setProduct(filteredProduct ? filteredProduct[0] : {});
  }, [allProducts, prodId]);

  const handleAddToCart = () => {
    !cartList.includes(prodId) && setCart([...cartList, prodId]);
    notify("Added To Cart List");
  };
  const handleAddToWishlist = () => {
    !wishlist.includes(prodId) && setWishlist([...wishlist, prodId]);
    notify("Added To Wishlist");
  };

  return (
    <>
      <>
        <Helmet>
          <title>Gadget Heaven - Description</title>
          <meta name="description" content="Description" />
        </Helmet>
        {product ? (
          <div>
            <div className="bg-default-color relative text-white text-center mb-[600px] sm:mb-[400px]  pb-52">
              <h1 className="font-bold text-3xl mb-4 pt-8">Product Details</h1>
              <p className="max-w-3xl mx-auto pb-8">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
              <div className="absolute w-full ">
                <div className="max-w-[1280px] flex md:flex-row flex-col gap-8 mx-auto p-8 rounded-3xl bg-white text-[#000]">
                  <div className="max-h-[503px] max-w-[420px] ">
                    <img
                      className="h-full w-full object-cover rounded-2xl"
                      src={product.product_image}
                      alt=""
                    />
                  </div>
                  <div className="text-left">
                    <h1 className="font-semibold text-3xl mb-3">
                      {product.product_title}
                    </h1>
                    <p className="font-semibold text-xl opacity-80">
                      Price: {product.price}$
                    </p>
                    <div>
                      <p
                        className={clsx(
                          "px-4 py-2 border-2 rounded-full w-fit my-4",
                          {
                            "border-[#309C08] bg-[#2f9c081a] text-[#309C08]":
                              product.availability,
                          },
                          {
                            "border-[#9c1e08] bg-[#9c08081a] text-[#9c0808]":
                              !product.availability,
                          }
                        )}
                      >
                        {product.availability ? "In Stock" : "Out of stock"}
                      </p>
                    </div>
                    <p className="opacity-60 text-lg mb-4">
                      {product.description}
                    </p>
                    <p className="text-lg font-bold mb-3">Specification</p>
                    <ol className="list-decimal pl-8 space-y-3 text-xl opacity-60">
                      {product?.Specification?.map((spec, i) => (
                        <li className="list-item" key={i}>
                          {spec}
                        </li>
                      ))}
                    </ol>
                    <div className="mt-4">
                      <p className="text-lg font-bold mb-3">Rating ⭐</p>
                      <div className="flex content-center gap-4">
                        <ReactStars
                          count={5}
                          value={product.rating}
                          edit={false}
                          size={25}
                        />
                        <p className="font-medium text-sm px-4 py-2 rounded-full bg-base-200 border-2 border-base-300 ">
                          {product.rating}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 content-center mt-4">
                      <button
                        onClick={handleAddToCart}
                        className="btn px-5 py-2 bg-default-color rounded-full font-bold text-lg text-white"
                      >
                        Add To Cart <img src={cartWhite} alt="" />
                      </button>
                      <button
                        onClick={handleAddToWishlist}
                        className="btn bg-transparent border-2 border-base-300 text-lg btn-circle"
                      >
                        <img src={heatLogo} alt="Add to wishlist" />
                      </button>
                      <ToastContainer position="top-center" autoClose={2000} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Error />
        )}
      </>
    </>
  );
};

export default Details;
