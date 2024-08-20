import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.goit.global/';

export const register = createAsyncThunk(
  'auth/register',
  async (_, thunkAPI) => {}
);

export const logIn = createAsyncThunk('auth/logIn', async (_, thunkAPI) => {});

export const logOut = createAsyncThunk(
  'auth/logOut',
  async (_, thunkAPI) => {}
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {}
);
