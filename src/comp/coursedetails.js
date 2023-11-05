import React from "react";
import { useEffect, useState } from "react";
import Card from "./card";

//import axios from "axios";
import { ClipLoader } from "react-spinners";
//import { axiosInstance } from "../api/axios";
//import axios from "axios";
//import Cookies from "js-cookie";
import { axiosInstance } from "../api/axios";
//import Cookies from "js-cookie";
//import axiosWithToken from "../api/axios";
//import axiosInstance from "../api/axios";

function Coursedetail() {
  const [course, setcourse] = useState(false);

  //console.log(course);

  useEffect(() => {
    console.log("fetching from server");

    // let token = Cookies.get("token");
    // const head = {
    //   headers: {
    //     "Content-Type": "application/json",
    //     token,
    //   },

    //   withCredentials: true,
    // };

    axiosInstance
      .get("/api/courses")

      .then((data) => setcourse(data.data.courseDetails))
      .catch((error) => {
        // Handle the error, e.g., log it
        console.error("An error occurred:", error);
      });
  }, []);

  return (
    <>
      {course ? (
        course.map((data) => <Card details={data} key={data._id} />)
      ) : (
        <ClipLoader loading={true} />
      )}

      {/* {course &&
        course.length > 0 &&
        course.map((data) => <Card details={data} key={data.courseId} />)} */}
    </>
  );
}

export default Coursedetail;
