import React from "react";
import { useEffect, useState } from "react";
import Editcard from "./editcard";

import axios from "axios";
import { ClipLoader } from "react-spinners";

function Editcoursedetail() {
  const [course, setcourse] = useState([]);

  //console.log(course);

  useEffect(() => {
    //console.log("fetching from server");
    axios
      .get("/api/courses")

      .then((data) => setcourse(data.data.courseDetails));
  }, []);

  return (
    <>
      {course && course.length < 1 ? (
        <ClipLoader loading={true} />
      ) : (
        course.map((data) => <Editcard details={data} key={data._id} />)
      )}

      {/* {course &&
        course.length > 0 &&
        course.map((data) => <Card details={data} key={data.courseId} />)} */}
    </>
  );
}

export default Editcoursedetail;
