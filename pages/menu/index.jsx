
import heroImg from "@/assets/menuBg.jpg";
import Banner from "@/components/Banner/Banner";
import Head from "@/components/HomeMain/Head/Head";
import AllMenuBody from "@/components/HomeMain/HomMenu/AllMenuBody";
import Layout from "@/Layout/Layout";
import { useGetMenusQuery } from "@/src/store/api/productsApi";
import { addToCart } from "@/src/store/cartSlice";
import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
const index = () => {
  const { activeUser } = useSelector(state => state.userAuth);
  const { data, error, isLoading, isSuccess, isFetching } = useGetMenusQuery();
  const [bundleProducts,setBundleProducts] = useState([]);
  const [activeMenu,setActiveMenu] = useState([]);
  const dispatch = useDispatch();
  const [menuItems,setMenuItems] = useState([]);
  const [total,setTotal] = useState(0);
  const { asPath,pathname } = useRouter();

  useEffect(() => {
    if (data !== null || data !== undefined || data !== "") {
      
      setBundleProducts(data);
    }
  },[data])
  

    // console.log(menu[0]?.menu);



  const addBundleToCart = (id) => {
    console.log("id",id);
     const menu = bundleProducts?.filter((e) => e._id === id);
     console.log("menu", menu);
     // let [menu] = activeMenu[0];
     setActiveMenu(menu[0]);
    const updatedProduct = {
      product:menu[0],
      userEmail: activeUser?.email,
    };
    // console.log("updatedProduct",updatedProduct);
    dispatch(addToCart(updatedProduct))
  }
  // console.log("menuItems",menuItems);
  return (
    <Layout>
      <Banner heroImg={heroImg}></Banner>
      <section className="bg-[#faf7f2] bg-[url('/product_bg_1.png')] py-1">
        <Head
          title="Our Popular Delicious"
          desc="Objectively pontificate quality models before intuitive information. Dramatically recaptiualize multifunctional materials."
          badge="Menus"
          badge2="Menus"
        ></Head>
        {bundleProducts?.map((e) => (
          <AllMenuBody
            key={e._id}
            id={e._id}
            menuItems={e}
            name={e.name}
            total={e.price}
            addBundleToCart={addBundleToCart}
          />
        ))}
      </section>
    </Layout>
  );
};

export default index;
