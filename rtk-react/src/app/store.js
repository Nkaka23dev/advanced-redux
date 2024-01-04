import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cakeSlice";

const store = configureStore({
  reducer: {
    cakes: cakeReducer,
  },
});

export default store;
