import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../features/cakeSlice";
import iceCreamReducer from "../features/iceCream";
import userReducer from "../features/usersSlice";

const store = configureStore({
  reducer: {
    cakes: cakeReducer,
    iceCream: iceCreamReducer,
    users: userReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
