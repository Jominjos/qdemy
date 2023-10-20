import React from "react";
import { useEffect, useState } from "react";
import Card from "./card";

import axios from "axios";

function Coursedetail({ cart = {}, setcart = {} }) {
  const [course, setcourse] = useState([]);
  //const [cart,setcart]=useState([]);
  console.log(course);

  useEffect(() => {
    axios
      .get("/api/courses")

      .then((data) => setcourse(data.data.courseDetails));
  }, []);

  console.log(cart);
  return (
    <>
      {course &&
        course.length > 0 &&
        course.map((data) => <Card details={data} key={data.courseId} />)}
    </>
  );
}

export default Coursedetail;
