// src/features/auth/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    loading: false,
    error: "",
  }

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

    loginStart(state) {
      state.loading = true;
      state.error = "";
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.error = "";
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
