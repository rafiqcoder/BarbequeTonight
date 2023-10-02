import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineHdd } from 'react-icons/ai';
import {
  BiCalendarEvent,
  BiChat,
  BiCheck,
  BiErrorCircle,
  BiMailSend,
} from 'react-icons/bi';
import { BsBagCheck } from 'react-icons/bs';
import { CiDeliveryTruck } from 'react-icons/ci';
import { GiPerpendicularRings } from 'react-icons/gi';
import { HiClipboardList } from 'react-icons/hi';
import { IoShareSocialOutline } from 'react-icons/io5';
import { MdAreaChart, MdContactPhone } from 'react-icons/md';

const Sidebar = () => {
  const router = useRouter();
  //current route
  const { pathname, params, asPath } = router as any;
  return (
    <div className="top-0 sticky bg-[#1C2536] text-[#B5BCC4] sm:w-[15vw] w-[20vw] overflow-hidden pr-5  pt-5 z-10  disableScroll h-screen overflow-y-auto">
      <div className="logo section p-3 bg-opacity-30 rounded-tr-xl rounded-tl-xl">
        <h1 className="font-4xl font-extrabold">Logo </h1>
        <small className="lg:block hidden">Production</small>
      </div>
      <div className="w-full p-2 mx-auto mt-2 bg-opacity-30 flex flex-col gap-y-3">
        {/*************** these are all tabs **************** */}
        <Link
          href="/dashboard"
          className={`cursor-pointer flex lg:justify-start justify-center  gap-4  items-center  px-2 py-2 rounded-md  ${
            pathname === '/dashboard'
              ? 'bg-gray-200 text-gray-800'
              : 'text-gray-200    hover:bg-[#252E3E]'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="#A855F7"
            width={18}
            className="ml-1"
          >
            <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" />
          </svg>
          <p className="lg:block hidden">Overview</p>
        </Link>
        <Link
          href="/dashboard/analytics"
          className={`cursor-pointer flex lg:justify-start justify-center  gap-4  items-center  px-2 py-2 rounded-md  ${
            pathname === '/dashboard/analytics'
              ? 'bg-gray-200 text-gray-800'
              : 'text-gray-200 hover:bg-[#252E3E]'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="ml-1"
            fill="#A855F7"
            width={18}
          >
            <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
          </svg>
          <p className="lg:block hidden">Analytics</p>
        </Link>
        <Link
          href="/"
          className="cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:bg-[#252E3E] px-2 py-2 rounded-md"
        >
          <MdAreaChart className="text-2xl text-purple-500 " />
          <p className="lg:block hidden">E-commerce</p>
        </Link>
        <Link
          href="/"
          className="cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:bg-[#252E3E] px-2 py-2 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="ml-1"
            fill="#A855F7"
            width={18}
          >
            <path d="M48 32C48 14.3 62.3 0 80 0s32 14.3 32 32V64h32V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64c0 1.5-.1 3.1-.3 4.5C254.1 82.2 288 125.1 288 176c0 24.2-7.7 46.6-20.7 64.9c31.7 19.8 52.7 55 52.7 95.1c0 61.9-50.1 112-112 112v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448H112v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V448H41.7C18.7 448 0 429.3 0 406.3V288 265.7 224 101.6C0 80.8 16.8 64 37.6 64H48V32zM64 224H176c26.5 0 48-21.5 48-48s-21.5-48-48-48H64v96zm112 64H64v96H208c26.5 0 48-21.5 48-48s-21.5-48-48-48H176z" />
          </svg>
          <p className=" hidden lg:flex justify-between w-full items-center">
            Crypto{' '}
            <span className="bg-violet-500 text-xs p-1 rounded-md text-white">
              New
            </span>
          </p>
        </Link>
        <Link
          href="/"
          className="cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:bg-[#252E3E] px-2 py-2 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="ml-1"
            fill="#A855F7"
            width={18}
          >
            <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
          </svg>

          <p className="lg:block hidden">Account</p>
        </Link>
      </div>
      <p className="lg:pl-2 pl-0 text-[#B5BCC4] lg:mx-2 mx-1 my-1 px-2 py-1 rounded-md uppercase lg-text-md text-xs">
        Concepts
      </p>
      <div className="w-full p-2 mx-auto mt-2 bg-opacity-30 flex flex-col gap-y-3">
        <Link
          href="/"
          className="cursor-pointer flex lg:justify-start justify-center  gap-4  items-center   hover:bg-[#252E3E] px-2 py-2 rounded-md "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            className="ml-1"
            fill="#A855F7"
            width={18}
          >
            <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
          </svg>
          <p className="lg:block hidden">Customers</p>
        </Link>
        <div className="cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:bg-[#252E3E] px-2 py-2 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="ml-1"
            fill="#A855F7"
            width={18}
          >
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
          <p className="lg:block hidden">Products</p>
        </div>
        <Link
          href="/"
          className="cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:bg-[#252E3E] px-2 py-2 rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            className="ml-1"
            fill="#A855F7"
            width={18}
          >
            <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
          <p className="lg:block hidden">Orders</p>
        </Link>
        <Link
          href="/"
          className="cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:bg-[#252E3E] px-2 py-2 rounded-md"
        >
          <BsBagCheck className="text-2xl text-purple-500 " />
          <p className="lg:block hidden">Invoices</p>
        </Link>
        <Link
          href="/"
          className="cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:bg-[#252E3E] px-2 py-2 rounded-md"
        >
          <CiDeliveryTruck className="text-2xl text-purple-500 " />
          <p className="lg:block hidden">Logistics</p>
        </Link>

        <Link
          href="/"
          className="cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:bg-[#252E3E] px-2 py-2 rounded-md"
        >
          <IoShareSocialOutline className="text-2xl text-purple-500 " />
          <p className="lg:block hidden">Social Media</p>
        </Link>
        <Link
          href="/"
          className="cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:bg-[#252E3E] px-2 py-2 rounded-md"
        >
          <HiClipboardList className="text-2xl text-purple-500 " />
          <p className="lg:block hidden">Blog</p>
        </Link>
      </div>
      <p className="lg:pl-2 pl-0 text-gray-600 lg:mx-2 mx-1 my-1 px-2 py-1 rounded-md uppercase lg-text-md text-xs">
        Apps
      </p>
      <div className="w-full p-2 mx-auto mt-2 bg-opacity-30 flex flex-col gap-y-3">
        <Link
          href="/"
          className="cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:bg-[#252E3E] px-2 py-2 rounded-md"
        >
          <BiCheck className="text-2xl text-purple-500 " />
          <p className="lg:block hidden">Kanban</p>
        </Link>
        <Link
          href="/"
          className="cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:bg-[#252E3E] px-2 py-2 rounded-md"
        >
          <BiMailSend className="text-2xl text-purple-500 " />
          <p className="lg:block hidden">Mail</p>
        </Link>
        <Link
          href="/"
          className="cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:bg-[#252E3E] px-2 py-2 rounded-md"
        >
          <BiChat className="text-2xl text-purple-500 " />
          <p className="lg:block hidden">chat</p>
        </Link>
        <Link
          href="/"
          className="cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:bg-[#252E3E] px-2 py-2 rounded-md"
        >
          <BiCalendarEvent className="text-2xl text-purple-500 " />
          <p className="lg:block hidden">Calender</p>
        </Link>
      </div>
      <p className="lg:pl-2 pl-0 text-gray-600 lg:mx-2 mx-1 my-1 px-2 py-1 rounded-md uppercase lg-text-md text-xs">
        Pages
      </p>
      <div className="w-full p-2 mx-auto mt-2 bg-opacity-30 flex flex-col gap-y-3">
        <Link
          href="/"
          className="cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:bg-[#252E3E] px-2 py-2 rounded-md"
        >
          <AiOutlineHdd className="text-2xl text-purple-500 " />
          <p className="lg:block hidden">Auth</p>
        </Link>
        <Link
          href="/"
          className="cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:bg-[#252E3E] px-2 py-2 rounded-md"
        >
          <GiPerpendicularRings className="text-2xl text-purple-500 " />
          <p className="lg:block hidden">Pricing</p>
        </Link>
        <Link
          href="/"
          className="cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:bg-[#252E3E] px-2 py-2 rounded-md"
        >
          <MdContactPhone className="text-2xl text-purple-500 " />
          <p className="lg:block hidden">Contact</p>
        </Link>
        <Link
          href="/"
          className="cursor-pointer flex lg:justify-start justify-center  gap-4  items-center hover:bg-[#252E3E] px-2 py-2 rounded-md"
        >
          <BiErrorCircle className="text-2xl text-purple-500 " />
          <p className="lg:block hidden">Error</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
