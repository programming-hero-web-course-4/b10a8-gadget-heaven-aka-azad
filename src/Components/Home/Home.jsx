import { useSearchParams } from "react-router-dom";
import Banner from "../Banner/Banner";
import Details from "../Details/Details";
import Gadgets from "../Gadgets/Gadgets";
import { Helmet } from "react-helmet";

const Home = () => {
  const [location] = useSearchParams();
  return (
    <>
      <Helmet>
        <title>Gadget Heaven - Home</title>
        <meta name="description" content="Home" />
      </Helmet>
      {location.get("filterproducts") ? (
        <Details />
      ) : (
        <>
          <div className="sm:mb-[450px]">
            <Banner />
          </div>
          <Gadgets />
        </>
      )}
    </>
  );
};
export default Home;
