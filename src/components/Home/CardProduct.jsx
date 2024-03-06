import { useNavigate } from "react-router-dom";
import { PostCartThunk } from "../../store/slices/cart.slice";
import { useDispatch } from "react-redux";

/* eslint-disable react/prop-types */
const CardProduct = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleNavigateDetail = () => {
    navigate(`/product/${product.id}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleAddCart = (e) => {
    e.stopPropagation();
    dispatch(PostCartThunk(product));
  };

  return (
    <>
      <div
        className="w-full max-w-[320px] border-2 border-gray-200 rounded-lg p-4 mx-auto capitalize cursor-pointer"
        onClick={handleNavigateDetail}
      >
        <img
          className="w-[200px] h-[200px] object-contain mx-auto mb-4"
          src={product?.images[0].url}
          alt={product?.title}
        />

        <div className="grid grid-cols-1 gap-y-2">
          <h4 className="font-light text-sm">{product?.category.name}</h4>
          <h2 className="font-medium text-lg pl-2 pt-2 truncate">
            {product?.title}
          </h2>

          <div className="grid">
            <span className="font-light text-lg text-gray-500">Price:</span>
            <h3 className="text-xl pl-5 font-bold">${product?.price}</h3>
            <button
              className="w-12 aspect-square justify-self-end self-end rounded-full relative right-4 bg-red-500 text-white text-2xl hover:bg-green-500"
              onClick={handleAddCart}
            >
              <i className="bx bx-cart"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProduct;
