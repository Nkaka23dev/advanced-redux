import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "./cakeSlice";

const initialState = {
  numberOfIceCream: 20,
};

const IceCreamSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfIceCream -= 1;
    },
    restocked: (state, action) => {
      state.numberOfIceCream += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numberOfIceCream -= 1;
    });
  },
});

export default IceCreamSlice.reducer;
export const { ordered, restocked } = IceCreamSlice.actions;
