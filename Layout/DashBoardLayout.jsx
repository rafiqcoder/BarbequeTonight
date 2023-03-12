
import DashSidebar from "@/components/DashComponents/DashSidebar/DashSidebar";
import Header from '@/components/Header/Header';
import { app } from '@/src/firbase/firebase.config';
import isAdmin from "@/src/hooks/isAdmin";
import { fetchCartDbThunk } from '@/src/store/actions/getData';
import { setLoading,setUser } from '@/src/store/authSlice';
import { setActiveUser } from '@/src/store/cartSlice';
import { getAuth } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Footer from '../components/Footer/Footer';


const dashboardLayout = ({ children }) => {
    const { activeUser, loading } = useSelector((state) => state.userAuth);
  const [admin,setAdmin] = isAdmin(activeUser?.email?activeUser?.email:null);
  // console.log("admina", admin);
  const dispatch = useDispatch();
  const cartDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartDbThunk(activeUser?.email));
    cartDispatch(setActiveUser(activeUser?.email));
    setAdmin(activeUser?.email?activeUser?.email:null);
  },[activeUser?.email]);
  
  const userDispatch = useDispatch();
  const auth = getAuth(app);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((activeUser) => {
      if (activeUser) {
        // user is logged in
        userDispatch(setUser(activeUser));
        userDispatch(setLoading(false));
      } else {
        // user is logged out
        userDispatch(setUser(null));
        userDispatch(setLoading(false));
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);


  if (loading) {
    return (
      <div
        className="radial-progress text-[red] loader"
        style={{ "--value": 70 }}
      >
        70%
      </div>
    );
  }
  return (
    <>
      <Header></Header>
      <div className="flex">
        <DashSidebar admin={admin}></DashSidebar>
        {children}
      </div>
      <Footer></Footer>
    </>
  );
};

export default dashboardLayout;
