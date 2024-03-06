/* eslint-disable no-empty-pattern */
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const productsSlice = createSlice({
  name: "products",
  initialState: null,
  reducers: {
    setProducts: (state, action) => {
      return action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;

const defaultUrl = "https://e-commerce-api-v2.academlo.tech/api/v1/products";
export const getAllProductsThunk =
  (url = defaultUrl) =>
  (dispatch) => {
    axios
      .get(url)
      .then((res) => {
        dispatch(setProducts(res.data));
      })
      .catch((err) => console.error(err));
  };
