import { useContext, useEffect, useState } from "react";
import { PurchaseHistoryContext } from "../context/StoredContext";
import HistoryCard from "../HistoryCard/HistoryCard";
import { Helmet } from "react-helmet";

const History = () => {
  const purchaseHistory = useContext(PurchaseHistoryContext);
  const [allProducts, setAllProducts] = useState([]);
  const [purchasedProducts, setPurchasedProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);
  useEffect(() => {
    setPurchasedProducts(
      purchaseHistory.flatMap((id) =>
        allProducts.filter((prod) => prod.product_id == id)
      )
    );
  }, [allProducts, purchaseHistory]);
  return (
    <div>
        <Helmet>
            <title>Gadget Heaven - History</title>
            <meta name="description" content="history"/>
        </Helmet>
      <div className="text-center bg-default-color text-white py-8 mb-12">
        <h1 className="text-3xl font-bold mb-4">History</h1>
        <p className="mb-8 max-w-[800px] mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="flex flex-col gap-6 max-w-[1280px] mx-auto">
        {purchasedProducts.map((prod, i) => (
          <HistoryCard key={prod.product_id + i} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default History;
