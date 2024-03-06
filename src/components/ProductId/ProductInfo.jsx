/* eslint-disable react/prop-types */

import { useState } from "react";
import { PostCartThunk } from "../../store/slices/cart.slice";
import { useDispatch } from "react-redux";

/* eslint-disable no-unused-vars */
const ProductInfo = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const handleInclrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity - 1 >= 1) {
      setQuantity((state) => state - 1);
    }
  };

  const handleAddCart = () => {
    dispatch(PostCartThunk(product, quantity));
  };

  return (
    <>
      <div className="flex items-center gap-3 p-4">
        <a href="/" className="text-gray-500 font-bold">
          Home
        </a>
        <div className="bg-red-600 min-w-2 min-h-2 rounded-full"></div>
        <span className="truncate">{product?.title}</span>
      </div>
      <div className="grid grid-cols-2 p-3 gap-2 capitalize max-[1200px]:grid-cols-1">
        <img
          src={product?.images[0].url}
          alt={product?.title}
          className="w-[400px] h-[400px] pb-2 object-contain mx-auto"
        />
        <div className="flex flex-col justify-between p-2">
          <h4 className="font-light text-sm pb-2">{product?.category.name}</h4>
          <h3 className="font-medium text-lg pl-2 pb-2">{product?.title}</h3>
          <p className="pb-2 text-sm">{product?.description}</p>
          <div className="">
            <ul className="grid grid-cols-2 p-2">
              <li className="p-2">
                <span>Price:</span>
                <p className="font-bold ml-6">${product?.price}</p>
              </li>
              <li className="p-2">
                <span>Quantity:</span>
                <div className="flex p-2">
                  <div
                    onClick={handleDecrease}
                    className="cursor-pointer border-gray-200 border-2 w-10 h-7 flex items-center justify-center text-3xl hover:bg-red-500"
                  >
                    -
                  </div>
                  <div className="cursor-pointer border-gray-200 border-2 w-10 h-7 flex items-center justify-center text-xl font-bold">
                    {quantity}
                  </div>
                  <div
                    onClick={handleInclrease}
                    className="cursor-pointer border-gray-200 border-2 w-10 h-7 flex items-center justify-center text-3xl hover:bg-green-500"
                  >
                    +
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <button
            className="bg-red-500 font-bold text-white p-4 w-full text-xl hover:text-green-500"
            onClick={handleAddCart}
          >
            Add to cart <i className="bx bx-cart"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
