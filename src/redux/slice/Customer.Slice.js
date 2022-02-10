import { createSlice } from "@reduxjs/toolkit";

const initState = {
  status: "idel",
  data: [],
  error: false,
};

const setData = (_, action) => ({
  status: "data",
  data: action.payload,
  error: false,
});

const customerSlice = createSlice({
  name: "customerSlice",
  initialState: initState,
  reducers: {
    setData,
  },
});

export default customerSlice;
