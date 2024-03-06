import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfigAuth from "../../utils/getConfigAuth";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    setCart: (state, action) => action.payload,
    addProductCart: (state, action) => {
      const product = state.find((product) => product.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    deleteProductCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { setCart, addProductCart, deleteProductCart } = cartSlice.actions;

export default cartSlice.reducer;

const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1/cart";

export const getCartThunk = () => (dispatch) => {
  const url = baseUrl;
  axios
    .get(url, getConfigAuth())
    .then((res) => {
      dispatch(setCart(res.data));
    })
    .catch((err) => console.error(err));
};

export const PostCartThunk =
  (product, quantity = 1) =>
  (dispatch) => {
    const url = baseUrl;
    const data = {
      quantity,
      productId: product.id,
    };
    axios
      .post(url, data, getConfigAuth())
      .then((res) => {
        const obj = {
          ...res.data,
          product: product,
        };
        dispatch(addProductCart(obj));
      })
      .catch((err) => console.error(err));
  };

export const deleteCartThunk = (id) => (dispatch) => {
  const url = `${baseUrl}/${id}`;
  axios
    .delete(url, getConfigAuth())
    .then(() => {
      dispatch(deleteProductCart(id));
    })
    .catch((err) => console.error(err));
};
