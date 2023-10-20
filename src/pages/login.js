import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";

import Authnavbar from "../comp/authnavbar";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();
  const dvalue = {
    email: "",
    password: "",
  };
  const [cred, setCred] = useState(dvalue);

  function formchange(event) {
    const [name, value] = [event.target.name, event.target.value];
    setCred((prev) => ({ ...prev, [name]: value }));
  }
  console.log(cred);

  function formsubmitted(e) {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };

    axios
      .post("/api/user/auth", cred, config)
      .then((res) => {
        console.log(res);

        Cookies.set("token", res.data.token, { expires: 7 });
        Cookies.set("username", res.data.username, { expires: 7 });

        navigate("/home");
      })
      .catch((error) => {
        if (error.response) {
          console.error("Error Status:", error.response.status);
          console.error("Error Data:", error.response.data);
          alert("email or password incorrect");
        } else {
          console.error("An unexpected error occurred:", error.message);
        }
      });
    //
  }

  return (
    <>
      <Authnavbar />
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-6 col-xl-5">
              <div className="card text-black" style={{ borderRadius: 25 }}>
                <div className="card-body p-md-5">
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Login
                  </p>
                  <form className="mx-1 mx-md-4">
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
                      <button
                        type="button"
                        className="btn btn-dark btn-lg"
                        onClick={formsubmitted}
                      >
                        Login
                      </button>
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
