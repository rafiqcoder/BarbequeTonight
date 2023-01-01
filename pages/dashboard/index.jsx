import { useContext } from "react";
import DashSidebar from "../../components/DashComponents/DashSidebar/DashSidebar";
import DashWellcome from "../../components/DashComponents/DashWellcome";
import Layout from "../../Layout/Layout";
import { AuthContext } from "../../src/utils/Context/Context";

const DashboardLayout = () => {
  const {value } = useContext(AuthContext);
  console.log(value)
  return (
    <div className=" overflow-hidden">
      <main className="flex flex-col">
        <Layout>
        <div className="flex">
          <DashSidebar></DashSidebar>
          <DashWellcome/>
        </div>
        </Layout>
      </main>
    </div>
  );
};

export default DashboardLayout;
