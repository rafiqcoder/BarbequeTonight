import DashWellcome from "@/components/DashComponents/DashWellcome";
import DashBoardLayout from "@/Layout/DashBoardLayout";
import { useContext } from "react";

const Dashboard = () => {
 

  return (
    <div className=" overflow-hidden">
      <main className="flex flex-col">
        <DashBoardLayout>
      
         
          <DashWellcome/>
        
        </DashBoardLayout>
      </main>
    </div>
  );
};

export default Dashboard;
