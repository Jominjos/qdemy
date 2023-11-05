import { Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import Cart from "../pages/cart";
import Nopage from "../pages/nopage";
import Course from "../pages/courses";
import Login from "../pages/login";
import SignUp from "../pages/signUp";

import PrivateRoutes from "../utils/privateRoute";
import Profile from "../pages/profile";
import axios from "axios";
import { axiosInstance } from "../api/axios";
import Cookies from "js-cookie";
//import Cookies from "js-cookie";

axios.defaults.baseURL = "https://qdemy.onrender.com";

//http://localhost:6003
//https://qdemy.onrender.com
//https://qdemy-ten.vercel.app

//axios default headers

axios.defaults.headers.common["Content-Type"] = "application/json";

axios.defaults.withCredentials = true;

const jwt_token = Cookies.get("token");
if (jwt_token) {
  axiosInstance.defaults.headers.common["token"] = jwt_token;
  console.log("setting axios container");
}

//   // axios.interceptors.request.use(
//   //   (config) => {
//   //     const jwtToken = Cookies.get("token"); // Make sure you have the 'Cookies' library imported and configured correctly

//   //     if (jwtToken) {
//   //       config.headers.common["token"] = jwtToken;
//   //     }

//   //     return config;
//   //   },
//   //   (error) => {
//   //     // Handle request error
//   //     return Promise.reject(error);
//   //   }
//   // );
// }

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
