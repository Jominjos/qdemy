import { Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import Cart from "../pages/cart";
import Nopage from "../pages/nopage";
import Course from "../pages/courses";
import Login from "../pages/login";
import SignUp from "../pages/signUp";
import axios from "axios";
import PrivateRoutes from "../utils/privateRoute";
import Profile from "../pages/profile";

axios.defaults.baseURL = "https://qdemy-ten.vercel.app";

//http://localhost:6003
//https://qdemy.onrender.com

export default function MyContainer() {
  return (
    <Routes>
      {/* <Route index  element={<Home cart={cart} setcart={setcart}/>}></Route> */}
      <Route path="/signup" element={<SignUp />}></Route>

      <Route path="/login" element={<Login />}></Route>
      <Route element={<PrivateRoutes />}>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/course" element={<Course />}></Route>
      </Route>
      <Route path="/" element={<Login />}></Route>
      <Route path="*" element={<Nopage />}></Route>
    </Routes>
  );
}
