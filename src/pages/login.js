import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";

export default function Login() {
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

  function logout(e) {
    e.preventDefault();
    //logout
    // /axios.post("https://qdemy.onrender.com/api/user/logout").then((res) => {
    //   console.log(res);
    // });
    Cookies.remove("jwt");
  }
  function getuser(e) {
    e.preventDefault();

    axios
      .get("https://qdemy.onrender.com/api/user/profile", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
      });
  }
  function formsubmitted(e) {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    axios
      .post("https://qdemy.onrender.com/api/user/auth", cred, config)
      .then((res) => {
        console.log(res);

        Cookies.set("jwt", res.data.token, { expires: 7 });
      })
      .catch((error) => {
        if (error.response) {
          console.error("Error Status:", error.response.status);
          console.error("Error Data:", error.response.data);
        } else {
          console.error("An unexpected error occurred:", error.message);
        }
      });
    //
  }

  return (
    <>
      <form>
        <div>
          <p>email</p>
          <input
            placeholder="email"
            type="email"
            name="email"
            value={cred.email}
            onChange={formchange}
          ></input>
        </div>
        <div>
          <p>password</p>
          <input
            placeholder="password"
            type="password"
            name="password"
            value={cred.password}
            onChange={formchange}
          ></input>
        </div>
        <button onClick={formsubmitted}>LOGIN</button>
        <button onClick={logout}>LOGOUT</button>
        <button onClick={getuser}>get user</button>
      </form>
    </>
  );
}
