
import Link from 'next/link';
import { useContext,useState } from 'react';
import useSWR from 'swr';
import DashBoardLayout from "../../../Layout/DashBoardLayout";
import { AuthContext } from '../../../src/utils/Context/Context';

const fetcher = async () => {
  const res = await fetch('http://localhost:5000/AllBBQProducts');
  const data = await res.json();
  
  return data;
}

const MyProducts = () => {
  // const { currentUser } = useContext(DataContext);
  const { user } = useContext(AuthContext)
  const [loading,setLoading] = useState(false);
  const [refresh,setRefresh] = useState(false);

  const { data,error,isLoading } = useSWR('AllBBQProducts',fetcher)

  

    
      if (error) {
        return <div>Error ...</div>;
      }

      if (isLoading) {
        return <div>Loading ...</div>;
      } 
        
      
  
  // const handleDelete = (id) => {
        
  //       fetch(`https://usedcycle-server.vercel.app/my-products/${id}`, {
  //         method: "DELETE",
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           if (data.deletedCount > 0) {
  //             toast.success("deleted successfuly");
  //             setRefresh(!refresh);
  //           }
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //           setLoading(false);
  //         });
    
  //     };
  
      // choosedProduct.status = 'advertise';
    // console.log(choosedProduct);
        
        
    return (
      <DashBoardLayout>
        <div className="container px-4 sm:px-8 max-w-3xl flex justify-left items-base mt-10 content-left overflow-x-auto">
          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        User
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Name
                      </th>

                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        advertise
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((product) => (
                      <tr key={product._id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">
                              <Link href="/" className="block relative">
                                <img
                                  alt="profil"
                                  src={product?.img} width={200} height={200}
                                  className="mx-auto object-cover rounded-full h-10 w-10"
                                />
                              </Link>
                            </div>
                          </div>
                        </td>
                        <td>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {product.name}
                            </p>
                          </div>
                        </td>
                        <td>
                          <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">
                              {product.price} tk
                            </p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p>
                            paid
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          available
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                            ></span>
                            <Link href='/'
                              className="relative"
                              onClick={() => handleDelete(product._id)}
                            >
                              delete
                            </Link>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </DashBoardLayout>
    );
};

export default MyProducts;