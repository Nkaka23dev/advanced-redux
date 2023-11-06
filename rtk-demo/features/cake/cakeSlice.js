const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numberOfCake: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numberOfCake--
        },
        restored: (state, action) => {
            state.numberOfCake += action.payload
        }
    }

})
module.exports = cakeSlice.reducer
module.exports.cakeActions = cakeSlice.actions  