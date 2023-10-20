import React from "react";

import Cartcard from "./cartcard";

function Cartdetail({ userCartData = {}, setCartChange }) {
  //const [cart,setcart]=useState([]);

  return (
    <>
      {userCartData.length < 1 ? (
        <img
          alt="altu"
          src="https://media.istockphoto.com/id/861576608/vector/empty-shopping-bag-icon-online-business-vector-icon-template.jpg?s=612x612&w=0&k=20&c=I7MbHHcjhRH4Dy0NVpf4ZN4gn8FVDnwn99YdRW2x5k0="
        />
      ) : (
        userCartData &&
        userCartData.length > 0 &&
        userCartData.map((data, i) => (
          <Cartcard
            details={data}
            key={data.courseId}
            setCartChange={setCartChange}
          />
        ))
      )}
    </>
  );
}

export default Cartdetail;
