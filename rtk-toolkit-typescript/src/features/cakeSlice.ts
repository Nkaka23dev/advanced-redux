import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type initialState = {
  numberOfCake: number;
};

const initialState: initialState = {
  numberOfCake: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfCake -= 1;
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numberOfCake += action.payload;
    },
  },
});

export default cakeSlice.reducer;
export const { ordered, restocked } = cakeSlice.actions;
