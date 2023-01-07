import { useQuery } from '@tanstack/react-query';

import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { UserContext } from '../../../Context/Context';

const UsersList = () => {
    const { user } = useContext(UserContext)

    
    const { data: users=[],refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async  () => {
            const res = await fetch(`https://usedcycle-server.vercel.app/users?email=${user.email}`,{
                headers: { authorization:`Barear ${localStorage.getItem('token')}`   }
            })
            const data = await res.json();
            return data;
        }
    });
    const handleDelete = (id) => {
        fetch(`https://usedcycle-server.vercel.app/users/${id}`,{
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
            if (data.deletedCount>0) {
                toast.success('deleted successfuly')
                refetch()

            }
            })
            .catch(error => {
            console.log(error);
        })
  }
  const handleRoleToAdmin = (id) => {
    fetch(`https://usedcycle-server.vercel.app/users/admin/${id}?email=${user.email}`, {
      method: "PATCH",
      headers: {
        authorization: `Barear ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Role Changed successfuly");
          refetch();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleRoleToSub = (id) => {
    fetch(`https://usedcycle-server.vercel.app/users/subscriber/${id}?email=${user.email}`, {
      method: "PATCH",
      headers: {
        authorization: `Barear ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Role Changed successfuly");
          refetch();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
    // const users = datas.data
    // console.log(users.data);
    // const users=[...datas]
    console.log(users);
    return (
      <div className="overflow-x-auto w-full">
        <div className="flex justify-between px-10 items-center content-center  my-5">
          <h2 className="font-semibold text-lg">My Appointments</h2>{" "}
          <button className="btn">date</button>
        </div>
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
              {/* <th className="text-center">action</th> */}
            </tr>
          </thead>
          <tbody>
            {/* {datas.data.map(data=><li>data</li>)} */}

            {users.map((user, index) => (
              <tr className="border">
                <th></th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role!=='admin' ? (
                    <button
                      className="btn btn-primary"
                      onClick={() => handleRoleToAdmin(user._id)}
                    >
                      Make Admin
                    </button>
                  ) : (
                    <button
                      className="btn btn-gost"
                      onClick={() => handleRoleToSub(user._id)}
                    >
                      Make Subscriber
                    </button>
                  )}
                </td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
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

export default UsersList;