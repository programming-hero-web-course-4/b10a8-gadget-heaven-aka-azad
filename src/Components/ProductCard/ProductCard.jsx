import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const {
    product_title,
    product_image,
    // category,
    price,
    // description,
    // Specification,
    // availability,
    // rating,
  } = product;
  return (
    <div className="card bg-white p-5">
      <figure className="h-[180px] rounded-xl">
        <img className="h-full w-full object-cover" src={product_image} />
      </figure>
      <div className="pt-5">
        <h2 className="mb-4 text-2xl font-semibold">{product_title}</h2>
        <p className="mb-4 opacity-60 font-medium">Price: {price}$</p>
        <div className="card-actions justify-start">
          <Link className="btn btn-outline border-2 border-default-color text-default-color rounded-full">View Details</Link>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard;
