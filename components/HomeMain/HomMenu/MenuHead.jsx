import React from 'react';

const MenuHead = ({ bundleProducts,activeMenu,
setMenu }) => {
  return (
    <div>
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
            Objectively pontificate quality models before intuitive information.
            Dramatically recaptiualize multifunctional materials.
          </p>
        </div>
      </div>
      <div className="w-100 flex flex-col items-center mt-6">
        <ul
          className="bg-white shadow-md rounded-2xl grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 overflow-hidden cursor-pointer"
          id="btnContainer"
        >
          {bundleProducts?.map((e, i) => (
            <li
              key={e._id}
              className={`flex flex-col items-center justify-center py-6 px-12 ${
                activeMenu?._id === e._id ? "bg-[#eb0029]  text-white" : ""
              }`}
              onClick={() => setMenu(e._id)}
            >
              <span
                className={`font-semibold text-[14px] font-roboto  ${
                  activeMenu?._id === e._id ? " text-white" : "text-[#010f1c]"
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
    </div>
  );
};

export default MenuHead;