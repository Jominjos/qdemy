import axios from "axios";
import "./card.css";
import Star from "./star";
import Cookies from "js-cookie";

function Card({ details = {} }) {
  let rate = details.rating;

  function addToCart(data) {
    let item = { id: data._id };
    let token = Cookies.get("token");
    const head = {
      headers: {
        "Content-Type": "application/json",
        token,
      },

      withCredentials: true,
    };
    console.log(data);
    axios.post("/api/user/cart", item, head).then((res) => {
      if (res.data.alert) {
        alert(res.data.message);
      }
    });
  }
  return (
    <div className="col mb-5 cards" id="card">
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

          <div id="star-con">
            {rate && rate.length > 0 && rate.map((data, i) => <Star key={i} />)}
          </div>
        </div>
        {/* Product actions*/}
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center but-con">
            <button
              className="btn btn-outline-dark mt-auto"
              onClick={() => addToCart(details)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
