import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/User.Slice";

const store = configureStore({
    reducer:{
        userSlice:userSlice.reducer,

    }
})

export default store;
