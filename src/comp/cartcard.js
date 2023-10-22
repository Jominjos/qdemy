import "./card.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

import ClipLoader from "react-spinners/ClipLoader";
function Cartcard({ details = {}, setCartChange }) {
  let [loading, setLoading] = useState(false);
  console.log(details);
  function remFromCart1(data) {
    setLoading(true);
    let item = { id: data._id };
    console.log(item);
    let token = Cookies.get("token");
    const head = {
      headers: {
        "Content-Type": "application/json",
        token,
      },

      withCredentials: true,
    };

    axios.put("/api/user/cart", item, head).then((res) => {
      console.log(res);
      setCartChange((prev) => !prev);
      //setLoading(false);
    });
  }

  return (
    <>
      <div className="col  mb-5">
        <div className="card h-100">
          {/* Product image*/}
          <img className="img-fluid " src={details.courseimg} alt="..." />
          {/* Product details*/}
          <div className="card-body p-4 cardsbody">
            <div className="text-center">
              {/* Product name*/}
              <h5 className="fw-bolder">{details.courseName}</h5>
              {/* Product price*/}
              {`₹ ${details.fees} `}
            </div>
          </div>
          {/* Product actions*/}
          <div className="card-footer text-center p-4 pt-0 border-top-0 bg-transparent">
            {loading ? (
              <ClipLoader loading={loading} />
            ) : (
              <button
                className="btn btn-outline-dark mt-auto  "
                onClick={() => remFromCart1(details)}
              >
                Remove
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Cartcard;
