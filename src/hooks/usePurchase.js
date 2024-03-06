import axios from "axios";
import getConfigAuth from "../utils/getConfigAuth";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setCart } from "../store/slices/cart.slice";

const usePurchase = () => {
  const [purchases, setPurchases] = useState();
  const dispatch = useDispatch();

  const url = "https://e-commerce-api-v2.academlo.tech/api/v1/purchases";

  const getAllPurchases = () => {
    axios
      .get(url, getConfigAuth())
      .then((res) => setPurchases(res.data))
      .catch((err) => console.error(err));
  };

  const makePurchase = () => {
    axios
      .post(url, null, getConfigAuth())
      .then((res) => {
        console.log(res.data);
        dispatch(setCart([]));
      })
      .catch((err) => console.error(err));
  };

  return { purchases, getAllPurchases, makePurchase };
};

export default usePurchase;
