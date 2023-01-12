import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import { createContext,useEffect,useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { app } from "../firbase/firebase.config";
import { fetchCartDbThunk } from "../store/actions/getData";


export const DataContext = createContext();
export const AuthContext = createContext();

const Context = ({ children }) => {
  // Auth StatesE
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
    const [userEmail,setUserEmail] = useState("");
       const [userData, setUserData] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const auth = getAuth(app);
const [bbqProducts, setBbqProducts] = useState([]);
  const Provider = new GoogleAuthProvider();
 


  useEffect(() => {
    setCurrentUser(
      userData?.find((eachUser) => eachUser?.email === user?.email)
    );
  }, [userData, user]);


  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, Provider);
  };
  const registerWithPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateNameAndPhoto = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [auth]);

  const saveUserToDb = (name, email, img) => {
  
    

    const user = { name, email, img};
    fetch(`http://localhost:5000/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
            setUserEmail(user?.email);
            toast.success("You are registered successfully");
        }
      })
        .catch((err) => {
            console.log(err);
            setLoading(false);
      });
  };
 
  // sharing user infor from db
  
  const dataInfo = { currentUser, setCurrentUser, bbqProducts, setBbqProducts };

  const userInfo = {
    loginWithGoogle,
    logOut,
    loginWithEmail,
    updateNameAndPhoto,
    registerWithPassword,
    user,
    loading,
    setLoading,
    userEmail,
    saveUserToDb,
  };
  return (
    <AuthContext.Provider value={userInfo}>
      <DataContext.Provider value={dataInfo}>

      {children}
      </DataContext.Provider>
    </AuthContext.Provider>
  );
};

export default Context;
