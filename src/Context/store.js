import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../Context/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer
  }
});
