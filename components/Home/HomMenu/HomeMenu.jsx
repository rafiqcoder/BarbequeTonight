import productImg from "@/public/assets/productimg.png";
import Image from 'next/image';
import { useEffect,useState } from "react";
const HomeMenu = () => {
  const [bundleProducts,setBundleProducts] = useState([]);
  const [activeMenu,setActiveMenu] = useState([]);

  // useEffect(() => {
  //   let btnContainer = document.getElementById("btnContainer");
  //   var btns = btnContainer.getElementsByClassName("tab_selector");
  //   for (var i = 0; i < btns.length; i++) {
  //     btns[i].addEventListener("click", function () {
  //       var current = document.getElementsByClassName("active_tab");
  //       current[0].className = current[0].className.replace(" active_tab", "");
  //       this.className += " active_tab";
  //     });
  //   }
  // },[]);
  useEffect(() => {
    fetch("bundledb.json")
      .then((response) => response.json())
      .then((data) => setBundleProducts(data));
  },[])

  const setMenu = (id) => {
    let menu = bundleProducts.filter((e) => e.id === id);
    setActiveMenu(menu);
  }
  const [menu] = activeMenu;
  const total = menu?.total;
  const menuItems = menu?.menu;
  console.log(menuItems);
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
              {bundleProducts.map((e, i) => (
                <li
                  className={`flex flex-col items-center justify-center py-6 px-12 ${(i+1) === parseInt(e.id)?'active_tab':''}`}
                  onClick={() => setMenu(e.id)}
                >
                  <span className="font-semibold text-[14px] font-roboto text-[#010f1c]">
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
                  <div className="border-[#bdbdbd] border-solid border-x-[1px] border-y-[1px] rounded-xl bg-[#faf7f2] flex flex-row justify-items-stretch items-center overflow-hidden gap-6 group">
                    <div className="bg-[rgba(255,157,45,0.2)] group-hover:bg-[#ff9d2d] transition ease-in-out flex flex-col justify-center align-center px-6 self-stretch rounded-xl">
                      <Image
                        width={100}
                        hight={100}
                        src={productImg}
                        alt="Product Image"
                        className="group-hover:scale-125 transition ease-in-out duration-500"
                      ></Image>
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
                  Tk {total} <del className=" text-black">Tk 1350.99</del>
                </span>
                <div className="flex justify-center items-center gap-3">
                  <div>
                    <button className="font-rubik font-semibold text-[#ffffff] bg-[red] py-1 px-4 rounded-md hover:bg-[#eb0029] transition ease-in-out duration-500 mt-2">
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