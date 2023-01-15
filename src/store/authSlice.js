import { createSlice } from "@reduxjs/toolkit";

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
        },
        setError: (state,action) => {
            state.error = action.payload;
        },
        setLoading: (state,action) => {
            state.loading = action.payload;
        }

    },
})
export const { setUser,setError,setLoading } = authSlice.actions;
export default authSlice.reducer;