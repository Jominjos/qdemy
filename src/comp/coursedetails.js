import React from "react";
import { useEffect, useState } from "react";
import Card from "./card";

import axios from "axios";
import { ClipLoader } from "react-spinners";

function Coursedetail() {
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
        course.map((data) => <Card details={data} key={data.courseId} />)
      )}

      {/* {course &&
        course.length > 0 &&
        course.map((data) => <Card details={data} key={data.courseId} />)} */}
    </>
  );
}

export default Coursedetail;
