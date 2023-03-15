import user from '@/public/assets/user.png';
import { logOut } from '@/src/store/actions/authActions';
import Link from 'next/link';
import { useRouter } from 'node_modules/next/router';
import { useEffect,useState } from 'react';
import { useSelector } from 'react-redux';
import CartBar from '../CartBar/CartBar';
const Header = () => {
  // const { user, logOut } = useContext(AuthContext);
 const { activeUser } = useSelector((state) => state.userAuth);
  const { grandTotal,cart } = useSelector((state) => state.cart);
  // console.log(cart);
  const [scroll, setScroll] = useState(false);
  const [showCart,setShowCart] = useState(true);
  const router = useRouter();
  //current route 
  const { pathname,params,asPath } = router;
  console.log(pathname,params);
  console.log(router);
   useEffect(() => {
     window.addEventListener("scroll", () => {
       setScroll(window.scrollY > 50);
     });
   },[]);
  // console.log("activeUser", activeUser);
    return (
      <>
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
                  <Link
                    href="/"
                    className={`font-semibold  transition-colors duration-300 transform   text-gray-800 uppercase  mx-1.5 sm:mx-6  ${
                      pathname === "/"
                        ? "border-b-2 border-red-500"
                        : "border-b-2 border-transparent"
                    }`}
                  >
                    home
                  </Link>
                  <Link
                    href="/bbq"
                    className={` hover:  transition-colors duration-300 transform  hover: text-gray-800 font-semibold  hover:border-red-500 mx-1.5 sm:mx-6 uppercase ${
                      pathname === "/bbq"
                        ? "border-b-2 border-red-500"
                        : "border-b-2 border-transparent"
                    }`}
                  >
                    BBQ
                  </Link>
                  <Link
                    href="/menu"
                    className={`  hover: text-gray-800 font-semibold  transition-colors duration-300 transform  hover:  hover:border-red-500 mx-1.5 sm:mx-6 uppercase ${
                      pathname === "/menu"
                        ? "border-b-2 border-red-500"
                        : "border-b-2 border-transparent"
                    }`}
                  >
                    Menus
                  </Link>
                  {activeUser && activeUser.uid && (
                    <Link
                      href="/dashboard"
                      className={` hover: text-gray-800 font-semibold  transition-colors duration-300 transform  hover:  hover:border-red-500 mx-1.5 sm:mx-6 uppercase ${
                        pathname === "/dashboard"
                          ? "border-b-2 border-red-500"
                          : "border-b-2 border-transparent"
                      }`}
                    >
                      Dashboard
                    </Link>
                  )}

                  {activeUser && activeUser.uid ? (
                    <Link
                      href={`/login?redirect=${asPath}`}
                      className={`hover: text-gray-800  transition-colors duration-300 transform  hover: font-semibold  hover:border-red-500 uppercase mx-1.5 sm:mx-6 ${
                        pathname === "/logout"
                          ? "border-b-2 border-red-500"
                          : "border-b-2 border-transparent"
                      }`}
                      onClick={() => {
                        logOut();
                      }}
                    >
                      Logout
                    </Link>
                  ) : (
                    <Link
                      href={`/login?redirect=${asPath}`}
                      className="border-b-2 border-transparent hover: text-gray-800  transition-colors duration-300 transform  hover: font-semibold  hover:border-red-500 mx-1.5 sm:mx-6 uppercase"
                    >
                      Login
                    </Link>
                  )}
                </ul>
              </div>
            </div>
            <Link href="/" className="btn btn-ghost normal-case text-xl">
              Sundial Chomok
            </Link>
          </div>
          <div className="container md:flex items-center justify-center p-6 mx-auto font-semibold  capitalize  text-gray-300 hidden ">
            <Link
              href="/"
              className={`font-semibold  transition-colors duration-300 transform   text-gray-800   mx-1.5 sm:mx-6 uppercase  ${
                pathname === "/"
                  ? "border-b-2 border-red-500"
                  : "border-b-2 border-transparent"
              }`}
            >
              Home
            </Link>
            <Link
              href="/bbq"
              className={` hover:  transition-colors duration-300 transform  hover: text-gray-800 font-semibold  hover:border-red-500 mx-1.5 sm:mx-6 uppercase ${
                pathname === "/bbq"
                  ? "border-b-2 border-red-500"
                  : "border-b-2 border-transparent"
              }`}
            >
              BBQ
            </Link>
            <Link
              href="/menu"
              className={`  hover: text-gray-800 font-semibold  transition-colors duration-300 transform  hover:  hover:border-red-500 mx-1.5 uppercase sm:mx-6 ${
                pathname === "/menu"
                  ? "border-b-2 border-red-500"
                  : "border-b-2 border-transparent"
              }`}
            >
              Menus
            </Link>
            {activeUser && activeUser.uid && (
              <Link
                href="/dashboard"
                className={` hover: text-gray-800 font-semibold  transition-colors duration-300 transform uppercase hover:  hover:border-red-500 mx-1.5 sm:mx-6 ${
                  pathname === "/dashboard"
                    ? "border-b-2 border-red-500"
                    : "border-b-2 border-transparent"
                }`}
              >
                Dashboard
              </Link>
            )}

            {activeUser && activeUser.uid ? (
              <Link
                href={`/login?redirect=${asPath}`}
                className={`hover: text-gray-800  transition-colors duration-300 transform  hover: font-semibold uppercase  hover:border-red-500 mx-1.5 sm:mx-6 ${
                  pathname === "/logout"
                    ? "border-b-2 border-red-500"
                    : "border-b-2 border-transparent"
                }`}
                onClick={() => {
                  logOut();
                }}
              >
                Logout
              </Link>
            ) : (
              <Link
                href={`/login?redirect=${asPath}`}
                className="border-b-2 border-transparent hover: text-gray-800  transition-colors duration-300 uppercase transform  hover: font-semibold  hover:border-red-500 mx-1.5 sm:mx-6"
              >
                Login
              </Link>
            )}
          </div>
          <div className="flex-none relative">
            <div
              className="dropdown dropdown-end custom_position"
              onClick={() => setShowCart(!showCart)}
            >
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
                  <span className="badge badge-sm indicator-item bg-red-600 border-0 p-2">
                    {cart.length}
                  </span>
                </div>
              </label>
            </div>
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar ml-3 mr-5"
              >
                <div className="w-10 rounded-full">
                  <img
                    src={activeUser?.photoURL ? activeUser?.photoURL : user}
                    alt="userImage"
                  />
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
                  {activeUser && activeUser.uid ? (
                    <Link
                      href={`/login?redirect=${asPath}`}
                      className={`hover: text-gray-800 uppercase  transition-colors duration-300 transform  hover: font-semibold  hover:border-red-500 mx-1.5 sm:mx-6 ${
                        pathname === "/logout"
                          ? "border-b-2 border-red-500"
                          : "border-b-2 border-transparent"
                      }`}
                      onClick={() => {
                        logOut(router.push("/login"));
                      }}
                    >
                      Logout
                    </Link>
                  ) : (
                    <Link
                      href={`/login?redirect=${asPath}`}
                      className="border-b-2 border-transparent hover: text-gray-800  transition-colors duration-300 transform  hover: font-semibold uppercase hover:border-red-500 mx-1.5 sm:mx-6"
                    >
                      Login
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
        {showCart && (
          <div
            className={
              cart?.length > 0
                ? `card bg-base-100 shadow -right-[10px] fixed ${
                    scroll ? "top-0" : "top-16 md:top-20"
                  } z-50 transition-all duration-400 ease-in-out`
                : "card dropdown-content bg-base-100 shadow right-0 sticky hidden transition-all duration-400 ease-in-out"
            }
          >
            <CartBar
              cart={cart}
              setShowCart={setShowCart}
              showCart={showCart}
            ></CartBar>
          </div>
        )}
      </>
    );
};

export default Header;