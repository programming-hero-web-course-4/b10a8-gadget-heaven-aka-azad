import GadgetsCategories from "../GadgetsCategories/GadgetsCategories";
import { useEffect, useState } from "react";
import DisplayGadgets from "../DisplayGadgets/DisplayGadgets";

const Gadgets = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="max-w-[1280px] mx-auto gap-6 grid grid-cols-5">
      <div>
        <GadgetsCategories categories={categories} />
      </div>
      <div className="col-span-4 ">
        <DisplayGadgets />
      </div>
    </div>
  );
};

export default Gadgets;
