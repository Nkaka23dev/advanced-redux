const createSlice = require('@reduxjs/toolkit').createSlice
const cakeActions = require('../cake/cakeSlice').cakeActions


const initialState = {
    numberOfIceCream: 20
}

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        ordered: (state, action) => {
            state.numberOfIceCream -= action.payload
        },
        restored: (state, action) => {
            state.numberOfIceCream += action.payload
        },
    },
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.numberOfIceCream -= 1
    //     }
    // }
    extraReducers: (build) => {
        build.addCase(cakeActions.ordered, state => {
            state.numberOfIceCream--
        })
    }
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions