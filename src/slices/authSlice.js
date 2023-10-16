import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  mode: localStorage.getItem("mode") ? localStorage.getItem("mode") : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
      // localStorage.setItem('token', JSON.stringify(action.payload.token))
    },
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
    setMode: (state, action) => {
      state.mode = action.payload;
      console.log("Payload: ", action.payload);
      localStorage.setItem("mode", action.payload);
    },
  },
});

export const { setCredentials, logout, setMode } = authSlice.actions;

export default authSlice.reducer;
