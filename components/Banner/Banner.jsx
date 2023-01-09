import Image from "next/image";
import heroImg from "@/public/assets/hero_bg.jpg";

const Banner = () => {
  return (
    <div className="dark:bg-gray-900">
      <div className="w-full">
        <div className="relative ">
          <Image
            src={heroImg}
           
            alt="A work table with house plants"
            className="w-full h-full hidden lg:block"
          >
           
          </Image>
          <Image
            src={heroImg}
           
            alt="A work table with house plants"
            className="hidden sm:block lg:hidden w-full h-full"
          >
           
          </Image>
          <Image
            src={heroImg}
         
            alt="A work table with house plants"
            className="sm:hidden w-full h-full"
          ></Image>

          <div className="absolute z-10 top-40 left-20 mx-4 sm:mx-0 mt-36 sm:mt-0 sm:py-20 md:py-28 lg:py-20 xl:py-28 sm:pl-14 flex flex-col sm:justify-start items-start">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white sm:w-8/12">
              Minimalist Furniture Design
            </h1>
            <p className="text-base leading-normal text-white mt-4 sm:mt-5 sm:w-5/12">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <button className="hidden sm:flex bg-gray-800 py-4 px-8 text-base font-medium text-white mt-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
              Explore
            </button>
          </div>
          <button className="absolute bottom-0 sm:hidden dark:bg-white dark:text-white bg-gray-800 py-4 text-base font-medium text-white mt-8 flex justify-center items-center w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 hover:bg-gray-700">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
