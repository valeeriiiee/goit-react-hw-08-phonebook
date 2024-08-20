// store.js
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import filterReducer from './filterSlice';
import contactsReducer from './contactsSlice';
import { authSlice } from './authSlice';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts', 'token'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
