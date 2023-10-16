import React from "react";

import Cartcard from "./cartcard";

function Cartdetail({ cart = {}, setcart = {} }) {
  //const [cart,setcart]=useState([]);
  console.log(cart);

  function remFromCart1(data) {
    console.log(data.details);
    let cartCopy = [...cart];
    let idToRemove = data.details.courseId;

    cartCopy = cartCopy.filter((item) => item.courseId !== idToRemove);
    setcart(cartCopy);
  }

  console.log(cart.details);
  return (
    <>
      {cart.length < 1 ? (
        <img
          alt="altu"
          src="https://media.istockphoto.com/id/861576608/vector/empty-shopping-bag-icon-online-business-vector-icon-template.jpg?s=612x612&w=0&k=20&c=I7MbHHcjhRH4Dy0NVpf4ZN4gn8FVDnwn99YdRW2x5k0="
        />
      ) : (
        cart &&
        cart.length > 0 &&
        cart.map((data, i) => (
          <Cartcard
            details={data}
            key={data.courseId}
            remFromCart1={remFromCart1}
          />
        ))
      )}
    </>
  );
}

export default Cartdetail;
