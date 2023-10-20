import axios from "axios";
import Cartdetails from "../comp/cartdetails";

import Navbar from "../comp/navbar";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Cart() {
  const [userCartData, setUserCartData] = useState({});
  const [CartChange, setCartChange] = useState(true);
  useEffect(() => {
    let token = Cookies.get("token");
    const config = {
      headers: {
        "Content-Type": "application/json",
        token,
      },
      withCredentials: true,
    };
    axios.get("/api/user/cart", config).then((res) => {
      console.log(res.data.messg);
      let userCartData = res.data.messg.dbdata[0].cart;
      setUserCartData(userCartData);
    });
  }, [CartChange]);

  return (
    <>
      <Navbar cart={userCartData} />

      <>
        <header className="bg-dark bg-opacity-50 bg-gradient py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-black">
              <h1 className="display-3 fw-bolder">Cart</h1>
            </div>
          </div>
        </header>
      </>
      <section className="py-0 ">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <Cartdetails
              userCartData={userCartData}
              setCartChange={setCartChange}
            />
          </div>
        </div>
      </section>
      <div className="text-center mb-5">
        <button type="button" className="btn btn-dark btn-lg">
          Check Out
        </button>
      </div>
    </>
  );
}
