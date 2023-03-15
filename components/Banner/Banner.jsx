import Image from "next/image";


const Banner = ({heroImg}) => {
  return (
    <div className="dark:bg-gray-900 ">
      <div className="w-full">
        <div className="relative">
          <Image
            src={heroImg}
            alt="A work table with house plants"
            className="w-full max-h-[550px] object-cover hidden lg:block"
          ></Image>
          <Image
            src={heroImg}
            alt="A work table with house plants"
            className="hidden sm:block lg:hidden w-full h-full"
          ></Image>
          <Image
            src={heroImg}
            alt="A work table with house plants"
            className="sm:hidden w-full sm:h-full h-[300px] object-cover"
          ></Image>
          <div className=" bg-gradient-to-r from-black to-transparent absolute top-0 right-0 z-10 w-full h-full hidden lg:block"></div>
          <div className="absolute z-10 top-0 sm:left-20 mx-4 sm:mx-0 mt-10 sm:mt-0 sm:py-20 md:py-28 lg:py-20 xl:py-28 sm:pl-14 lg:flex flex-col sm:justify-start items-start ">
            <h1 className="text-xl sm:text-5xl lg:text-6xl font-semibold text-white sm:w-8/12 text-left sm:text-left w-6/12">
              YOU ALWAYS LIKE TASTE, OF OUR FOODS
            </h1>
            <p className="text-base leading-normal text-white mt-4 sm:mt-5 sm:w-5/12 hidden lg:block">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className=" sm:flex bg-gray-800 py-3 px-6 text-base font-medium text-white mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
              Explore
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Banner;
