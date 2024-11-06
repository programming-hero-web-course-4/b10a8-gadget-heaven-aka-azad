import PropTypes from "prop-types";
import WishlistCard from "../WishlistCard/WishlistCard";
import { useEffect, useState } from "react";

const Wishlist = ({ wishlist }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [wishlistProducts, setWishlistProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);

  useEffect(() => {
    setWishlistProducts(
      wishlist.flatMap((id) =>
        allProducts.filter((prod) => prod.product_id == id)
      )
    );
  }, [allProducts, wishlist]);
  return (
    <div>
      <div>
        <p className="text-2xl font-bold ">Wishlist</p>
      </div>
      <div>
        {wishlistProducts.map((prod) => (
          <WishlistCard key={prod.product_id} product={prod} />
        ))}
      </div>
    </div>
  );
};

Wishlist.propTypes = {
  wishlist: PropTypes.array,
};

export default Wishlist;
