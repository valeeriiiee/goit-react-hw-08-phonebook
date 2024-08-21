import { createSlice } from '@reduxjs/toolkit';
import { refreshUser, register, logIn, logOut } from './authOperations';

const initialAuthState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  // isLoading: false,
  // isError: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {},
  extraReducers: builder => {
    builder
      // .addCase(register.pending, (state, action) => {
      //   state.isLoading = true;
      // })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      // .addCase(register.rejected, (state, action) => {
      //   state.isError = true;
      // })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
