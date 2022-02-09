import { createSlice } from "@reduxjs/toolkit";

const initState = {
  status: "idel",
  data: {login:true},
  error: false,
};

const setData = (_, action) => ({
  status: "data",
  data: action.payload,
  error: false,
});

const userSlice = createSlice({
  name: "userSlice",
  initialState: initState,
  reducers: {
    setData,
  },
});

export default userSlice;
