import { configureStore } from '@reduxjs/toolkit';
import userReducer from './components/auth/index';

export const store = configureStore({
  reducer: { user: userReducer },
});
