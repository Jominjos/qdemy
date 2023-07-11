import React from "react";
import { Link } from "react-router-dom";
import Cart from "../pages/cart";

function Navbar(props){
  console.log(props.cart.length);
    return(
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container px-4 px-lg-5">
     
      <Link to="/">
      <a className="navbar-brand" >
    
    Qdemy 
     
    </a>
      </Link>
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
           
            <Link to="/">
            <a className="nav-link active" aria-current="page" href="#!">
            Home
            </a>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#!">
              About
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Shop
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a className="dropdown-item" href="#!">
                  All Products
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Popular Items
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  New Arrivals
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <form className="d-flex">
          <Link to="/cart">
          <button className="btn btn-outline-dark" type="submit">
      
            <i className="bi-cart-fill me-1" />
            
            Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill">
              {props.cart.length}
            </span>
          </button>
          </Link>
         
        </form>
      </div>
    </div>
  </nav>
)}
export default Navbar;