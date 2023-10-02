
import styles from '@/styles/AppUsage.module.css';
import { AiFillCaretDown } from "react-icons/ai";
import UsageBarChart from "./UsageBarChart";
import UsageBarChart2 from './UsageBarChart2';

const AppUsage = () => {
    return (

    
        <div className=" bg-white shadow rounded-lg   lg:col-span-2">
          {/* card1  */}
            <div className='flex justify-between items-center px-3'>
                <div className=" p-3">
                    <h2 className='font-bold text-xl'>App Usage</h2>
                    <p className='text-gray-600'>Based on the selected period</p>
                </div>
                <div className="flex justify-center items-center shadow-sm p-2 mr-3">
                    <div className="flex flex-col mr-2"><span className="text-[11px] text-gray-500">label</span> <span className="text-sm font-semibold">value</span></div>
                    <AiFillCaretDown className="text-gray-400"></AiFillCaretDown>
                </div>
            </div>
            <div>
                <div className="flex justify-end pr-5">
                    <ul className={`flex ${styles.cusUl} gap-8 mr-2`}>
                        <li className="text-black"><span className="w-[2px] h-[2px] rounded-full bg-black"></span> Project 1</li>
                        <li className="text-black">Project 1</li>
                    </ul>
                </div>
                <div className=" sm:flex justify-center hidden">
    
                <UsageBarChart></UsageBarChart>
      
  
                </div>
                <div className=" flex justify-center sm:hidden">
    
                <UsageBarChart2></UsageBarChart2>
      
  
                </div>
            </div>
          </div>
        
                  
               
 
    );
};

export default AppUsage;