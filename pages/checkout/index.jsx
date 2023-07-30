import { Base_url } from "@/src/store/utils";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../Layout/Layout";
import { storeOrderData } from "../../src/store/orderSlice";

export default function Checkout() {
  const { cart, grandTotal } = useSelector((state) => state.cart);
  const [dropdown1, setDropdown1] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [changeText1, setChangeText1] = useState("City");
  const { activeUser, loading } = useSelector((state) => state.userAuth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const HandleText1 = (e) => {
    setChangeText1(e);
    setDropdown1(false);
  };

  const [shipping, setShipping] = useState(90);

  // console.log('cart',cart);

  const dispatch = useDispatch();
  const handleCheckout = (data) => {
    // const cartData = [...cart, ],
    const orderData = {
      products: cart,
      grandTotal: grandTotal,
      userData: data,
    };
    // console.log("orderData", orderData);
    fetch(`${Base_url}/order`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(orderData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          // console.log("checkoutData", data);
          dispatch(storeOrderData(data.data));

          window.location.href = data.url;
          // console.log("data", data);
        }
        //redirect to payment gateway
      })
      .catch((err) => {
        console.log("checkoutError", err);
      });
  };

  // const payNow = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const finalTotal=grandTotal+shipping
  //     const response = await axios.post(`${Base_url}/order`, {
  //       nameOnCard: "John Doe",
  //       cardNumber: "1234567890123456",
  //       expDate: "12/23",
  //       cvv: "123",
  //       billingAddress: "123 Main St.",
  //       amount: "10.00",
  //       cart: [...cart],
  //       grandTotal: finalTotal,
  //     });
  //     console.log(response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const array = ["image", "Name", "Price", "Quantity", "Total", "Remove"];
  return (
    <Layout>
      <div className="rounded-lg  pb-5 p-3">
        <div className=" flex flex-col justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9  md:px-6 lg:px-20 xl:px-44">
          <div className="">
            <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
              Check out
            </p>
          </div>
          <div className="mt-2">
            <a className="text-base leading-4 underline  hover:text-gray-800 text-gray-600">
              Back to my bag
            </a>
          </div>
        </div>

        <div className=" flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9  md:px-6 lg:px-20 xl:px-44">
          <div className="w-full">
            <div>
              <ul className=" w-full flex justify-between text-center items-center 2xl:container lg:py-3 px-5 ml-4">
                {array.map((item, i) => (
                  <li
                    className={`/={
                      i === 0
                        ? "w-[100px]"
                        : item === "Quantity"
                        ? "w-[100px]"
                        : "w-[80pX]"
                    } text-center`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {cart.map((item) => (
              <>
                <div
                  key={item._id}
                  className="flex items-center justify-between p-1 border m-1 rounded-l-full "
                >
                  <img
                    className="w-[100px] p-1 mr-2 rounded-full"
                    src={item.thumb ? item.thumb : item.menu[0]?.thumb}
                    alt="/"
                  />
                  <h2 className="text-black text-lg">{item.name}</h2>

                  <p className="text-xl text-black">
                    {item.price ? item.price : item.menu[0].price}/=
                  </p>

                  <div className="flex">
                    <p
                      className="cursor-pointer text-lg text-black bg-white px-1 rounded-md text-center ml-4"
                      onClick={() => handleReduce(item)}
                    >
                      -
                    </p>
                    <p className="text-lg text-black bg-white px-3 rounded-md text-center ml-1">
                      {item.quantity}
                    </p>
                    <p
                      className="cursor-pointer text-lg text-black bg-white px-1 rounded-md text-center ml-1"
                      onClick={() => handleAddTocart(item)}
                    >
                      +
                    </p>
                  </div>

                  <p className="text-xl text-black">
                    {item.quantity * item.price}/=
                  </p>
                  <div className="flex">
                    <button
                      className=" text-lg text-white bg-red-500   text-center ml-1 rounded-full border-none max-w-fit px-2 mr-1"
                      onClick={() => handleRemove(item)}
                    >
                      X
                    </button>
                  </div>
                </div>
              </>
            ))}
            <div className="w-[400px] ml-auto">
              <div className="w-full flex justify-evenly">
                <label htmlFor="">Coupon </label>
                <input type="text" className="border w-full" />
              </div>

              <div className="w-full flex justify-between">
                <p>Subtotal</p>
                <p>{grandTotal}/=</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-y-hidden">
        <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">
          <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
            <div className="flex w-full  flex-col justify-start items-start">
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
                  className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full text-gray-400"
                  placeholder="email"
                  value={activeUser?.email}
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
                  {...register("address", {
                    required: "Address is required",
                  })}
                  className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
                  placeholder="Address"
                />
                {errors.address && (
                  <p
                    role="alert"
                    className="text-red-500 text-xs font-medium mt-2"
                  >
                    {errors.address?.message}
                  </p>
                )}

                <input
                  {...register("phone", {
                    required: "Address is required",
                  })}
                  className="focus:outline-none focus:ring-2 focus:ring-gray-500 px-2 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4   w-full"
                  placeholder="Phone Number"
                />
                {errors.phone && (
                  <p
                    role="alert"
                    className="text-red-500 text-xs font-medium mt-2"
                  >
                    {errors.phone?.message}
                  </p>
                )}
                <button
                  type="submit"
                  className="focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-red-700"
                >
                  Proceed to payment
                </button>
              </form>
              <div className="mt-4 flex justify-start items-center w-full">
                <a className="text-base leading-4 underline focus:outline-none focus:text-gray-500  hover:text-gray-800 text-gray-600">
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
                    {cart.length}
                  </p>
                </div>

                <div className="flex justify-between w-full items-center">
                  <p className="text-lg leading-4 text-gray-600">
                    Shipping charges
                  </p>
                  <p className="text-lg font-semibold leading-4 text-gray-600">
                    90 /=
                  </p>
                </div>
                <div className="flex justify-between w-full items-center">
                  <p className="text-lg leading-4 text-gray-600">Sub total </p>
                  <p className="text-lg font-semibold leading-4 text-gray-600">
                    {grandTotal} /=
                  </p>
                </div>
              </div>
              <div className="flex justify-between w-full items-center mt-32">
                <p className="text-xl font-semibold leading-4 text-gray-800">
                  Estimated Total{" "}
                </p>
                <p className="text-lg font-semibold leading-4 text-gray-800">
                  {grandTotal + shipping} /=
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
