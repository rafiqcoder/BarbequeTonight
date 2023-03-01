import React from 'react';

const Head = ({badge,title,desc,badge2}) => {
    return (
      <div className="my-10">
        <div className="flex flex-row justify-center items-center gap-1">
          <img src="/svg/title_icon.svg" alt="" />
          <span className="text-[#eb0029] font-lobsterTwo font-semibold text-[20px]">
            {badge?badge:''}
          </span>
        </div>
        <h1 className="text-[#010F1C] font-bold font-rubik text-[36px] text-center mb-3">
                {title?title:''}{" "}
                <span className="font-lobsterTwo text-[#eb0029]">{badge2?badge2:''}</span>
        </h1>
        <div className="flex flex-col items-center w-100">
          <p className="max-w-[560px] text-center text-[#4d5765] font-normal text-[16px] text-Roboto">
            {desc?desc:''}
          </p>
        </div>
      </div>
    );
};

export default Head;