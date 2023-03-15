
// import { AuthContext } from '@/src/Context/Context';
import Header from '@/components/Header/Header';
import { app } from '@/src/firbase/firebase.config';
import { fetchCartDbThunk } from '@/src/store/actions/getData';
import { setLoading,setUser } from '@/src/store/authSlice';
import { setActiveUser } from '@/src/store/cartSlice';
import { getAuth } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import Footer from '../components/Footer/Footer';


const Layout = ({ children }) => {
  // const {user} =useContext(AuthContext);
  const { activeUser,loading } = useSelector((state) => state.userAuth);
    // const [setEmail, admin] = isAdmin();
    // console.log("admina", admin);
  
  const dispatch = useDispatch();
  const cartDispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCartDbThunk(activeUser?.email));

    cartDispatch(setActiveUser(activeUser?.email));
    // setEmail(activeUser?.email);
  }, [activeUser?.email]);
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
  },[]);

  if (loading) {
    return (
      <div className="radial-progress text-[red] loader" style={{ "--value": 70 }}>
        70%
      </div>
    );

  }
  return (
    <>
      <title>Sundial Chamak | Welcome</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css" integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lobster+Two:ital,wght@0,400;0,700;1,400;1,700&family=Permanent+Marker&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;