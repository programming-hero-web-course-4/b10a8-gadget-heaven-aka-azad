import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const DisplayGadgets = () => {
  const [params] = useSearchParams();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    params.get("filter") === null || params.get("filter") == "home"
      ? setFilteredProducts(products)
      : setFilteredProducts(
          products.filter(
            (product) => product.category.toLowerCase() == params.get("filter")
          )
        );
  }, [params, products]);

  return (
    <div className="grid grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.product_id} product={product} />
      ))}
    </div>
  );
};

export default DisplayGadgets;
