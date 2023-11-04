import React from "react";
import { useEffect, useState } from "react";
import Editcard from "./editcard";

import { ClipLoader } from "react-spinners";
import { axiosInstance } from "../api/axios";

function Editcoursedetail({ setDbchange, dbChange }) {
  const [course, setcourse] = useState([]);

  //console.log(course);

  useEffect(() => {
    //console.log("fetching from server");

    axiosInstance
      .get("/api/courses")

      .then((data) => setcourse(data.data.courseDetails));
  }, [dbChange]);

  return (
    <>
      {course && course.length < 1 ? (
        <ClipLoader loading={true} />
      ) : (
        course.map((data) => (
          <Editcard setDbchange={setDbchange} details={data} key={data._id} />
        ))
      )}

      {/* {course &&
        course.length > 0 &&
        course.map((data) => <Card details={data} key={data.courseId} />)} */}
    </>
  );
}

export default Editcoursedetail;
