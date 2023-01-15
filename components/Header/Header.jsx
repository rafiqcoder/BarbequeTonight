import { logOut } from '@/src/store/actions/authActions';
import { addToCart,reduceQuantity,removeFromCart } from '@/src/store/cartSlice.js';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch,useSelector } from 'react-redux';

const Header = () => {
  // const { user, logOut } = useContext(AuthContext);
  const { grandTotal,cart } = useSelector(state => state.cart) 
  const {activeUser} = useSelector(state => state.userAuth)
  const router = useRouter();
  const dispatch = useDispatch()
  const handleAddTocart = (product) => {
    const updatedProduct = {
      product,
      userEmail: activeUser?.email
    };
    dispatch(addToCart(updatedProduct))
  }
  const handleReduce = (product) => {
     const updatedProduct = {
       product,
       userEmail: activeUser?.email,
     };
    dispatch(reduceQuantity(updatedProduct));
  }
  const handleRemove = (product) => {
    const updatedProduct = {
      product,
      userEmail: activeUser?.email,
    };
    dispatch(removeFromCart(updatedProduct));
  };
  



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
                {activeUser && activeUser.uid ? (
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
          {activeUser && activeUser.uid ? (
            <li>
              <Link
                href="/login"
                className="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
                onClick={() => {
                  logOut(router.push('/login'));
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
        <div className="flex-none relative">
          <div className="dropdown dropdown-end custom_position">
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
              className={
                cart?.length > 0
                  ? "mt-3 card bg-base-100 shadow -right-[10px] absolute z-50"
                  : "mt-3 card dropdown-content bg-base-100 shadow right-0 sticky"
              }
            >
              <div className="cart-container bg-gradient-to-br from-green-400 to-blue-500 rounded-lg sm:h-screen sm:sticky pb-5 top-0 min-w-[400px]  sm:w-1/4 p-3 ">
                <h2 className="text-center text-2xl font-semibold text-white my-5 ">
                  Your Shopping Cart
                </h2>

                {cart?.length > 0 ? (
                  <div>
                    {cart.map((item) => (
                      <>
                        <div
                          key={item.id}
                          className="flex items-center justify-between p-1 border m-1"
                        >
                          <img
                            className="w-[100px] p-1 mr-2"
                            src={item.img}
                            alt="/"
                          />
                          <div className="flex flex-col">
                            <h2 className="text-white text-lg">{item.title}</h2>
                            <p className="text-xl text-white">
                              {item.price}$
                            </p>{" "}
                          </div>
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
                          <div className="flex">
                            <button
                              className="btn text-lg text-white bg-red-400  rounded-md text-center ml-1 rounded-full border-none"
                              onClick={() => handleRemove(item)}
                            >
                              X
                            </button>
                          </div>
                        </div>
                      </>
                    ))}

                    <h2 className="text-white text-xl ml-3 mt-6 font-bold">
                      Subtotal: {grandTotal} Tk
                    </h2>
                  </div>
                ) : (
                  <h2 className="text-white text-xl ml-3">cart is empty</h2>
                )}
                <Link href='/checkout' className="font-rubik font-semibold text-[#ffffff] bg-[red] py-1 px-4 rounded-md hover:bg-[#eb0029] transition ease-in-out duration-500 mt-10">
                  Checkout
                </Link>
              </div>
              <div>
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
                  {activeUser?.displayName}
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