import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar(props) {
  const navigate = useNavigate();
  function toHome() {
    navigate("/home");
  }
  function toProfile() {
    navigate("/profile");
  }
  function logout() {
    const cookies = Cookies.get(); // Get all cookies

    for (const cookieName in cookies) {
      // Remove each cookie
      Cookies.remove(cookieName);
    }
    axios.post("/api/user/logout").then((res) => console.log(res));
  }
  let usersName = "null";
  if (Cookies.get("username")) {
    usersName = Cookies.get("username");
  }
  console.log(props.cart.length);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        <h1 onClick={toHome}>Qdemy</h1>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            <li className="nav-item">
              <h6 className="pb-0 mb-0" aria-current="page" onClick={toHome}>
                Home
              </h6>
            </li>
          </ul>
          <form className="d-flex">
            <h6 onClick={toProfile} className="me-5 pt-2">
              {usersName}
            </h6>
            <Link to="/cart">
              <button className="btn btn-outline-dark me-4" type="submit">
                <i className="bi-cart-fill me-1" />
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">
                  {props.cart.length}
                </span>
              </button>
            </Link>
            <Link to="/login">
              <button
                className="btn btn-outline-dark"
                type="submit"
                onClick={logout}
              >
                Logout
              </button>
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
