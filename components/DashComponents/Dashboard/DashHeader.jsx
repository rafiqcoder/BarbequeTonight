
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FiBell } from 'react-icons/fi';
import { IoSearchOutline } from 'react-icons/io5';
import { RiGroupLine } from 'react-icons/ri';
import flag from '@/public/assets/img/flag.jpg';
 export interface Props {
    //boolean to always open ddm (for presentation)
    forceOpen?: boolean;
    label?: string;
    withDivider?: boolean;
    icon?: JSX.Element;
    items: DDMItem[];
    withBackground?: boolean;
}

export interface DDMItem {
    icon?: JSX.Element;
    label: string;
    desc?: string;
    link?: string;
}

const DashHeader =  () => {
    const [isOpen, setIsOpen] = useState(false);
    return(

    <nav className="bg-white dark:bg-white  py-2 w-[85vw] sm:pr-10">
        
            <div className="flex items-center sm:justify-between justify-evenly h-16">
                <div className=" flex items-center">
                   <IoSearchOutline className='sm:w-20 text-2xl text-gray-500'></IoSearchOutline>
                </div>
                <div className="">
                    <div className="flex items-center sm:ml-4 md:ml-6">
                                <div className="relative sm:ml-3 flex gap-5">
                                    <div className='flex justify-center items-center'>
                                            <button type="button" className="  flex items-center justify-center w-full rounded-md  sm:px-2 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-white0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                                              
                                            id="options-menu">
                                            <Image src={flag} width={24} height={24} alt='Lang flag' className='mr-2'/>
                                       <span className='text-sm '>En</span>
                                            </button>
                                            <span    onClick={()=>setIsOpen(!isOpen)}><FaChevronDown className='text-gray-500'></FaChevronDown></span>
                                        </div>
                                    <div className='flex justify-center items-center'>
                                            <button type="button" className="  flex items-center justify-center w-full rounded-md  sm:px-2 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-white0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                                              
                                                id="options-menu">
                                        <RiGroupLine className='text-2xl text-gray-500'></RiGroupLine>
                                            </button>
                                           
                                        </div>
                                    <div className='flex justify-center items-center'>
                                            <button type="button" className="  flex items-center justify-center w-full rounded-md  sm:px-2 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-white0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                                              
                                                id="options-menu">
                                        <FiBell className='text-2xl text-gray-500'></FiBell>
                                            </button>
                                           
                                        </div>
                            <div className="relative inline-block text-left">
                                <div className='flex justify-center items-center'>
                                            <button type="button" className="  flex items-center justify-center w-full rounded-md  sm:px-2 py-2 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-50 dark:hover:bg-white0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
                                              
                                                id="options-menu">
                                        <svg width="24" fill="currentColor" height="24" className="text-gray-500" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z">
                                            </path>
                                        </svg>
                                            </button>
                                            <span    onClick={()=>setIsOpen(!isOpen)}><FaChevronDown className='text-gray-500'></FaChevronDown></span>
                                        </div>
                                        {
                                            isOpen && (<div className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                                    <div className="py-1 " role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                        <Link href="#" className="block  px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                            <span className="flex flex-col">
                                                <span>
                                                    Settings
                                                </span>
                                            </span>
                                        </Link>
                                        <Link href="#" className="block  px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                            <span className="flex flex-col">
                                                <span>
                                                    Account
                                                </span>
                                            </span>
                                        </Link>
                                        <Link href="#" className="block  px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" role="menuitem">
                                            <span className="flex flex-col">
                                                <span>
                                                    Logout
                                                </span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>)
                                        }
                                        
                                
                            </div>
                                </div>
                                
                            
                            </div>
                            
                </div>
                
            </div>
       
       
    </nav>


    );
};

export default DashHeader;