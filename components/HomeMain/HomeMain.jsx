import MenuFooter from "@/components/HomeMain/HomMenu/MenuFooter";
import Link from "node_modules/next/link";
import { Children } from "react";
import { useSelector } from "react-redux";
import Banner from "../Banner/Banner";
import HomeBBQitems from "./HomeBBQitems/HomeBBQitems";
import HomeMenu from "./HomMenu";
import heroImg from "@/assets/hero_bg.jpg";
const HomeMain = () => {
  const { activeUser, loading } = useSelector((state) => state.userAuth);
  if (loading) {
    return  <div className="loader">Loading...</div>;
  }

  return (
    <>
      <section className="bg-[#faf7f2] bg-[url('/product_bg_1.png')] py-1">
        <Banner heroImg={heroImg}></Banner>

        <HomeBBQitems></HomeBBQitems>
        <MenuFooter children="view all bbq" />
        <HomeMenu children={Children}>
          <MenuFooter children="view all menu" />
        </HomeMenu>
      </section>
    </>
  );
};

export default HomeMain;
