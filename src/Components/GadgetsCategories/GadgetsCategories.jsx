import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const GadgetsCategories = ({ categories }) => {
  return (
    <div className="border-2 border-base-content bg-white border-opacity-20 p-6 grid gap-6 rounded-2xl">
      <NavLink to="10">
        <button className="btn w-full rounded-full text-left font-medium text-lg">
          All Products
        </button>
      </NavLink>
      {categories.map((category) => (
        <div key={category.category_id}>
          <NavLink to={category.category_id}>
            <button className="btn w-full rounded-full text-left font-medium text-lg">
              {category.category_name}
            </button>
          </NavLink>
        </div>
      ))}
    </div>
  );
};
GadgetsCategories.propTypes = {
  categories: PropTypes.array.isRequired,
};
export default GadgetsCategories;
