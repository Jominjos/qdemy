import Cookies from "js-cookie";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  let auth = Cookies.get("token");
  auth ? console.log("true") : console.log("false");
  return <>{auth ? <Outlet /> : <Navigate to="login" />}</>;
};
export default PrivateRoutes;
