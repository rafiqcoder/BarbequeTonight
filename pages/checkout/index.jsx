
import React,{ useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Layout from "../../Layout/Layout";

export default function Checkout() {
  const { cart, grandTotal } = useSelector((state) => state.cart);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [changeText1,setChangeText1] = useState("City");
  const {activeUser,loading} = useSelector(state => state.userAuth)
const {
  register,
  formState: { errors },
  handleSubmit,
} = useForm();
  const HandleText1 = (e) => {
    setChangeText1(e);
    setDropdown1(false);
  };



  

  const handleCheckout = (data) => {
    const cartData = [...cart, grandTotal],
      orderData = {
        cartData,
        ...data,
      };
    fetch(`http://localhost:5000/orderBbq`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.href = data.url;
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Layout>
      <div className="overflow-y-hidden">
        <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">
          <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
            <div className="flex w-full  flex-col justify-start items-start">
              <div className>
                <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                  Check out
                </p>
              </div>
              <div className="mt-2">
                <a
                  href="javascript:void(0)"
                  className="text-base leading-4 underline  hover:text-gray-800 text-gray-600"
                >
                  Back to my bag
                </a>
              </div>
              <div className="mt-12">
                <p className="text-xl font-semibold leading-5 text-gray-800">
                  Shipping Details
                </p>
              </div>
              <form
                className="mt-8 flex flex-col justify-start items-start w-full space-y-8 "
                onSubmit={handleSubmit(handleCheckout)}
              >
                <input
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                  className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                  placeholder="First Name"
                />
                {errors.firstName && (
                  <p
                    role="alert"
                    className="text-red-500 text-xs font-medium mt-2"
                  >
                    {errors.firstName?.message}
                  </p>
                )}

                <input
                  {...register("lastName", {
                    required: "lastName is required",
                  })}
                  className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                  placeholder="Last Name"
                />
                {errors.lastName && (
                  <p
                    role="alert"
                    className="text-red-500 text-xs font-medium mt-2"
                  >
                    {errors.lastName?.message}
                  </p>
                )}
                <input
                  {...register("email", {
                    required: "email is required",
                  })}
                  className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                  placeholder="email"
                />
                {errors.email && (
                  <p
                    role="alert"
                    className="text-red-500 text-xs font-medium mt-2"
                  >
                    {errors.email?.message}
                  </p>
                )}
                <input
                  {...register("Address", {
                    required: "Address is required",
                  })}
                  className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                
                  placeholder="Address"
                />
                {errors.Address && (
                  <p
                    role="alert"
                    className="text-red-500 text-xs font-medium mt-2"
                  >
                    {errors.Address?.message}
                  </p>
                )}

                <input
                  {...register("phoneNumber", {
                    required: "Address is required",
                  })}
                  className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4   w-full"
                  
                  placeholder="Phone Number"
                />
              <button type="submit" className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">
                Proceed to payment
              </button>
              </form>
              <div className="mt-4 flex justify-start items-center w-full">
                <a
                  href="javascript:void(0)"
                  className="text-base leading-4 underline focus:outline-none focus:text-gray-500  hover:text-gray-800 text-gray-600"
                >
                  Back to my bag
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start bg-gray-50 w-full p-6 md:p-14">
              <div>
                <h1 className="text-2xl font-semibold leading-6 text-gray-800">
                  Order Summary
                </h1>
              </div>
              <div className="flex mt-7 flex-col items-end w-full space-y-6">
                <div className="flex justify-between w-full items-center">
                  <p className="text-lg leading-4 text-gray-600">Total items</p>
                  <p className="text-lg font-semibold leading-4 text-gray-600">
                    20
                  </p>
                </div>
                <div className="flex justify-between w-full items-center">
                  <p className="text-lg leading-4 text-gray-600">
                    Total Charges
                  </p>
                  <p className="text-lg font-semibold leading-4 text-gray-600">
                    $2790
                  </p>
                </div>
                <div className="flex justify-between w-full items-center">
                  <p className="text-lg leading-4 text-gray-600">
                    Shipping charges
                  </p>
                  <p className="text-lg font-semibold leading-4 text-gray-600">
                    $90
                  </p>
                </div>
                <div className="flex justify-between w-full items-center">
                  <p className="text-lg leading-4 text-gray-600">Sub total </p>
                  <p className="text-lg font-semibold leading-4 text-gray-600">
                    $3520
                  </p>
                </div>
              </div>
              <div className="flex justify-between w-full items-center mt-32">
                <p className="text-xl font-semibold leading-4 text-gray-800">
                  Estimated Total{" "}
                </p>
                <p className="text-lg font-semibold leading-4 text-gray-800">
                  $2900
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
