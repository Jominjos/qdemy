import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import Authnavbar from "../comp/authnavbar";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { axiosInstance } from "../api/axios";
export default function Login() {
  let [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dvalue = {
    email: "",
    password: "",
  };
  const [cred, setCred] = useState(dvalue);
  const Notify = () => {
    toast.error("email or password incorrect");
  };
  function formchange(event) {
    const [name, value] = [event.target.name, event.target.value];
    setCred((prev) => ({ ...prev, [name]: value }));
  }
  //console.log(cred);
  //wake up server

  axios.get("https://qdemy.onrender.com/wakeup").then((res) => {
    console.log(res);
  });
  function formsubmitted(e) {
    e.preventDefault();
    setLoading(true);

    axios
      .post("https://qdemy.onrender.com/api/user/auth", cred)
      .then((res) => {
        //console.log(res);
        console.log("num1");
        Cookies.set("token", res.data.token, { expires: 7 });
        Cookies.set("username", res.data.username, { expires: 7 });

        if (res.data.token) {
          axiosInstance.defaults.headers.common["token"] = res.data.token;
          console.log("setting axios from login");
        }
      })
      .then(() => {
        console.log("num 2");
        navigate("/home");
      })
      .catch((error) => {
        setLoading(false);

        if (error.response) {
          console.error("Error Status:", error.response.status);
          console.error("Error Data:", error.response.data);
          Notify();
        } else {
          console.error("An unexpected error occurred:", error.message);
        }
      });
    //
  }

  return (
    <>
      <Authnavbar />
      <ToastContainer position={toast.POSITION.TOP_CENTER} autoClose={3000} />
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-6 col-xl-5">
              <div className="card text-black" style={{ borderRadius: 25 }}>
                <div className="card-body p-md-5">
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Login
                  </p>
                  <form onSubmit={formsubmitted} className="mx-1 mx-md-4">
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          placeholder="email"
                          type="email"
                          name="email"
                          value={cred.email}
                          onChange={formchange}
                          className="form-control"
                          required
                        />
                        <label className="form-label" htmlFor="form3Example3c">
                          Email
                        </label>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-lock fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          required
                          placeholder="password"
                          type="password"
                          name="password"
                          value={cred.password}
                          onChange={formchange}
                          className="form-control"
                        />
                        <label className="form-label" htmlFor="form3Example4c">
                          Password
                        </label>
                      </div>
                    </div>

                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      {loading ? (
                        <ClipLoader loading={loading} />
                      ) : (
                        <button type="submit" className="btn btn-dark btn-lg">
                          Login
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
