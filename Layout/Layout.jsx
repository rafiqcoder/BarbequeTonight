
import { AuthContext } from '@/src/Context/Context';
import { app } from '@/src/firbase/firebase.config';
import { fetchCartDbThunk } from '@/src/store/actions/getData';
import { setUser } from '@/src/store/authSlice';
import { setActiveUser } from '@/src/store/cartSlice';
import { getAuth } from 'firebase/auth';
import { useContext,useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';


const Layout = ({ children }) => {
  const {user} =useContext(AuthContext);
   const dispatch = useDispatch();
   const cartDispatch = useDispatch();
   useEffect(() => {
     dispatch(fetchCartDbThunk(user?.email));

     cartDispatch(setActiveUser(user?.email));
   },[user?.email]);
  
  const auth = getAuth(app);
  const userDispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // user is logged in
        userDispatch(setUser(user));
      } else {
        // user is logged out
        userDispatch(setUser(null));
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
    return (
      <>
        <title>Sundial Chamak | Welcome</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
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