import { Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import Cart from "../pages/cart";
import Nopage from "../pages/nopage";
import { useState } from "react";
import Login from "../pages/login";
import SignUp from "../pages/signUp";
import axios from "axios";
import PrivateRoutes from "../utils/privateRoute";

axios.defaults.baseURL = "https://qdemy.onrender.com";
export default function MyContainer() {
  const [cart, setcart] = useState([]);

  return (
    <Routes>
      {/* <Route index  element={<Home cart={cart} setcart={setcart}/>}></Route> */}
      <Route path="/signup" element={<SignUp />}></Route>

      <Route path="/login" element={<Login />}></Route>
      <Route element={<PrivateRoutes />}>
        <Route
          path="/cart"
          element={<Cart cart={cart} setcart={setcart} />}
        ></Route>
        <Route
          path="/home"
          element={<Home cart={cart} setcart={setcart} />}
        ></Route>
      </Route>
      <Route path="/" element={<Login />}></Route>
      <Route path="*" element={<Nopage />}></Route>
    </Routes>
  );
}
