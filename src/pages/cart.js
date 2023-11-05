import Cartdetails from "../comp/cartdetails";
import { ClipLoader } from "react-spinners";
import Navbar from "../comp/navbar";
import { useEffect, useState } from "react";
import { axiosInstance } from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  let [loading, setLoading] = useState(false);

  const [userCartData, setUserCartData] = useState(false);
  const [CartChange, setCartChange] = useState(true);
  useEffect(() => {
    // const jwt_token = Cookies.get("token");
    // if (jwt_token) {
    //   axios.defaults.headers.common["token"] = jwt_token;

    // }
    console.log("getting cart data");
    axiosInstance.get("/api/user/cart").then((res) => {
      //console.log(res.data.messg);
      let userCartData = res.data.messg.dbdata[0].cart;
      setUserCartData(userCartData);
    });
  }, [CartChange]);

  //check out
  //
  //
  const initPayment = (data) => {
    const options = {
      key: "rzp_test_63i4zIRkULzdJE",

      amount: data.amount,
      currency: data.currency,
      name: "Qdemy",
      description: "Test Transaction",

      order_id: data.id,
      handler: async (response) => {
        try {
          const { data } = await axiosInstance.post(
            "/api/payment/verify",
            response
          );
          //console.log(data);
          navigate("/home");

          alert(data.message);
        } catch (error) {
          //console.log(error);
        }
      },
      theme: {
        color: "#000000",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
    setLoading(false);
  };

  //order creation
  const handlePayment = async () => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.post("/api/payment/order", {
        amount: 100,
      });
      //console.log(data);
      initPayment(data.data);
    } catch (error) {
      //console.log(error);
    }
  };
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
        {userCartData.length > 0 ? (
          <>
            {loading ? (
              <ClipLoader loading={loading} />
            ) : (
              <button
                onClick={handlePayment}
                type="button"
                className="btn btn-dark btn-lg"
              >
                Check Out
              </button>
            )}
          </>
        ) : null}
      </div>
    </>
  );
}
