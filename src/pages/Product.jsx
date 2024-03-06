/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import ProductInfo from "../components/ProductId/ProductInfo";
import SimilarProducts from "../components/ProductId/SimilarProducts";

const Product = () => {
  const { id } = useParams();
  const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1";
  const [product, getProductById] = useFetch(baseUrl);

  useEffect(() => {
    getProductById(`/products/${id}`);
  }, [id]);

  return (
    <div className="md:w-[80%] mx-auto">
      <ProductInfo product={product} />
      <SimilarProducts product={product} />
    </div>
  );
};

export default Product;
