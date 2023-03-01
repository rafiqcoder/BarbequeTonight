import { addToCart,reduceQuantity,removeFromCart } from '@/src/store/cartSlice';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch,useSelector } from 'react-redux';
const toExclude = [
  "/checkout",
  "/dashboard",
  "/dashboard/addBundle",
  "/dashboard/addBBQProduct",
];
const basePaths = ["/home","/","/dashboard"];

const CartBar = ({setShowCart,showCart}) => {
  const { grandTotal, cart } = useSelector((state) => state.cart);
  const { activeUser } = useSelector((state) => state.userAuth);
  const router = useRouter();

  const { pathname } = router;
  const dispatch = useDispatch();
  const handleAddTocart = (product) => {
    const updatedProduct = {
      product,
      userEmail: activeUser?.email,
    };
    dispatch(addToCart(updatedProduct));
  };
  const handleReduce = (product) => {
    const updatedProduct = {
      product,
      userEmail: activeUser?.email,
    };
    dispatch(reduceQuantity(updatedProduct));
  };
  const handleRemove = (product) => {
    const updatedProduct = {
      product,
      userEmail: activeUser?.email,
    };
    dispatch(removeFromCart(updatedProduct));
  };
  // bg-gradient-to-br from-green-400 to-blue-500
  if (toExclude.includes(pathname)) return <></>;
  return (
    <div className=" cart-container  rounded-lg sm:h-screen  pb-5     p-3 shadow-md">
      <p
        className="text-black text-sm text-bold border max-w-fit border-red-500 px-[10px] py-1 rounded-full cursor-pointer"
        onClick={() => setShowCart(!showCart)}
      >
        X
      </p>
      <h2 className="text-center text-2xl font-semibold text-black my-5 ">
        Your Shopping Cart
      </h2>

      {cart?.length > 0 ? (
        <div>
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between p-1 border m-1 rounded-l-full"
            >
              <img
                className="w-[100px] p-1 mr-2 rounded-full"
                src={item.thumb ? item.thumb : item.menu[0]?.thumb}
                alt="/"
              />
              <div className="flex flex-col">
                <h2 className="text-black text-lg">{item.title}</h2>
                <p className="text-xl text-black">
                  {item.price ? item.price : itemitem.menu[0].price}$
                </p>
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
                  className=" text-lg text-white bg-red-500   text-center ml-1 rounded-full border-none max-w-fit px-2 mr-1"
                  onClick={() => handleRemove(item)}
                >
                  X
                </button>
              </div>
            </div>
          ))}

          <h2 className="text-black text-xl mt-6 font-bold w-full text-center">
            Subtotal: {grandTotal} /=
          </h2>
        </div>
      ) : (
        <h2 className="text-black text-xl ml-3">cart is empty</h2>
      )}
      <div className="w-full flex justify-center">
        <Link
          href="/checkout"
          className="font-rubik font-semibold text-[#ffffff] bg-[red] py-2 px-4 rounded-full hover:bg-[#eb0029] transition ease-in-out duration-500 mt-10"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartBar;