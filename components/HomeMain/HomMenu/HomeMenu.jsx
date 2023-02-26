import { useGetMenusQuery } from "@/src/store/api/productsApi";
import { addToCart } from "@/src/store/cartSlice";
import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";


const HomeMenu = () => {
  const { activeUser } = useSelector(state => state.userAuth);
  const { data, error, isLoading, isSuccess, isFetching } = useGetMenusQuery();
  const [bundleProducts,setBundleProducts] = useState([]);
  const [activeMenu,setActiveMenu] = useState([]);
  const dispatch = useDispatch();
  const [menuItems,setMenuItems] = useState([]);
  const [total,setTotal] = useState(0);
  const { asPath,pathname } = useRouter();

  useEffect(() => {
    if (data !== null || data !== undefined || data !== "") {
      
      setBundleProducts(data);
    }
    console.log(data);
  },[data])
  useEffect(() => {
    // console.log('bundleProducts',bundleProducts);
    // console.log('menu',menu);
    if (bundleProducts !== undefined || bundleProducts !== null || bundleProducts !== "") {
      console.log('bundleProducts',bundleProducts);
      if (bundleProducts) {
        let menu = bundleProducts;
        console.log("menu",menu);
        setMenuItems(bundleProducts[0]?.menu);
        setActiveMenu(bundleProducts[0]);
      }
       
    }
    // console.log(menu[0]?.menu);
  }, [bundleProducts]);

  const setMenu = (id) => {
    let menu = bundleProducts?.filter((e) => e._id === id);
    // console.log(menu2);
    // let [menu] = activeMenu[0];
    setActiveMenu(menu[0]);
    // console.log(menu);
    setMenuItems(menu[0]?.menu);
  }
  console.log(data);

  const addBundleToCart = () => {
    const updatedProduct = {
      product:activeMenu,
      userEmail: activeUser?.email,
    };
    dispatch(addToCart(updatedProduct))
  }
  // console.log(menuItems);



    return (
      <section className="bg-[#faf7f2] bg-[url('/product_bg_1.png')] py-32">
        <div className="container mx-auto">
          <div>
            <div className="flex flex-row justify-center items-center gap-1">
              <img src="/svg/title_icon.svg" alt="" />
              <span className="text-[#eb0029] font-lobsterTwo font-semibold text-[20px]">
                Packages
              </span>
            </div>
            <h1 className="text-[#010F1C] font-bold font-rubik text-[36px] text-center mb-3">
              Our Popular Delicious{" "}
              <span className="font-lobsterTwo text-[#eb0029]">Foods</span>
            </h1>
            <div className="flex flex-col items-center w-100">
              <p className="max-w-[560px] text-center text-[#4d5765] font-normal text-[16px] text-Roboto">
                Objectively pontificate quality models before intuitive
                information. Dramatically recaptiualize multifunctional
                materials.
              </p>
            </div>
          </div>
          <div className="w-100 flex flex-col items-center mt-6">
            <ul
              className="bg-white shadow-md rounded-2xl grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 overflow-hidden cursor-pointer"
              id="btnContainer"
            >
              {bundleProducts?.map((e, i) => (
                <li key={e._id}
                  className={`flex flex-col items-center justify-center py-6 px-12 ${
                    activeMenu?._id === e._id ? "bg-[#eb0029]  text-white" : ""
                  }`}
                  onClick={() => setMenu(e._id)}
                >
                  <span
                    className={`font-semibold text-[14px] font-roboto  ${
                      activeMenu?._id === e._id
                        ? " text-white"
                        : "text-[#010f1c]"
                    }`}
                  >
                    {e.name}
                  </span>
                </li>
              ))}

              {/* <li className="flex flex-col items-center justify-center py-6 px-12 tab_selector">
                <span className="font-semibold text-[14px] font-roboto text-[#010f1c]">
                  MENU 2
                </span>
              </li>
              <li className="flex flex-col items-center justify-center py-6 px-12 tab_selector">
                <span className="font-semibold text-[14px] font-roboto text-[#010f1c]">
                  MENU 3
                </span>
              </li>
              <li className="flex flex-col items-center justify-center py-6 px-12 tab_selector">
                <span className="font-semibold text-[14px] font-roboto text-[#010f1c]">
                  MENU 4
                </span>
              </li>
              <li className="flex flex-col items-center justify-center py-6 px-12 tab_selector">
                <span className="font-semibold text-[14px] font-roboto text-[#010f1c]">
                  MENU 5
                </span>
              </li>
              <li className="flex flex-col items-center justify-center py-6 px-12 tab_selector">
                <span className="font-semibold text-[14px] font-roboto text-[#010f1c]">
                  MENU 5
                </span>
              </li>
              <li className="flex flex-col items-center justify-center py-6 px-12 tab_selector">
                <span className="font-semibold text-[14px] font-roboto text-[#010f1c]">
                  MENU 6
                </span>
              </li> */}
            </ul>
          </div>
          <div className="w-100">
            <div className="max-w-[1178px] mx-auto">
              <div className="w-100 grid grid-cols-1 px-4 lg:px-0 lg:grid-cols-2 gap-7 mt-6">
                {menuItems?.map((e, i) => (
                  <div className="border-[#bdbdbd] border-solid border-x-[1px] border-y-[1px] rounded-xl bg-[#faf7f2] flex flex-row justify-items-stretch items-center overflow-hidden gap-6 group" key={e.id}>
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
                <div className="flex justify-center items-center gap-3">
                  <div>
                    <button
                      className="font-rubik font-semibold text-[#ffffff] bg-[red] py-1 px-4 rounded-md hover:bg-[#eb0029] transition ease-in-out duration-500 mt-2"
                      onClick={addBundleToCart}
                    >
                      BUY NOW
                    </button>
                  </div>
                  <div>
                    <button className="font-rubik font-semibold text-[#ffffff] bg-[#010f1c] py-1 px-4 rounded-md hover:bg-[#eb0029] transition ease-in-out duration-500 mt-2">
                      View Details
                    </button>
                  </div>
                </div>
                <a
                  href="shop.html"
                  className="as-btn w-[200px] mx-auto mt-5 text-lg font-semibold"
                >
                  View All Menus --&gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default HomeMenu;