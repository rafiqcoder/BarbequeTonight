
import DashSidebar from "@/components/DashComponents/DashSidebar/DashSidebar";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header></Header>
      <div className="flex">
        <DashSidebar></DashSidebar>
        {children}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Layout;
