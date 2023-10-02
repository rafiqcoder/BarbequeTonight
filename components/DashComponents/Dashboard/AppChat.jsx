import Image from "next/image";
import { BsCalendarPlus } from "react-icons/bs";
import { IoArrowForwardSharp, IoReloadSharp } from "react-icons/io5";


const AppChat = ({className}) => {
    return (
        <div className={className?className:''}>
             <div className="grid lg:grid-cols-3 gap-10">
        <div className=" bg-white shadow rounded-lg   lg:col-span-2">
          {/* card1  */}
            <div className='flex justify-between items-center p-3'>
                <div className=" p-3">
                    <h2 className='font-bold text-xl'>App Chat</h2>
                    
                </div>
                <div className="flex justify-center items-center p-2 mr-3">
                            <div className="flex flex-col mr-2">
                                <IoReloadSharp></IoReloadSharp>
                            </div>
                 
                </div>
            </div>
            <div>
                
                <div className=" flex justify-center w-full gap-5 p-4 px-6 bg-gray-100">
                            
                            <div className="flex  w-full justify-start gap-4 ">
                                <Image src="/assets/img/avatar.jpg" width={50} height={20} alt="Chat avatar" className="rounded-full" />
                                <div className="flex flex-col justify-start items-start gap-1">
                                    <h2 className="text-lg ">Alcides Antonio</h2>
                                    <p className="text-gray-400 text-sm">Hello, we spoke earlier on the phone</p>
                                </div>
                            </div>
                            <span className="text-sm text-gray-500">1h</span>
      
  
                </div>
                <div className=" flex justify-center w-full gap-5 p-4 px-6 bg-white">
                            
                            <div className="flex  w-full justify-start gap-4 ">
                                <Image src="/assets/img/avatar.jpg" width={50} height={20} alt="Chat avatar" className="rounded-full" />
                                <div className="flex flex-col justify-start items-start gap-1">
                                    <h2 className="text-lg ">Alcides Antonio</h2>
                                    <p className="text-gray-400 text-sm">Hello, we spoke earlier on the phone</p>
                                </div>
                            </div>
                            <span className="text-sm text-gray-500">1h</span>
                </div>
                <div className=" flex justify-center w-full gap-5 p-4 px-6 bg-white">
                            
                            <div className="flex  w-full justify-start gap-4 ">
                                <Image src="/assets/img/avatar.jpg" width={50} height={20} alt="Chat avatar" className="rounded-full" />
                                <div className="flex flex-col justify-start items-start gap-1">
                                    <h2 className="text-lg ">Alcides Antonio</h2>
                                    <p className="text-gray-400 text-sm">Hello, we spoke earlier on the phone</p>
                                </div>
                            </div>
                            <span className="text-sm text-gray-500">1h</span>
      
  
                </div>
                <div className=" flex justify-center w-full gap-5 p-4 px-6 bg-white">
                            
                            <div className="flex  w-full justify-start gap-4 ">
                                <Image src="/assets/img/avatar.jpg" width={50} height={20} alt="Chat avatar" className="rounded-full" />
                                <div className="flex flex-col justify-start items-start gap-1">
                                    <h2 className="text-lg ">Alcides Antonio</h2>
                                    <p className="text-gray-400 text-sm">Hello, we spoke earlier on the phone</p>
                                </div>
                            </div>
                            <span className="text-sm text-gray-500">1h</span>
      
  
                </div>
                    </div>
                    <div className="pl-6 flex gap-2 items-center p-3 border-t border-top border-gray-100 font-semibold">
                       Go to chat <IoArrowForwardSharp></IoArrowForwardSharp>
                    </div>
          </div>
            
        <div className=" bg-white shadow rounded-lg   col-span-1">
          {/* card1  */}
            <div className='flex justify-between items-center p-3'>
               <div className="p-3">
          <h2 className='font-bold text-xl'>Upcoming Events</h2>
          <p className='text-gray-600'>Based on the linked bank account</p>
        </div>
                <div className="flex justify-center items-center p-2 mr-3">
                            <div className="flex flex-col mr-2">
                                <IoReloadSharp></IoReloadSharp>
                            </div>
                </div>
            </div>
            <div>
                <div className=" flex justify-center w-full gap-5 p-4 px-6 bg-white">
                            
                            <div className="flex  w-full justify-start  items-center gap-7 ">
                                <div className="flex flex-col justify-center items-center p-2 bg-gray-200 rounded-xl font-semibold text-lg">
                                    <span>Nov</span>
                                    <span className="-mt-1">1</span>
                               </div>
                                <div className="flex flex-col justify-start items-start gap-1">
                                    <h2 className="text-lg ">Meeting with Partners</h2>
                                    <p className="text-gray-400 text-sm">15:00 to 15:30</p>
                                </div>
                            </div>
                             <div className="flex justify-center items-center p-2 ">
                            <div className="flex flex-col mr-2">
                                <BsCalendarPlus></BsCalendarPlus>
                            </div>
                 
                        </div>
      
  
                </div>
                <div className=" flex justify-center w-full gap-5 p-4 px-6 bg-white">
                            
                            <div className="flex  w-full justify-start  items-center gap-7 ">
                                <div className="flex flex-col justify-center items-center p-2 bg-gray-200 rounded-xl font-semibold text-lg">
                                    <span>Nov</span>
                                    <span className="-mt-1">1</span>
                               </div>
                                <div className="flex flex-col justify-start items-start gap-1">
                                    <h2 className="text-lg ">Meeting with Partners</h2>
                                    <p className="text-gray-400 text-sm">15:00 to 15:30</p>
                                </div>
                            </div>
                             <div className="flex justify-center items-center p-2 ">
                            <div className="flex flex-col mr-2">
                                <BsCalendarPlus></BsCalendarPlus>
                            </div>
                 
                        </div>
      
  
                </div>
                <div className=" flex justify-center w-full gap-5 p-4 px-6 bg-white">
                            
                            <div className="flex  w-full justify-start  items-center gap-7 ">
                                <div className="flex flex-col justify-center items-center p-2 bg-gray-200 rounded-xl font-semibold text-lg">
                                    <span>Nov</span>
                                    <span className="-mt-1">1</span>
                               </div>
                                <div className="flex flex-col justify-start items-start gap-1">
                                    <h2 className="text-lg ">Meeting with Partners</h2>
                                    <p className="text-gray-400 text-sm">15:00 to 15:30</p>
                                </div>
                            </div>
                             <div className="flex justify-center items-center p-2 ">
                            <div className="flex flex-col mr-2">
                                <BsCalendarPlus></BsCalendarPlus>
                            </div>
                 
                        </div>
      
  
                </div>
                
               
                    </div>
                    <div className="pl-6 flex gap-2 items-center p-3 border-t border-top border-gray-100 font-semibold">
                       See all Events <IoArrowForwardSharp></IoArrowForwardSharp>
                    </div>
          </div>
    </div>
    </div>
      
    );
};

export default AppChat;