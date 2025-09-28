import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import koranReducer from '../slices/koranSlice';

export const store = configureStore({
  reducer: {
    counter: authReducer,
    audio: koranReducer
  }
});
