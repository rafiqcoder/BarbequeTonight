import React, { useEffect } from "react";
import { Base_url } from "@/src/store/utils";
import Link from "node_modules/next/link";
import { useRouter } from "node_modules/next/router";
import { useSelector } from "react-redux";
import { emptyCart } from "@/src/store/cartSlice";
import { useDispatch } from "react-redux";
const success = () => {
  const { orderData } = useSelector((state) => state.activeOrder);
    const { activeUser } = useSelector((state) => state.userAuth);
    console.log(activeUser?.email);
  const { query } = useRouter();
  console.log("query", query.tran_id);
  const transId = query?.tran_id;
  const dispatch = useDispatch();
  
  console.log("tran_id", transId);
  console.log("orderData",orderData);
  
  useEffect(() => {
    console.log("activeUser", activeUser);
    if (transId !== undefined) {
      fetch(`${Base_url}/ssl-payment-success/${transId}`, {
        method: "PATCH",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            console.log("data", data.cus_email);
            dispatch(
              emptyCart({
                userEmail: data.cus_email,
              })
            );
          }
          // console.log(data);
        })
        .catch((err) => console.log(err));
    }
  }, [transId]);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-1 rounded shadow-lg bg-gradient-to-r from-purple-500 via-green-500 to-blue-500">
        <div className="flex flex-col items-center p-4 space-y-2 bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-green-600 w-28 h-28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="text-4xl font-bold font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            Thank You !
          </h1>
          <p>
            Your payment has been successfully completed. We will contact you
          </p>
          <div className="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded rounded-full hover:bg-indigo-700 focus:outline-none focus:ring">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>
            <Link href="/" className="text-sm font-medium">
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default success;
