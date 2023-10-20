import React, { useState } from "react";
import "../styles/signup.css";

import Authnavbar from "../comp/authnavbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    pass1: "",
    pass2: "",
  });

  function userChange(event) {
    const [name, value] = [event.target.name, event.target.value];
    setUser((prev) => ({ ...prev, [name]: value }));
  }

  function formsubmitted(event) {
    event.preventDefault();
    if (user.pass1 === user.pass2) {
      formSub();
      async function formSub() {
        try {
          await axios.post("/api/user/", {
            ...user,
            password: user.pass1,
          });
          alert("user Created successfully ");
          navigate("/login");
        } catch (err) {
          alert("user name or email already exist");
          console.log(err);
        }
      }
    } else {
      alert("password mismatch");
    }

    console.log("form submitted");
  }
  console.log(user);
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
                    Sign up
                  </p>
                  <form onSubmit={formsubmitted} className="mx-1 mx-md-4">
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-user fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          required
                          type="text"
                          id="form3Example1c"
                          name="name"
                          value={user.name}
                          onChange={userChange}
                          className="form-control"
                          minLength={3}
                        />
                        <label className="form-label" htmlFor="form3Example1c">
                          User Name
                        </label>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          required
                          type="email"
                          id="form3Example3c"
                          className="form-control"
                          name="email"
                          value={user.email}
                          onChange={userChange}
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
                          type="password"
                          id="form3Example4c"
                          className="form-control"
                          name="pass1"
                          onChange={userChange}
                          value={user.pass1}
                          minLength={6}
                          required
                        />
                        <label className="form-label" htmlFor="form3Example4c">
                          Password
                        </label>
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <i className="fas fa-key fa-lg me-3 fa-fw" />
                      <div className="form-outline flex-fill mb-0">
                        <input
                          type="password"
                          id="form3Example4cd"
                          className="form-control"
                          name="pass2"
                          onChange={userChange}
                          value={user.pass2}
                          required
                        />
                        <label className="form-label" htmlFor="form3Example4cd">
                          Re-enter password
                        </label>
                      </div>
                    </div>

                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="submit" className="btn btn-dark btn-lg">
                        Register
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
