import { useEffect,useState } from "react";
import { useSelector } from "react-redux";
import Banner from "../Banner/Banner";
import HomeBBQitems from "./HomeBBQitems/HomeBBQitems";
import HomeMenu from "./HomMenu/HomeMenu";


const HomeMain = () => {
  const { activeUser, loading } = useSelector((state) => state.userAuth);
  if (loading) {
    return  <div className="loader">Loading...</div>;
  }
  const [data,setdata]= useState([])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) =>setdata(data));
  },[]);

  const sendData = () => {
    fetch("http://localhost:5000/customUser", {
      method: "POST",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setdata(data));
  }
  return (
    <>
      <Banner></Banner>
      <div>
        <button className="" onClick={sendData}>send Data to Db</button>
      </div>
      <HomeBBQitems></HomeBBQitems>
      <HomeMenu></HomeMenu>
    </>
  );
};

export default HomeMain;
