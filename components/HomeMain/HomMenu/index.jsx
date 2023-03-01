import { useGetMenusQuery } from "@/src/store/api/productsApi";
import { addToCart } from "@/src/store/cartSlice";
import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import MenuBody from "./MenuBody";
import MenuHead from "./MenuHead";

const index = ({children}) => {
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
  
  useEffect(() => {
    // console.log('bundleProducts',bundleProducts);
    // console.log('menu',menu);
    if (bundleProducts !== undefined || bundleProducts !== null || bundleProducts !== "") {
      console.log('bundleProducts',bundleProducts);
      if (bundleProducts) {
        let menu = bundleProducts;
        console.log("menu",menu);
        setTotal (menu[0]?.price);
        setMenuItems(bundleProducts[0]?.menu);
        setActiveMenu(bundleProducts[0]);
      }
       
    }
    // console.log(menu[0]?.menu);
  }, [bundleProducts]);

  const setMenu = (id) => {
    let menu = bundleProducts?.filter((e) => e._id === id);
    // console.log(menu2);
    // let [menu] = activeMenu[0];
    setActiveMenu(menu[0]);
    // console.log(menu);
    setMenuItems(menu[0]?.menu);
  }
  console.log('activeMenu',activeMenu);
  const addBundleToCart = () => {
    const updatedProduct = {
      product:activeMenu,
      userEmail: activeUser?.email,
    };
    dispatch(addToCart(updatedProduct))
  }
  // console.log(menuItems);

console.log('activeMenu',activeMenu?._id);

    return (
      <section className="bg-[#faf7f2] bg-[url('/product_bg_1.png')] py-32">
        <div className="container mx-auto">
          <MenuHead
            bundleProducts={bundleProducts}
            activeMenu={activeMenu}
            setMenu={setMenu}
          />
          <MenuBody
            activeMenu={activeMenu}
            menuItems={menuItems}
            total={total}
            addBundleToCart={addBundleToCart}
          />
          {children}
        </div>
      </section>
    );
};

export default index;