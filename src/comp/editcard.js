import "./card.css";

import { useState } from "react";

import ClipLoader from "react-spinners/ClipLoader";
import { axiosInstance } from "../api/axios";
function Editcard({ details = {}, setDbchange }) {
  let [loading, setLoading] = useState(false);

  // console.log(details);

  //   function editCourse(d) {
  //     setLoading(true);
  //     console.log(d);
  //   }
  function remCoures(data) {
    console.log(data);
    let detail = { ...data };
    setLoading(true);

    axiosInstance
      .post("/api/courses/del", { ...detail })
      .then((res) => {
        console.log(res);
        setLoading(false);
        setDbchange((prev) => !prev);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Request failed:", error);
        alert("Contact SuperAdmin to Delete");
        setLoading(false);
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
              <>
                {/* <button
                  className="btn btn-outline-dark mt-auto me-2"
                  onClick={() => editCourse(details)}
                >
                  Edit
                </button> */}
                <button
                  className="btn btn-outline-dark mt-auto  "
                  onClick={() => remCoures(details)}
                >
                  Delete
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default Editcard;
