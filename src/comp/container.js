import { Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import Cart from "../pages/cart";
import Nopage from "../pages/nopage";
import { useState } from "react";
import Login from "../pages/login";
export default function MyContainer() {
  const [cart, setcart] = useState([]);

  return (
    <Routes>
      {/* <Route index  element={<Home cart={cart} setcart={setcart}/>}></Route> */}
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/cart"
        element={<Cart cart={cart} setcart={setcart} />}
      ></Route>
      <Route path="/" element={<Home cart={cart} setcart={setcart} />}></Route>
      <Route path="*" element={<Nopage />}></Route>
    </Routes>
  );
}
