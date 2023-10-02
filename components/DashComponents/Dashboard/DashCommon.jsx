import Image from "next/image";
import { BiRightArrowAlt } from 'react-icons/bi';
import { RiListSettingsFill } from 'react-icons/ri';

// type Card={
//   id : number,
//   name : string,
//   tasks : number,
//   done? : number,
//   image : string,
//   navigationText : string

// }

const DashCommon = () => {

  const card1 =[
    {
      id : 1,
      name : 'Summery Task',
      tasks : 32,
      done: 12,
      image : "/assets/summary.jpg",
      navigationText : "See All Activity"
    },
    {
      id : 2,
      name : 'Overdue Tasks',
      tasks : 16,
      image : "/assets/overdue.jpg",
      navigationText : "Go to Kanban"
    },
    {
      id : 3,
      name : 'Open Issues',
      tasks : 21,
      image : "/assets/open.jpg",
      navigationText : "Go to Issues"
    },
  ]

  return (
    <div>
      <div className=" mx-auto  bg-white overflow-hidden  md:mt-14 pt-5">
        {/* overview page        */}
        <div className="flex justify-between items-center">
          <h3 className="sm:text-4xl text-2xl pl-2 sm:pl-0 font-semibold">Overview</h3>
          <button className="bg-primary-color px-3 sm:py-2 py-1 rounded-2xl text-white mr-2 sm:mr-0">
            + New App
          </button>
        </div>
        {/* overview page end       */}

        {/* summary cards  */}
        <div className="my-[20px] gap-8 flex flex-col lg:flex-row w-full pt-5">
          {card1?.map((card) => (
            <div
              key={card?.id}
              className="  hover:border hover:border-gray-100 shadow-lg shadow-gray-100 border border-gray-100 rounded-xl w-full divide-y divide-slate-100"
            >
              <div className="flex gap-2 p-2 items-center pl-10">
                <Image
                  src={card.image}
                  alt="Image"
                  className="w-[50px] h-[50px] mr-5"
                  width={50}
                  height={50}
                />
                <div className="py-4 flex flex-col ">
                  <p className="text-gray-500 text-[14px]">{card.name}</p>
                  <h4 className="text-[36px] font-bold">{card.tasks}</h4>
                </div>
              </div>

              {/* footer  */}
              <div className="px-3 py-3">
                <p className="text-[12px] text-black font-semibold flex gap-2 items-center py-2">
                  {card.navigationText}{' '}
                  <BiRightArrowAlt className="text-[16px]" />
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* summary cards end */}

        {/* update cards  */}

        <div className="my-10 w-full lg:grid grid-cols-3 gap-10 ">
          {/* card1  */}
          <div className="px-3 hover:border hover:border-gray-100 shadow-lg shadow-gray-100 border border-gray-100 py-2 bg-[#F5F7FF] rounded-2xl md:flex  col-span-2 justify-start items-center gap-10 pl-10">
            <Image
              src="/assets/img/girlwithleptop.png"
              priority={true}
              width={200}
              height={200}
              alt="Image"
              placeholder="empty"
              className="h-[200px] w-auto"
            />

            <div className="flex flex-col gap-3 justify-between py-[50px]">
              <p className="text-[14px] text-blue-700 font-medium">
                NEW V6 UPDATE
              </p>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">New update available!</h2>
                <p className="text-base text-gray-500">
                  Your favorite template has a new trendy look, more
                  customization <br /> options, screens & more.
                </p>
              </div>

              <button className="flex gap-2 p-2 md:w-[210px] items-center rounded-2xl text-white bg-primary-color">
                {' '}
                <RiListSettingsFill /> Open Theme Settings
              </button>
            </div>
          </div>
          {/* card1 end */}

          {/* card2  */}
          <div className="px-3 py-2 rounded-2xl flex justify-center h-full w-full hover:border hover:border-gray-100 shadow-lg shadow-gray-100 border border-gray-100">
            <div className="flex flex-col  gap-2 p-5">
              <Image
                width={100}
                height={50}
                src="/assets/img/next-tip.jpg"
                alt="next tip carousel"
              />
              <div className="flex justify-start gap-2">
                {' '}
                <span className="w-2 h-2 bg-blue-700 rounded-full"></span>{' '}
                <span className="w-2 h-2 bg-gray-200 rounded-full"></span>{' '}
                <span className="w-2 h-2 bg-gray-200 rounded-full"></span>
              </div>
              <h2 className="text-[20px] font-semibold">New fresh design</h2>
              <p className="text-[16px] text-gray-400">
                Your favorite template has a new trendy lookmore customization
                options, screens & more
              </p>
            </div>
          </div>

          {/* card2 end */}
        </div>
        {/* update cards end */}
      </div>
    </div>
  );
};

export default DashCommon;
