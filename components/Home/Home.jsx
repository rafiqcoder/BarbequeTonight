import { useSelector } from "react-redux";
import Banner from "../Banner/Banner";
import HomeBBQitems from "./HomeBBQitems/HomeBBQitems";
import HomeMenu from "./HomMenu/HomeMenu";

const Home = () => {
  const { activeUser, loading } = useSelector((state) => state.userAuth);
  if (loading) {
    return  <div className="loader">Loading...</div>;
  }
  // console.log(activeUser.email);
  return (
    <div>
      <Banner></Banner>
      <HomeBBQitems></HomeBBQitems>
      <HomeMenu></HomeMenu>
    </div>
  );
};

export default Home;