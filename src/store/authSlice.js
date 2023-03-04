import { createSlice } from "@reduxjs/toolkit";
import { Base_url } from "./utils";


const initialState = {
    activeUser: null,
    error: null,
    loading: true
}


const authSlice = createSlice({
    name: "userAuth",
    initialState,

    reducers: {
        setUser: (state,action) => {
            state.activeUser = action.payload;
            // console.log('userFromStore',state.activeUser);
        },
        setError: (state,action) => {
            state.error = action.payload;
        },
        setLoading: (state,action) => {
            state.loading = action.payload;
        },
        // saveUser: (state,action) => {
        //     const user = action.payload;
        //     const { displayName,email } = user;
            
        //     console.log('userFromStore',updatedUser);
        //     // const saveUserToDb = (name,email,img) => {


        //     //     console.log(name,email,img);
        //     //     const user = { name,email,img };
        //     fetch(`${Base_url}/users`,{
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(updatedUser),
        //     })
        //         .then((res) => res.json())
        //         .then((data) => {
        //             if (data.insertedId) {

        //                 console.log('dataFromStore',data);

        //             }
        //         })
        //         .catch((err) => {
        //             console.log(err);
        //         });
        //     // };
        // }

    },
})
export const { setUser,setError,setLoading,saveUser } = authSlice.actions;
export default authSlice.reducer;