const TOOLKIT = require('@reduxjs/toolkit');
const cakeReducer = require('../features/cake/cakeSlice')

const store = TOOLKIT.configureStore({
    reducer: {
        cake: cakeReducer
    }
})

module.exports = store;