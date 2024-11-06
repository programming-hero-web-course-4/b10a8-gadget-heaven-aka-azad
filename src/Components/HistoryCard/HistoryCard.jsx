import PropTypes from "prop-types";

const HistoryCard = ({ product }) => {
  const { product_title, description, product_image, price } = product;

  return (
    <div className="flex p-8 bg-white rounded-2xl gap-8">
      <div className="max-w-52 max-h-[132px] rounded-xl">
        <img
          className="h-full w-full rounded-xl object-cover"
          src={product_image}
          alt={product_title}
        />
      </div>
      <div className="flex items-center justify-between flex-grow">
        <div>
          <h1 className="font-semibold text-2xl mb-5">{product_title}</h1>
          <p className="opacity-60 text-lg mb-4">{description}</p>
          <p className="font-semibold text-xl opacity-80">Price: {price}$</p>
        </div>
      </div>
    </div>
  );
};

HistoryCard.propTypes = {
  product: PropTypes.object,
};
export default HistoryCard;
