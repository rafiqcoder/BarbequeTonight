import Link from 'next/link';
import { useSelector } from 'react-redux';

const DashSidebar = ({admin}) => {
  // const {loading} = useSelector(state => state.userAuth)
  const {activeUser} = useSelector((state) => state.userAuth);
  // const activeUser = user?.user;
 
  // const [isAdmin] = UseAdmin(user?.email)
  // if (loading) {
  //   return <div>Loading ...</div>;
  // }
    
  
    return (
      <div className="flex flex-col sm:w-64 flex-1  sm:flex-none sm:h-screen py-8 bg-blue-900 border-r  text-white">
        <h2 className="text-3xl font-semibold text-center text-white ">
          Wellcome
        </h2>

        <div className="flex flex-col items-center mt-6 -mx-2">
          <img
            className="object-cover w-24 h-24 mx-2 rounded-full"
            src={activeUser?.photoURL}
            alt="avatar"
          />
          <h4 className="mx-2 mt-2 font-medium text-white hover:underline">
            {activeUser?.displayName}
          </h4>
          <p className="mx-2 mt-1 text-sm font-medium text-white hover:underline">
           {activeUser?.email}
          </p>
        </div>

        <div className="flex flex-col justify-between flex-1 mt-6 w-full">
          <nav>
            <Link
              href="/dashboard"
              className="flex items-center px-4 py-2 text-gray-700 bg-gray-100"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="mx-4 font-medium">Dashboard</span>
            </Link>

            <Link
              href="/dashboard/my-orders"
              className="flex items-center px-4 py-2 mt-5 text-whitetransition-colors duration-300 transform hover:bg-gray-200 hover:text-gray-700"
            >
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="mx-4 font-medium">My Orders</span>
            </Link>
            {admin && (
              <div>
                <Link
                  href="/dashboard/AllBBQProduct"
                  className="flex items-center px-4 py-2 mt-5 text-whitetransition-colors duration-300 transform  hover:bg-gray-200 hover:text-gray-700"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="mx-4 font-medium">BBQ Products</span>
                </Link>
                            <Link
                href="/dashboard/AllBBQProduct"
                className="flex items-center px-4 py-2 mt-5 text-whitetransition-colors duration-300 transform  hover:bg-gray-200 hover:text-gray-700"
                            >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="mx-4 font-medium">Bundle Products</span>
                            </Link>
                            <Link
                href="/dashboard/addBBQProduct"
                className="flex items-center px-4 py-2 mt-5 text-whitetransition-colors duration-300 transform  hover:bg-gray-200 hover:text-gray-700"
                            >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="mx-4 font-medium">Add BBQ Product</span>
                            </Link>
                            <Link
                href="/dashboard/addBundle"
                className="flex items-center px-4 py-2 mt-5 text-whitetransition-colors duration-300 transform  hover:bg-gray-200 hover:text-gray-700"
                            >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="mx-4 font-medium">Add Bundle Product</span>
                            </Link>
                
                            <Link
                href="/dashboard/add-categories"
                className="flex items-center px-4 py-2 mt-5 text-whitetransition-colors duration-300 transform  hover:bg-gray-200 hover:text-gray-700"
                            >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="mx-4 font-medium">Add Categories</span>
                            </Link>
                            <Link
                href="/dashboard/reports"
                className="flex items-center px-4 py-2 mt-5 text-whitetransition-colors duration-300 transform  hover:bg-gray-200 hover:text-gray-700"
                            >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-red-600 flex-shrink-0 w-8 h-8 rounded-full p-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span className="mx-4 font-medium">Analytics</span>
                            </Link>
                            <Link
                href="/dashboard/reports"
                className="flex items-center px-4 py-2 mt-5 text-whitetransition-colors duration-300 transform  hover:bg-gray-200 hover:text-gray-700"
                            >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-red-600 flex-shrink-0 w-8 h-8 rounded-full p-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span className="mx-4 font-medium">All Users</span>
                            </Link>
                            <Link
                href="/dashboard/reports"
                className="flex items-center px-4 py-2 mt-5 text-whitetransition-colors duration-300 transform  hover:bg-gray-200 hover:text-gray-700"
                            >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-red-600 flex-shrink-0 w-8 h-8 rounded-full p-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span className="mx-4 font-medium">Paid Users</span>
                            </Link>
              </div>)}
          </nav>
        </div>
      </div>
    );
};

export default DashSidebar;