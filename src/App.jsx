/* eslint-disable react-hooks/exhaustive-deps */
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getAllProductsThunk } from "./store/slices/products.slice";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Header from "./components/shared/Header";
import Cart from "./pages/Cart";
import Purchases from "./pages/Purchases";
import { getCartThunk } from "./store/slices/cart.slice";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import Footer from "./components/shared/Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsThunk());
    dispatch(getCartThunk());

    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <HashRouter>
        <Header isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route element={<ProtectedRoutes />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/purchases" element={<Purchases />} />
          </Route>
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;
