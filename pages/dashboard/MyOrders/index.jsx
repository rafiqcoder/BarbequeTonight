import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../../Components/Spinner/Spinner';
import { UserContext } from '../../../Context/Context';
import UseAdmin from '../../../hooks/UseAdmin';

const MyOrders = () => {
  const { user,loading } = useContext(UserContext);
  const [date,setDate] = useState('');
  const {adminLoading } = UseAdmin(user?.email);
  // const [myBookings,setMyBookings] = useState([]);

 
    
  
  const { data: myBookings = [], refetch } = useQuery({
    queryKey: ["myBookings", user?.email],
    queryFn: async () => {
      const response = await fetch(
        `https://usedcycle-server.vercel.app/booking?email=${user.email}`,{
          headers: {
            authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        }
      );
      const data = await response.json();
      return data;
    },
  });
   if (loading || adminLoading) {
     return <Spinner></Spinner>;
   }
  // console.log(myBookings);
    return (
      <div className="overflow-x-auto sm:w-8/12">
        <div className="flex justify-between px-10 items-center content-center  my-5">
          <h2 className="font-semibold text-lg">My Appointments</h2>
          <button className="btn">{date}</button>
        </div>
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Image</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Meeting</th>
              <th>Price</th>
              <th>Payment</th>
              {/* <th className="text-center">action</th> */}
            </tr>
          </thead>
          <tbody>
            {myBookings.map((booking, index) => (
              <tr key={booking._id} className="border">
                <th>{index + 1}</th>
                <td>
                  <img src={booking?.itemImg} alt="" className="w-16 h-16" />
                </td>
                <td>{booking?.itemName}</td>
                <td>{booking?.mobile}</td>
                <td>{booking?.meetingLocation}</td>
                <td>{booking?.salePrice}</td>
                <td>
                  {booking?.status === "paid" ? (
                    <Link className="btn btn-success">PAID</Link>
                  ) : (
                    <Link
                      className="btn btn-warning"
                      to={`/checkout/${booking._id}`}
                    >
                      PAY
                    </Link>
                  )}
                </td>
                {/* <td className="text-center">
                  <button className="btn btn-warning">Edit</button>
                  <button className="btn bg-red-500 text-white ml-10">
                    Delete
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
};

export default MyOrders;