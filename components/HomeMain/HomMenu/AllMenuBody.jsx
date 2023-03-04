import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const AllMenuBody = ({
  menuItems,
  total,
  id,
  name,
  addBundleToCart
}) => {
  const { activeUser } = useSelector(state => state.userAuth);
  const router = useRouter();
  const { pathname,asPath } = router;
  // const { query,context } = router;
  
  // const { context } = query; 
  // const { asPath } = context;

 

  
  return (
    <div className="container mx-auto">
      <div className="w-100 mb-16">
        <div className="max-w-[1178px] mx-auto">
          <div className="w-full flex justify-center items-center">
            <h2 className="font-bold text-3xl mb-2 mt-2">{name}</h2>
          </div>
          <div className="w-100 grid grid-cols-1 px-4 lg:px-0 lg:grid-cols-2 gap-7 mt-6">
            {menuItems?.menu.map((e, i) => (
              <div
                className="border-[#bdbdbd] border-solid border-x-[1px] border-y-[1px] rounded-xl bg-[#faf7f2] flex flex-row justify-items-stretch items-center overflow-hidden gap-6 group"
                key={e._id}
              >
                <div className="bg-[rgba(255,157,45,0.2)] group-hover:bg-[#ff9d2d] transition ease-in-out flex flex-col justify-center align-center px-6 self-stretch rounded-xl">
                  <img
                    src={e.thumb}
                    alt="Product Image"
                    className="group-hover:scale-125 transition ease-in-out duration-500 w-[120px] h-[120px] object-cover rounded-xl"
                  />
                </div>
                <div className="block py-6">
                  <div>
                    <h1 className="text-[#010f1c] text-[20px] font-semibold font-rubik mb-2">
                      {e.name}
                    </h1>
                  </div>
                  <p className="text-[#4d5765] text-[14px] font-normal font-roboto mb-[10px]">
                    {e.description}
                  </p>
                  <div className="flex flex-row items-center justify-between pr-6">
                    <h2 className="font-rubik text-[16px] font-medium text-[#eb0029]">
                      ${e.price} &nbsp;&nbsp;
                      <del className="text-[#4d5765]">$350.99</del>
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5 flex-col flex ">
            <span className="price text-orange-500 text-xl font-bold">
              Tk {total ? total : ""}{" "}
              <del className=" text-black">Tk 1350.99</del>
            </span>
            <div className="flex justify-center items-center gap-3 mt-2">
              <div>
                {activeUser && activeUser?.uid ? (
                  <button
                    className="font-rubik font-semibold text-[#ffffff] bg-[red] py-1 px-4 rounded-md hover:bg-[#eb0029] transition ease-in-out duration-500 mt-2"
                    onClick={() => addBundleToCart(id)}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <Link
                    href={`/login?redirect=${pathname}`}
                    className="font-rubik font-semibold text-[#ffffff] bg-[red] py-1 px-4 rounded-md hover:bg-[#eb0029] transition ease-in-out duration-500 mt-2"
                  >
                    Add to Cart
                  </Link>
                )}
              </div>

              <Link
                href={`/menu/${id ? `/${id}` : ""}`}
                className="font-rubik font-semibold text-[#ffffff] bg-[#010f1c] py-1 px-4 rounded-md hover:bg-[#eb0029] transition ease-in-out duration-500 mt-2"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllMenuBody;