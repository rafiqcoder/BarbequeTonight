
import { IoArrowForwardSharp } from "react-icons/io5";
import { RiShoppingBagFill } from "react-icons/ri";


const Feature = ({heading,title,description,footerText,icon}) => {
    return (
              
            <div className=" bg-white shadow rounded-lg   lg:col-span-1">
                <div className='flex justify-between items-center p-3'>
                        <div className="pl-3">
                    <h2 className=' text-lg text-blue-500 flex gap-2 items-center'>{ icon }{heading}</h2>
                        </div>
                
                    </div>
                <div className="p-5 pt-2 flex flex-col justify-start">
                     
                <p className="text-xl font-bold pb-2"> {title }</p>
                      <p className="text-sm text-gray-500 mt-1 pb-1">{description } </p>
                    </div>
                    <div className="pl-6 flex gap-2 items-center p-3 border-t border-top border-gray-100 font-semibold">
                           {footerText} <IoArrowForwardSharp></IoArrowForwardSharp>
                        </div>
            </div>
        
    );
};

export default Feature;