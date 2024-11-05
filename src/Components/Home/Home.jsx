import { useSearchParams } from "react-router-dom";
import Banner from "../Banner/Banner";
import Details from "../Details/Details";
import Gadgets from "../Gadgets/Gadgets";
import PropTypes from "prop-types";

const Home = ({ setCart, setWishlist }) => {
  const [location] = useSearchParams();
  return (
    <>
      {location.get("filterproducts") ? (
        <Details setCart={setCart} setWishlist={setWishlist} />
      ) : (
        <>
          <div className="sm:mb-96">
            <Banner />
          </div>
          <Gadgets />
        </>
      )}
    </>
  );
};
Home.propTypes = {
  setCart: PropTypes.func,
  setWishlist: PropTypes.func,
};
export default Home;
