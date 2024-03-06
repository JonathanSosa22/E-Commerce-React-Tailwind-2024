/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import CardProduct from "../Home/CardProduct";

const SimilarProducts = ({ product }) => {
  const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1";
  const [productsByCategory, getProductsByCategory] = useFetch(baseUrl);

  useEffect(() => {
    if (product) {
      getProductsByCategory(`/products?categoryId=${product.category.id}`);
    }
  }, [product]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <h2 className="text-2xl font-bold mt-10 m-4">Similar Products</h2>
      <div className="flex flex-wrap gap-3 mb-4">
        {productsByCategory?.map((prod) => {
          if (product.id !== prod.id) {
            return (
              <li
                key={prod.id}
                className="list-none mx-auto w-[300px]"
                onClick={scrollToTop}
              >
                <CardProduct product={prod} />
              </li>
            );
          }
        })}
      </div>
    </>
  );
};

export default SimilarProducts;
