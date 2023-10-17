import React from "react";
import { useEffect, useState } from "react";
import Card from "./card";

import axios from "axios";

function Coursedetail({ cart = {}, setcart = {} }) {
  const [course, setcourse] = useState([]);
  //const [cart,setcart]=useState([]);
  console.log(course);
  function addToCart(data) {
    console.log(data.details);
    let data1 = data.details;
    let cartCopy = [...cart];
    cartCopy.push(data1);
    setcart(cartCopy);
  }
  function remFromCart(data) {
    console.log(data.details);
    let cartCopy = [...cart];
    let idToRemove = data.details.courseId;

    cartCopy = cartCopy.filter((item) => item.courseId !== idToRemove);
    setcart(cartCopy);
  }

  useEffect(() => {
    axios
      .get("/api/courses")

      .then((data) => setcourse(data.data.courseDetails));
  }, []);

  function butdisfunc(data) {
    //console.log(data)
    let disb = false;
    cart.forEach((c) => {
      if (c.courseId === data) disb = true;
    });
    return disb;
  }

  function remdisabled(data) {
    let remdisb = true;

    cart.forEach((c) => {
      if (c.courseId === data) remdisb = false;
    });

    return remdisb;
  }

  console.log(cart);
  return (
    <>
      {course &&
        course.length > 0 &&
        course.map((data) => (
          <Card
            details={data}
            key={data.courseId}
            addToCart={addToCart}
            remFromCart={remFromCart}
            butdisabled={butdisfunc(data.courseId)}
            remdisabled={remdisabled(data.courseId)}
          />
        ))}
    </>
  );
}

export default Coursedetail;
