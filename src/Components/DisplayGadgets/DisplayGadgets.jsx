import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const DisplayGadgets = () => {
  const params = useParams();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => productsFilter(data)),
      [];
  });
  const productsFilter = (data) => {
    params.catId === undefined || params.catId == 10
      ? setProducts(data)
      : setProducts(
          data.filter((product) => product.category_id == params.catId)
        );
  };
  return (
    <div className="grid grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.product_id} product={product} />
      ))}
    </div>
  );
};

export default DisplayGadgets;
