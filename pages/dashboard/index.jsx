import DashWellcome from "@/components/DashComponents/DashWellcome";
import DashBoardLayout from "@/Layout/DashBoardLayout";
import { AuthContext } from "@/src/Context/Context";
import { useContext } from "react";

const Dashboard = () => {
  const {value } = useContext(AuthContext);

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
