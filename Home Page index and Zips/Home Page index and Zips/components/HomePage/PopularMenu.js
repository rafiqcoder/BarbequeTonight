import { useEffect } from "react";

const PopularMenu = () => {

    useEffect( () => {
        let btnContainer = document.getElementById("btnContainer");
        var btns = btnContainer.getElementsByClassName("tab_selector");
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function() {
                var current = document.getElementsByClassName("active_tab");
                current[0].className = current[0].className.replace(" active_tab", "");
                this.className += " active_tab";
            });
        } 
    }, [])

    return (
        <section className="bg-[#faf7f2] bg-[url('/product_bg_1.png')] py-32">
            <div className="container mx-auto">
                <div>
                    <div className="flex flex-row justify-center items-center gap-1">
                        <img src="/svg/title_icon.svg" alt="" />
                        <span className="text-[#eb0029] font-lobsterTwo font-semibold text-[20px]">Packages</span>
                    </div>
                    <h1 className="text-[#010F1C] font-bold font-rubik text-[36px] text-center mb-3">Our Popular Delicious <span className="font-lobsterTwo text-[#eb0029]">Foods</span></h1>
                    <div className="flex flex-col items-center w-100">
                        <p className="max-w-[560px] text-center text-[#4d5765] font-normal text-[16px] text-Roboto">Objectively pontificate quality models before intuitive information. Dramatically recaptiualize multifunctional materials.</p>
                    </div>
                    <div className="flex flex-row w-100 justify-center bottom-arrow-custom-wrap mt-12">
                        <button className="text-[#010f1c] inline-block bg-transparent outline-none py-1 px-14 font-roboto text-[14px] font-semibold border-b-2 border-[#eb0029]">Mix Menu</button>
                        <span className="bottom-arrow-custom"></span>
                    </div>
                </div>
                <div className="w-100 flex flex-col items-center mt-6">
                    <ul className="bg-white shadow-md rounded-2xl grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 overflow-hidden cursor-pointer" id="btnContainer">
                        <li className="flex flex-col items-center justify-center py-6 px-12 tab_selector active_tab">
                            <img src="/svg/menu_1_1.svg" alt="" />
                            <span className="font-semibold text-[14px] font-roboto text-[#010f1c] mt-4">All MENUS</span>
                        </li>
                        <li className="flex flex-col items-center justify-center py-6 px-12 tab_selector">
                            <img src="/svg/menu_1_2.svg" alt="" />
                            <span className="font-semibold text-[14px] font-roboto text-[#010f1c] mt-4">BURGER</span>
                        </li>
                        <li className="flex flex-col items-center justify-center py-6 px-12 tab_selector">
                            <img src="/svg/menu_1_3.svg" alt="" />
                            <span className="font-semibold text-[14px] font-roboto text-[#010f1c] mt-4">PIZZA</span>
                        </li>
                        <li className="flex flex-col items-center justify-center py-6 px-12 tab_selector">
                            <img src="/svg/menu_1_4.svg" alt="" />
                            <span className="font-semibold text-[14px] font-roboto text-[#010f1c] mt-4">CHICKEN</span>
                        </li>
                        <li className="flex flex-col items-center justify-center py-6 px-12 tab_selector">
                            <img src="/svg/menu_1_5.svg" alt="" />
                            <span className="font-semibold text-[14px] font-roboto text-[#010f1c] mt-4">COMBO</span>
                        </li>
                        <li className="flex flex-col items-center justify-center py-6 px-12 tab_selector">
                            <img src="/svg/menu_1_6.svg" alt="" />
                            <span className="font-semibold text-[14px] font-roboto text-[#010f1c] mt-4">SANDWICH</span>
                        </li>
                        <li className="flex flex-col items-center justify-center py-6 px-12 tab_selector">
                            <img src="/svg/menu_1_7.svg" alt="" />
                            <span className="font-semibold text-[14px] font-roboto text-[#010f1c] mt-4">DRINKS</span>
                        </li>
                    </ul>
                </div>
                <div className="w-100">
                    <div className="max-w-[1178px] mx-auto">
                        <div className="w-100 grid grid-cols-1 px-4 lg:px-0 lg:grid-cols-2 gap-7 mt-6">
                            <div className="border-[#bdbdbd] border-solid border-x-[1px] border-y-[1px] rounded-xl bg-[#faf7f2] flex flex-row justify-items-stretch items-center overflow-hidden gap-6 group">
                                <div className="bg-[rgba(255,157,45,0.2)] group-hover:bg-[#ff9d2d] transition ease-in-out flex flex-col justify-center align-center px-6 self-stretch rounded-xl">
                                    <img className="group-hover:scale-125 transition ease-in-out duration-500" src="/menu_list_1_1.png" alt="" />
                                </div>
                                <div className="block py-6">
                                    <div>
                                        <h1 className="text-[#010f1c] text-[20px] font-semibold font-rubik mb-2">Daria Shevtsova</h1>
                                    </div>
                                    <p className="text-[#4d5765] text-[14px] font-normal font-roboto mb-[10px]">Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.</p>
                                    <div className="flex flex-row items-center justify-between pr-6">
                                        <h2 className="font-rubik text-[16px] font-medium text-[#eb0029]">$180.85  &nbsp;&nbsp;<del className="text-[#4d5765]">$350.99</del></h2>
                                        <div>
                                            <button className="font-rubik font-semibold text-[#ffffff] bg-[#010f1c] py-1 px-4 rounded-md hover:bg-[#eb0029] transition ease-in-out duration-500">Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-[#bdbdbd] border-solid border-x-[1px] border-y-[1px] rounded-xl bg-[#faf7f2] flex flex-row justify-items-stretch items-center overflow-hidden gap-6 group">
                                <div className="bg-[rgba(255,157,45,0.2)] group-hover:bg-[#ff9d2d] transition ease-in-out flex flex-col justify-center align-center px-6 self-stretch rounded-xl">
                                    <img className="group-hover:scale-125 transition ease-in-out duration-500" src="/menu_list_1_2.png" alt="" />
                                </div>
                                <div className="block py-6">
                                    <div>
                                        <h1 className="text-[#010f1c] text-[20px] font-semibold font-rubik mb-2">Daria Shevtsova</h1>
                                    </div>
                                    <p className="text-[#4d5765] text-[14px] font-normal font-roboto mb-[10px]">Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.</p>
                                    <div className="flex flex-row items-center justify-between pr-6">
                                        <h2 className="font-rubik text-[16px] font-medium text-[#eb0029]">$180.85  &nbsp;&nbsp;<del className="text-[#4d5765]">$350.99</del></h2>
                                        <div>
                                            <button className="font-rubik font-semibold text-[#ffffff] bg-[#010f1c] py-1 px-4 rounded-md hover:bg-[#eb0029] transition ease-in-out duration-500">Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-[#bdbdbd] border-solid border-x-[1px] border-y-[1px] rounded-xl bg-[#faf7f2] flex flex-row justify-items-stretch items-center overflow-hidden gap-6 group">
                                <div className="bg-[rgba(255,157,45,0.2)] group-hover:bg-[#ff9d2d] transition ease-in-out flex flex-col justify-center align-center px-6 self-stretch rounded-xl">
                                    <img className="group-hover:scale-125 transition ease-in-out duration-500" src="/menu_list_1_3.png" alt="" />
                                </div>
                                <div className="block py-6">
                                    <div>
                                        <h1 className="text-[#010f1c] text-[20px] font-semibold font-rubik mb-2">Daria Shevtsova</h1>
                                    </div>
                                    <p className="text-[#4d5765] text-[14px] font-normal font-roboto mb-[10px]">Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.</p>
                                    <div className="flex flex-row items-center justify-between pr-6">
                                        <h2 className="font-rubik text-[16px] font-medium text-[#eb0029]">$180.85  &nbsp;&nbsp;<del className="text-[#4d5765]">$350.99</del></h2>
                                        <div>
                                            <button className="font-rubik font-semibold text-[#ffffff] bg-[#010f1c] py-1 px-4 rounded-md hover:bg-[#eb0029] transition ease-in-out duration-500">Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-[#bdbdbd] border-solid border-x-[1px] border-y-[1px] rounded-xl bg-[#faf7f2] flex flex-row justify-items-stretch items-center overflow-hidden gap-6 group">
                                <div className="bg-[rgba(255,157,45,0.2)] group-hover:bg-[#ff9d2d] transition ease-in-out flex flex-col justify-center align-center px-6 self-stretch rounded-xl">
                                    <img className="group-hover:scale-125 transition ease-in-out duration-500" src="/menu_list_1_4.png" alt="" />
                                </div>
                                <div className="block py-6">
                                    <div>
                                        <h1 className="text-[#010f1c] text-[20px] font-semibold font-rubik mb-2">Daria Shevtsova</h1>
                                    </div>
                                    <p className="text-[#4d5765] text-[14px] font-normal font-roboto mb-[10px]">Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.</p>
                                    <div className="flex flex-row items-center justify-between pr-6">
                                        <h2 className="font-rubik text-[16px] font-medium text-[#eb0029]">$180.85  &nbsp;&nbsp;<del className="text-[#4d5765]">$350.99</del></h2>
                                        <div>
                                            <button className="font-rubik font-semibold text-[#ffffff] bg-[#010f1c] py-1 px-4 rounded-md hover:bg-[#eb0029] transition ease-in-out duration-500">Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-[#bdbdbd] border-solid border-x-[1px] border-y-[1px] rounded-xl bg-[#faf7f2] flex flex-row justify-items-stretch items-center overflow-hidden gap-6 group">
                                <div className="bg-[rgba(255,157,45,0.2)] group-hover:bg-[#ff9d2d] transition ease-in-out flex flex-col justify-center align-center px-6 self-stretch rounded-xl">
                                    <img className="group-hover:scale-125 transition ease-in-out duration-500" src="/menu_list_1_5.png" alt="" />
                                </div>
                                <div className="block py-6">
                                    <div>
                                        <h1 className="text-[#010f1c] text-[20px] font-semibold font-rubik mb-2">Daria Shevtsova</h1>
                                    </div>
                                    <p className="text-[#4d5765] text-[14px] font-normal font-roboto mb-[10px]">Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.</p>
                                    <div className="flex flex-row items-center justify-between pr-6">
                                        <h2 className="font-rubik text-[16px] font-medium text-[#eb0029]">$180.85  &nbsp;&nbsp;<del className="text-[#4d5765]">$350.99</del></h2>
                                        <div>
                                            <button className="font-rubik font-semibold text-[#ffffff] bg-[#010f1c] py-1 px-4 rounded-md hover:bg-[#eb0029] transition ease-in-out duration-500">Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border-[#bdbdbd] border-solid border-x-[1px] border-y-[1px] rounded-xl bg-[#faf7f2] flex flex-row justify-items-stretch items-center overflow-hidden gap-6 group">
                                <div className="bg-[rgba(255,157,45,0.2)] group-hover:bg-[#ff9d2d] transition ease-in-out flex flex-col justify-center align-center px-6 self-stretch rounded-xl">
                                    <img className="group-hover:scale-125 transition ease-in-out duration-500" src="/menu_list_1_6.png" alt="" />
                                </div>
                                <div className="block py-6">
                                    <div>
                                        <h1 className="text-[#010f1c] text-[20px] font-semibold font-rubik mb-2">Daria Shevtsova</h1>
                                    </div>
                                    <p className="text-[#4d5765] text-[14px] font-normal font-roboto mb-[10px]">Rapidiously repurpose customer directed markets. Rapidiously enhance extensive.</p>
                                    <div className="flex flex-row items-center justify-between pr-6">
                                        <h2 className="font-rubik text-[16px] font-medium text-[#eb0029]">$180.85  &nbsp;&nbsp;<del className="text-[#4d5765]">$350.99</del></h2>
                                        <div>
                                            <button className="font-rubik font-semibold text-[#ffffff] bg-[#010f1c] py-1 px-4 rounded-md hover:bg-[#eb0029] transition ease-in-out duration-500">Details</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-100 flex flex-col justify-center items-center mt-12">
                            <button className="font-rubik font-medium text-[14px] text-[#ffffff] bg-[#eb0029] transition ease-in-out duration-500 hover:bg-[#010f1c] py-4 px-12 rounded-full">VIEW ALL MENUS</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PopularMenu;