import { useSearchParams } from "react-router-dom";
import Banner from "../Banner/Banner";
import Details from "../Details/Details";
import Gadgets from "../Gadgets/Gadgets";

const Home = () => {
  const [location] = useSearchParams();
  return (
    <>
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
