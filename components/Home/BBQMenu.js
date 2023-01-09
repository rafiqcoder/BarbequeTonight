import { useEffect, useState } from "react";
import SingleBBQHomeItem from "./SingleBBQHomeItem";

const BBQMenu = () => {

    const [data, setData] = useState([]);
    useEffect( () => {
        fetch('/bbq.json')
        .then(res => res.json())
        .then(datas => setData(datas))
    }, [])


    return (
        <section className="mt-[-48px] py-12">
            <div className="container mx-auto">
                <div>
                    <div className="flex flex-row w-100 justify-center bottom-arrow-custom-wrap mt-12">
                        <button className="text-[#010f1c] inline-block bg-transparent outline-none py-1 px-14 font-roboto text-[14px] font-semibold border-b-2 border-[#eb0029]">BBQ</button>
                        <span className="bottom-arrow-custom"></span>
                    </div>
                    {
                        data ? <>
                            <div className="w-100 grid gird-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 py-16">
                                {
                                    data.map(singleData => <SingleBBQHomeItem key={singleData._id} singleData={singleData}></SingleBBQHomeItem>)
                                }
                                {/* <div className="rounded-2xl bg-white custom_box_shadow_1 flex flex-col items-center py-4 border-b-4 border-[#ffffff] hover:border-[#eb0029] transition ease-in-out duration-500">
                                    <img src="/menu_1_1.png" alt="" />
                                    <p className="text-[16px] font-roboto font-normal text-[#4d5765]">Chicken</p>
                                    <h2 className="text-[24px] font-rubik font-semibold text-[#010f1c]">Chicken Masala</h2>
                                    <p className="text-[#eb0029] font-medium font-rubik text-[16px]">$90.85</p>
                                    <button className="text-[14px] font-roboto font-normal py-2 px-6 bg-[#010f1c] hover:bg-[#eb0029] transition ease-in-out rounded-lg shadow-md text-white mt-4">Buy Now</button>
                                </div>
                                <div className="rounded-2xl bg-white custom_box_shadow_1 flex flex-col items-center py-4 border-b-4 border-[#ffffff] hover:border-[#eb0029] transition ease-in-out duration-500">
                                    <img src="/menu_1_2.png" alt="" />
                                    <p className="text-[16px] font-roboto font-normal text-[#4d5765]">Chicken</p>
                                    <h2 className="text-[24px] font-rubik font-semibold text-[#010f1c]">Chicken Masala</h2>
                                    <p className="text-[#eb0029] font-medium font-rubik text-[16px]">$90.85</p>
                                    <button className="text-[14px] font-roboto font-normal py-2 px-6 bg-[#010f1c] hover:bg-[#eb0029] transition ease-in-out rounded-lg custom_box_shadow_1 text-white mt-4">Buy Now</button>
                                </div>
                                <div className="rounded-2xl bg-white custom_box_shadow_1 flex flex-col items-center py-4 border-b-4 border-[#ffffff] hover:border-[#eb0029] transition ease-in-out duration-500">
                                    <img src="/menu_1_3.png" alt="" />
                                    <p className="text-[16px] font-roboto font-normal text-[#4d5765]">Chicken</p>
                                    <h2 className="text-[24px] font-rubik font-semibold text-[#010f1c]">Chicken Masala</h2>
                                    <p className="text-[#eb0029] font-medium font-rubik text-[16px]">$90.85</p>
                                    <button className="text-[14px] font-roboto font-normal py-2 px-6 bg-[#010f1c] hover:bg-[#eb0029] transition ease-in-out rounded-lg shadow-md text-white mt-4">Buy Now</button>
                                </div>
                                <div className="rounded-2xl bg-white custom_box_shadow_1 flex flex-col items-center py-4 border-b-4 border-[#ffffff] hover:border-[#eb0029] transition ease-in-out duration-500">
                                    <img src="/menu_1_4.png" alt="" />
                                    <p className="text-[16px] font-roboto font-normal text-[#4d5765]">Chicken</p>
                                    <h2 className="text-[24px] font-rubik font-semibold text-[#010f1c]">Chicken Masala</h2>
                                    <p className="text-[#eb0029] font-medium font-rubik text-[16px]">$90.85</p>
                                    <button className="text-[14px] font-roboto font-normal py-2 px-6 bg-[#010f1c] hover:bg-[#eb0029] transition ease-in-out rounded-lg shadow-md text-white mt-4">Buy Now</button>
                                </div>
                                <div className="rounded-2xl bg-white custom_box_shadow_1 flex flex-col items-center py-4 border-b-4 border-[#ffffff] hover:border-[#eb0029] transition ease-in-out duration-500">
                                    <img src="/menu_1_5.png" alt="" />
                                    <p className="text-[16px] font-roboto font-normal text-[#4d5765]">Chicken</p>
                                    <h2 className="text-[24px] font-rubik font-semibold text-[#010f1c]">Chicken Masala</h2>
                                    <p className="text-[#eb0029] font-medium font-rubik text-[16px]">$90.85</p>
                                    <button className="text-[14px] font-roboto font-normal py-2 px-6 bg-[#010f1c] hover:bg-[#eb0029] transition ease-in-out rounded-lg shadow-md text-white mt-4">Buy Now</button>
                                </div>
                                <div className="rounded-2xl bg-white custom_box_shadow_1 flex flex-col items-center py-4 border-b-4 border-[#ffffff] hover:border-[#eb0029] transition ease-in-out duration-500">
                                    <img src="/menu_1_6.png" alt="" />
                                    <p className="text-[16px] font-roboto font-normal text-[#4d5765]">Chicken</p>
                                    <h2 className="text-[24px] font-rubik font-semibold text-[#010f1c]">Chicken Masala</h2>
                                    <p className="text-[#eb0029] font-medium font-rubik text-[16px]">$90.85</p>
                                    <button className="text-[14px] font-roboto font-normal py-2 px-6 bg-[#010f1c] hover:bg-[#eb0029] transition ease-in-out rounded-lg shadow-md text-white mt-4">Buy Now</button>
                                </div>
                                <div className="rounded-2xl bg-white custom_box_shadow_1 flex flex-col items-center py-4 border-b-4 border-[#ffffff] hover:border-[#eb0029] transition ease-in-out duration-500">
                                    <img src="/menu_1_7.png" alt="" />
                                    <p className="text-[16px] font-roboto font-normal text-[#4d5765]">Chicken</p>
                                    <h2 className="text-[24px] font-rubik font-semibold text-[#010f1c]">Chicken Masala</h2>
                                    <p className="text-[#eb0029] font-medium font-rubik text-[16px]">$90.85</p>
                                    <button className="text-[14px] font-roboto font-normal py-2 px-6 bg-[#010f1c] hover:bg-[#eb0029] transition ease-in-out rounded-lg shadow-md text-white mt-4">Buy Now</button>
                                </div>
                                <div className="rounded-2xl bg-white custom_box_shadow_1 flex flex-col items-center py-4 border-b-4 border-[#ffffff] hover:border-[#eb0029] transition ease-in-out duration-500">
                                    <img src="/menu_1_8.png" alt="" />
                                    <p className="text-[16px] font-roboto font-normal text-[#4d5765]">Chicken</p>
                                    <h2 className="text-[24px] font-rubik font-semibold text-[#010f1c]">Chicken Masala</h2>
                                    <p className="text-[#eb0029] font-medium font-rubik text-[16px]">$90.85</p>
                                    <button className="text-[14px] font-roboto font-normal py-2 px-6 bg-[#010f1c] hover:bg-[#eb0029] transition ease-in-out rounded-lg shadow-md text-white mt-4">Buy Now</button>
                                </div>
                                <div className="rounded-2xl bg-white custom_box_shadow_1 flex flex-col items-center py-4 border-b-4 border-[#ffffff] hover:border-[#eb0029] transition ease-in-out duration-500">
                                    <img src="/menu_1_9.png" alt="" />
                                    <p className="text-[16px] font-roboto font-normal text-[#4d5765]">Chicken</p>
                                    <h2 className="text-[24px] font-rubik font-semibold text-[#010f1c]">Chicken Masala</h2>
                                    <p className="text-[#eb0029] font-medium font-rubik text-[16px]">$90.85</p>
                                    <button className="text-[14px] font-roboto font-normal py-2 px-6 bg-[#010f1c] hover:bg-[#eb0029] transition ease-in-out rounded-lg shadow-md text-white mt-4">Buy Now</button>
                                </div>
                                <div className="rounded-2xl bg-white custom_box_shadow_1 flex flex-col items-center py-4 border-b-4 border-[#ffffff] hover:border-[#eb0029] transition ease-in-out duration-500">
                                    <img src="/menu_1_10.png" alt="" />
                                    <p className="text-[16px] font-roboto font-normal text-[#4d5765]">Chicken</p>
                                    <h2 className="text-[24px] font-rubik font-semibold text-[#010f1c]">Chicken Masala</h2>
                                    <p className="text-[#eb0029] font-medium font-rubik text-[16px]">$90.85</p>
                                    <button className="text-[14px] font-roboto font-normal py-2 px-6 bg-[#010f1c] hover:bg-[#eb0029] transition ease-in-out rounded-lg shadow-md text-white mt-4">Buy Now</button>
                                </div>
                                <div className="rounded-2xl bg-white custom_box_shadow_1 flex flex-col items-center py-4 border-b-4 border-[#ffffff] hover:border-[#eb0029] transition ease-in-out duration-500">
                                    <img src="/menu_1_11.png" alt="" />
                                    <p className="text-[16px] font-roboto font-normal text-[#4d5765]">Chicken</p>
                                    <h2 className="text-[24px] font-rubik font-semibold text-[#010f1c]">Chicken Masala</h2>
                                    <p className="text-[#eb0029] font-medium font-rubik text-[16px]">$90.85</p>
                                    <button className="text-[14px] font-roboto font-normal py-2 px-6 bg-[#010f1c] hover:bg-[#eb0029] transition ease-in-out rounded-lg shadow-md text-white mt-4">Buy Now</button>
                                </div>
                                <div className="rounded-2xl bg-white custom_box_shadow_1 flex flex-col items-center py-4 border-b-4 border-[#ffffff] hover:border-[#eb0029] transition ease-in-out duration-500">
                                    <img src="/menu_1_12.png" alt="" />
                                    <p className="text-[16px] font-roboto font-normal text-[#4d5765]">Chicken</p>
                                    <h2 className="text-[24px] font-rubik font-semibold text-[#010f1c]">Chicken Masala</h2>
                                    <p className="text-[#eb0029] font-medium font-rubik text-[16px]">$90.85</p>
                                    <button className="text-[14px] font-roboto font-normal py-2 px-6 bg-[#010f1c] hover:bg-[#eb0029] transition ease-in-out rounded-lg shadow-md text-white mt-4">Buy Now</button>
                                </div> */}
                            </div>
                        </> : <>
                            <div className="w-100 grid grid-cols-1 gap-4 py-16">
                                <h4 className="text-red-500 font-rubik font-light text-[16px] text-center">No BBQ Found!</h4>
                            </div>    
                        </>
                    }
                    
                    
                    <div className="w-100 flex flex-col justify-center items-center mt-0">
                        <button className="font-rubik font-medium text-[14px] text-[#ffffff] bg-[#eb0029] transition ease-in-out duration-500 hover:bg-[#010f1c] py-4 px-12 rounded-full">VIEW ALL MENUS</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BBQMenu;