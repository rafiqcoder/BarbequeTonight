import React from 'react';

const SingleBanner = ({title,hero_bg}) => {
    return (
      <div className="">
        <div className="">
          <div className="relative inset-0">
            <div className="relative ">
              <img
                alt=""
                src={hero_bg}
                className="w-full object-cover lg:h-[400px] lg:block md:hidden hidden"
              />
              <div className="w-full h-full bg-black opacity-50 absolute top-0 left-0" />
              <img
                alt=""
                src={hero_bg}
                className="lg:hidden md:block hidden w-full object-cover"
              />
              <img alt="" src={hero_bg} className="lg:hidden md:hidden block" />
              <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <h2 className="text-xl font-semibold md:text-4xl text-white xl:text-6xl uppercase">
                  {title}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingleBanner;