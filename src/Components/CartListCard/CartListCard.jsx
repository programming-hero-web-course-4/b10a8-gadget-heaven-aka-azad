import PropTypes from "prop-types";
import cross from "../../assets/logos-images/cross.svg";
import { useContext } from "react";
import { CartContext, SetCartContext } from "../context/StoredContext";

const CartListCard = ({ product }) => {
  const editCart = useContext(SetCartContext);
  const cart = useContext(CartContext);
  const { product_id, product_title, description, product_image, price } =
    product;

  const handleDeleteFromCart = () => {
    editCart(cart.filter((id) => id != product_id));
  };

  return (
    <div className="flex md:flex-row flex-col items-center p-8 bg-white rounded-2xl gap-8">
      <div className="max-w-52 max-h-[132px]  overflow-hidden rounded-xl">
        <img
          className="h-full w-full rounded-xl object-cover overflow-hidden"
          src={product_image}
          alt={product_title}
        />
      </div>
      <div className="flex md:flex-row flex-col items-center justify-between flex-grow">
        <div>
          <h1 className="font-semibold text-2xl mb-5">{product_title}</h1>
          <p className="opacity-60 text-lg mb-4">{description}</p>
          <p className="font-semibold text-xl opacity-80">Price: {price}$</p>
        </div>
        <div className="">
          <button
            onClick={handleDeleteFromCart}
            className="btn btn-circle border bg-transparent border-[red]"
          >
            <img src={cross} alt="delete" />
          </button>
        </div>
      </div>
    </div>
  );
};

CartListCard.propTypes = {
  product: PropTypes.object,
};

export default CartListCard;
