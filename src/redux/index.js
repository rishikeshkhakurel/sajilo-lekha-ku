import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "./slice/Customer.Slice";
import editSlice from "./slice/edit.Slice";
import userSlice from "./slice/User.Slice";
import staffSlice from "./slice/staffSlice";
import productSlice from "./slice/ProductSlice";
import loanSlice from "./slice/loanSlice";
import interestDetailSlice from "./slice/interestDetailSlice";
import taxSlice from "./slice/tax";
import customerLedgerSlice from "./slice/CustomerLedgerSlice";
import personalSlice from "./slice/personalAccountSlice";
import goodsSupplierDetail from "./slice/GoodsSupplierDetail";
import serviceSupplierSlice from "./slice/ServiceSupplierSlice";
import staffLedgerSlice from "./slice/staffLedgerSlice";
import serviceSupplierLedgerSlice from "./slice/serviceSupplierLedger";
import goodsSupplierLedger from "./slice/goodsSupplierLedgerSlice";
import assetSlice from "./slice/assetSlice";

const store = configureStore({
    reducer:{
        userSlice:userSlice.reducer,
        customerSlice:customerSlice.reducer,
        editSlice:editSlice.reducer,
        staffSlice : staffSlice.reducer,
        productSlice:productSlice.reducer,
        loanSlice:loanSlice.reducer,
        interestDetailSlice:interestDetailSlice.reducer,
        taxSlice:taxSlice.reducer,
        customerLedgSlice:customerLedgerSlice.reducer,
        personalAccountSlice: personalSlice.reducer,
        goodsSupplierDetail:goodsSupplierDetail.reducer,
        serviceSupplierSlice: serviceSupplierSlice.reducer,
        staffLedgerSlice: staffLedgerSlice.reducer,
        serviceSupplierSlice: serviceSupplierLedgerSlice.reducer,
        goodsSupplierLedger:goodsSupplierLedger.reducer,
        assetSlice: assetSlice.reducer
    }  
})

export default store;
