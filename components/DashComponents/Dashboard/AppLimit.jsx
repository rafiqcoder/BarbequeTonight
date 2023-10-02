import styles from '@/styles/AppUsage.module.css';
import { useEffect, useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { ImPower } from "react-icons/im";
import { Cell, Pie, PieChart } from 'recharts';
const RADIAN = Math.PI / 180;

const cx = 150;
const cy = 200;
const iR = 80;
const oR = 100;

const AppLimit = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const data = [
  { name: 'A', value: 90, color : '#6366F1' },
  { name: 'B', value: 25, color: '#F5F7FF'  },
 
    ]
    setData(data);
  }, []);

  return (
      <><div className=" bg-white shadow rounded-lg h-[420px]  lg:col-span-1">
      {/* card1  */}
      <div className='flex justify-between items-center px-3'>
        <div className="p-3">
          <h2 className='font-bold text-xl'>App Limits</h2>
          <p className='text-gray-600'>Upgrade before reaching it</p>
        </div>
        <div className="flex justify-center items-center p-2 mr-3">
          <div className="flex flex-col mr-2">
            <BsThreeDotsVertical></BsThreeDotsVertical>
          </div>

        </div>
      </div>
    

        <div className={styles.cusPie}>
          <PieChart width={400} height={500}>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={data}
              cx={cx}
              cy={cy}
              innerRadius={iR}
              outerRadius={oR}
              fill="#8884d8"
              stroke="none"

            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>

          </PieChart>
        </div>
     <div className="text-center">
       
       <p className="text-xl font-bold mb-4">80%</p>
       <p className="text-xl font-bold">You&apos;ve almost reached your limit</p>
       <p className="text-sm text-gray-500 w-[80%] mx-auto mt-1">you have used 80% of your available spots. Upgrade plan to create more</p>
     </div>
    
      <div className="flex justify-end items-center mr-3 mt-3">
        <button className="bg-[#6366F1] flex justify-center items-center gap-2 text-white p-[6px] px-3 rounded-md text-base"> Upgrade Plan <ImPower className='text-sm mt-1'></ImPower> </button>
      </div>
    </div></>
          
    );
};

export default AppLimit;