import DashOverview from "@/components/DashComponents/DashOverview";
import DashBoardLayout from "@/Layout/DashBoardLayout";
import Analytics from "@/components/DashComponents/analytics/analytics";
const Dashboard = () => {
  return (
    <div className=" overflow-hidden">
      <main className="flex flex-col ">
        <DashBoardLayout>
          <Analytics />
        </DashBoardLayout>
      </main>
    </div>
  );
};

export default Dashboard;
