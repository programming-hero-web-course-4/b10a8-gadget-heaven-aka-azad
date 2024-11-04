import PropTypes from "prop-types";
import { NavLink, useSearchParams } from "react-router-dom";
import clsx from "clsx";

const GadgetsCategories = ({ categories }) => {
  let [search] = useSearchParams();
  console.log(search.get('filter'))
  return (
    <div className="border-2 border-base-content bg-white border-opacity-20 p-6 grid gap-6 rounded-2xl">
      <NavLink
        className={clsx(
          "btn btn-ghost w-full rounded-full text-left font-medium text-lg",
          {
            " bg-default-color text-white": search.get("filter") === "home",
          }
        )}
        to={{ pathname: "/", search: `filter=home` }}
      >
        All Products
      </NavLink>
      {categories.map((category) => (
        <div key={category.category_id}>
          <NavLink
            className={clsx(
              "btn btn-ghost w-full rounded-full text-left font-medium text-lg",
              {
                " w-full bg-default-color text-white":
                  search.get("filter") === category.category_name.toLowerCase(),
              }
            )}
            to={{
              pathname: "/",
              search: `filter=${category.category_name.toLowerCase()}`,
            }}
          >
            {/* <div className="btn w-full rounded-full text-left font-medium text-lg"> */}
            {category.category_name}
            {/* </div> */}
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
