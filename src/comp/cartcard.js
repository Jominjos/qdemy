import "./card.css";
function Cartcard({
  details = {},
  addToCart = {},
  butdisabled = {},
  remdisabled = {},
  remFromCart1 = {},
  cart = {},
}) {
  console.log(details);

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
            <button
              className="btn btn-outline-dark mt-auto  "
              onClick={() => remFromCart1({ details })}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cartcard;
