const createSlice = require("@reduxjs/toolkit").createSlice;
const cakeActions = require("./cakeSlice").cakeActions;

const initialState = {
  numberOfIcecream: 20,
};

const iceCream = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfIcecream--;
    },
    restoked: (state, action) => {
      state.numberOfIcecream += action.payload;
    },
  },
  extraReducers: (build) => {
    build.addCase(cakeActions.ordered, (state) => {
      state.numberOfIcecream -= 1;
    });
  },
});

module.exports = iceCream.reducer;
module.exports.iceCreamActions = iceCream.actions;
