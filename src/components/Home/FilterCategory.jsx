/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { getAllProductsThunk } from "../../store/slices/products.slice";
import { useDispatch } from "react-redux";
const FilterCategory = ({ onClose }) => {
  const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1";
  const [categories, getAllCategories] = useFetch(baseUrl);
  const dispatch = useDispatch();

  useEffect(() => {
    getAllCategories("/categories");
  }, []);

  const handleFilterCategory = (id) => {
    onClose();
    if (id) {
      const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${id}`;
      dispatch(getAllProductsThunk(url));
    } else {
      dispatch(getAllProductsThunk());
    }
  };

  return (
    <>
      <div className="flex flex-col gap-3 p-2 m-2">
        <h3 className="text-xl font-bold">Categories</h3>
        <ul>
          <li
            className="cursor-pointer hover:text-red-600 capitalize mb-2"
            onClick={() => {
              onClose();
              handleFilterCategory();
            }}
          >
            All Categories
          </li>
          {categories?.map((category) => (
            <li
              onClick={() => {
                onClose();
                handleFilterCategory(category.id);
              }}
              key={category.id}
              className="cursor-pointer hover:text-red-600 capitalize mb-2"
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FilterCategory;
