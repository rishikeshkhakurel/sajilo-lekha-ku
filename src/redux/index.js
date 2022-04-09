import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "./slice/Customer.Slice";
import editSlice from "./slice/edit.Slice";
import userSlice from "./slice/User.Slice";
import staffSlice from "./slice/staffSlice";
import productSlice from "./slice/ProductSlice";
import loanSlice from "./slice/loanSlice";

const store = configureStore({
    reducer:{
        userSlice:userSlice.reducer,
        customerSlice:customerSlice.reducer,
        editSlice:editSlice.reducer,
        staffSlice : staffSlice.reducer,
        productSlice:productSlice.reducer,
        loanSlice:loanSlice.reducer

    }
})

export default store;
