/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { deleteCartThunk } from "../../store/slices/cart.slice";

/* eslint-disable no-unused-vars */
const CartItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCartThunk(product.id));
  };

  return (
    <>
      <div className="flex flex-col justify-between p-4 items-center md:flex-row">
        <img
          src={product?.product.images[0].url}
          alt={product?.product.title}
          className="w-[100px] h-[100px] pb-2 object-contain"
        />
        <div className="flex flex-col justify-center items-center gap-4">
          <h4>{product?.product.title}</h4>
          <h5>${product?.product.price}</h5>
          <div className="flex p-2">
            <div className="cursor-pointer border-gray-200 border-2 w-10 h-7 flex items-center justify-center text-3xl hover:bg-red-500">
              -
            </div>
            <div className="cursor-pointer border-gray-200 border-2 w-10 h-7 flex items-center justify-center text-xl font-bold">
              {product?.quantity}
            </div>
            <div className="cursor-pointer border-gray-200 border-2 w-10 h-7 flex items-center justify-center text-3xl hover:bg-green-500">
              +
            </div>
          </div>
        </div>
        <button className="p-2" onClick={handleDelete}>
          <i className="bx bxs-trash text-2xl text-red-600"></i>
        </button>
      </div>
      <div className="flex justify-end p-2 pr-3">
        <h3>
          Total:
          <span className="font-bold text-lg pl-2">
            ${product.quantity * product.product.price}
          </span>
        </h3>
      </div>
    </>
  );
};

export default CartItem;
