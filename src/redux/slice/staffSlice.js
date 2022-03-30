import { createSlice } from "@reduxjs/toolkit";

const initState = {
  status: "ideal",
  data: [],
  error: false,
};

const setData = (_, action) => ({
  status: "data",
  data: action.payload,
  error: false,
});

const staffSlice = createSlice({
  name: "staffSlice",
  initialState: initState,
  reducers: {
    setData,
  },
});

export default staffSlice;
