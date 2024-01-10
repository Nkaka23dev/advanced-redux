import { configureStore } from "@reduxjs/toolkit";
import CakeReducer from "../features/CakeSlice";

export const store = configureStore({
  reducer: {
    cake: CakeReducer,
  },
});
