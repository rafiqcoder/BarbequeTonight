import { addToCart,reduceQuantity } from '@/src/store/cartSlice';
import Link from 'next/link';
import { useContext } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { AuthContext } from '../../src/Context/Context';


const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const { grandTotal,cart } = useSelector(state => state.cart) 
  const dispatch = useDispatch()
  const handleAddTocart = (product) => {
    dispatch(addToCart(product))
  }
  const handleRemove = () => {
    dispatch(reduceQuantity(product));
  }
    console.log(cart);
    return (
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <div className="navbar-start md:hidden sm:block">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/">Portfolio</Link>
                </li>
                <li>
                  <Link href="/">About</Link>
                </li>
                {user && user.uid ? (
                  <li>
                    <Link href="/">Logout</Link>
                  </li>
                ) : (
                  <li>
                    <Link href="/">Login</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            Sundial Chomok
          </Link>
        </div>
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <Link
            href="/"
            className="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
          >
            home
          </Link>

          <Link
            href="/"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Barbeque
          </Link>

          <Link
            href="/"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            All Menus
          </Link>

          <Link
            href="/dashboard"
            className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >
            Dashboard
          </Link>
          {user && user.uid ? (
            <li>
              <Link
                href="/login"
                className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
                onClick={() => {
                  logOut();
                }}
              >
                Logout
              </Link>
            </li>
          ) : (
            <li>
              <Link
                href="/login"
                className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
              >
                Login
              </Link>
            </li>
          )}
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 card card-compact dropdown-content w-96 bg-base-100 shadow"
            >
              <div
                id="cart_bar"
                className="w-[100%] h-[100%] bg-[rgba(0,0,0,0.6)] fixed z-50 top-0 right-0 flex flex-row justify-end cart_bar"
              >
                <div className="w-[350px] h-[100%] bg-white">
                  <div className="w-100 flex flex-col items-end">
                    <i
                      className="fa-regular fa-circle-xmark mr-4 mt-4 text-[30px] cursor-pointer"
                      // onClick={handleCloseCart}
                    ></i>
                  </div>
                  <div className="w-100">
                    <h1 className="text-[24px] font-rubik font-semibold text-[#2B281A] px-4 py-2">
                      Shopping Cart
                    </h1>
                  </div>
                  <hr className="w-[90%] mx-auto" />
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link href="/">Settings</Link>
              </li>
              <li>
                <Link href="/">Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Header;