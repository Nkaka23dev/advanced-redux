import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfCake: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    deduct: (state) => {
      state.numberOfCake -= 1;
    },
    add: (state, action) => {
      state.numberOfCake += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { add, deduct } = cakeSlice.actions;
