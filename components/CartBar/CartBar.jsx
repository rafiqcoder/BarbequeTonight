import { addToCart,reduceQuantity,removeFromCart } from '@/src/store/cartSlice';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch,useSelector } from 'react-redux';
const toExclude = [
 '/checkout','/dashboard'
];
const basePaths = ["/home","/",'/dashboard'];

const CartBar = () => {
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
  
 if (toExclude.includes(pathname)) return <></>;
    return (
     
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
                      src={item.thumb ? item.thumb : item.menu[0]?.image}
                      alt="/"
                    />
                    <div className="flex flex-col">
                      <h2 className="text-white text-lg">{item.title}</h2>
                      <p className="text-xl text-white">
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
          <Link
            href="/checkout"
            className="font-rubik font-semibold text-[#ffffff] bg-[red] py-1 px-4 rounded-md hover:bg-[#eb0029] transition ease-in-out duration-500 mt-10"
          >
            Checkout
          </Link>
        </div>
      
    );
};

export default CartBar;