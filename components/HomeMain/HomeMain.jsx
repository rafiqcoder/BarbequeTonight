import MenuFooter from "@/components/HomeMain/HomMenu/MenuFooter";
import { Children } from "react";
import { useSelector } from "react-redux";
import Banner from "../Banner/Banner";
import HomeBBQitems from "./HomeBBQitems/HomeBBQitems";
import HomeMenu from "./HomMenu";

const HomeMain = () => {
  const { activeUser, loading } = useSelector((state) => state.userAuth);
  if (loading) {
    return  <div className="loader">Loading...</div>;
  }

  return (
    <>
      <Banner></Banner>

      <HomeBBQitems></HomeBBQitems>
      <HomeMenu children={Children}>
        
        <MenuFooter />
      </HomeMenu>
    </>
  );
};

export default HomeMain;
