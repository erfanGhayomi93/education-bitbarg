import { getLocalStorageToken } from "@/core/helpers";
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: getLocalStorageToken() || "",
    user: undefined,
    deviceId:
      typeof window !== "undefined" ? localStorage.getItem("deviceId") : "",
    cachedLogo: undefined,
  },
  reducers: {
    setToken: (state, { payload }) => {
      state.token = payload;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    setCachedLogo: (state, { payload }) => {
      state.cachedLogo = payload;
    },
    setDeviceId: (state, { payload }) => {
      state.deviceId = payload;
    },
  },
});

export const { setToken, setUser, setDeviceId, setCachedLogo } =
  authSlice.actions;

export default authSlice.reducer;
