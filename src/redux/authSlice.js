import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {},
});

export const authReducer = authSlice.reducer;
