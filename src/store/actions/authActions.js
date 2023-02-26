import { createUserWithEmailAndPassword,getAuth,GoogleAuthProvider,signInWithEmailAndPassword,signInWithPopup,signOut,updateProfile } from "firebase/auth";
// import { useDispatch } from "react-redux";
import { app } from "../../firbase/firebase.config";
import { setLoading } from "../authSlice";
// import { setUser } from "../store/authSlice";

const auth = getAuth(app);
const Provider = new GoogleAuthProvider();
// const userDispatch = useDispatch();

export const signInWithGoogle = () => {
    return signInWithPopup(auth,Provider);

};
export const logOut = () => {
    setLoading(true);
    return signOut(auth);
};

export const loginWithEmail = (email,password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
};
export const registerWithPassword = (email,password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
};
export const updateNameAndPhoto = (name,photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser,{
        displayName: name,
        photoURL: photo,
    });
};
// export const handleFunUserToDb = (user) => {
//     const { uid,displayName,email,photoURL } = user;
//     const userObj = {
//         uid,
//         displayName,
//         email,
//         photoURL,
//     };
//     setLoading(true);
//     const saveUserToDb = (name,email,img) => {



//         const user = { name,email,img };
//         fetch(`https://server-9cmeqz35g-rafiqcoder.vercel.app/users`,{
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(user),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 if (data.insertedId) {
//                     setUserEmail(user?.email);
//                     toast.success("You are registered successfully");
//                 }
//             })
//             .catch((err) => {
//                 console.log(err);
//                 setLoading(false);
//             });
//     };


// };
// const auth = getAuth(app);



