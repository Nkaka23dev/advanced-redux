const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../features/cake/cakeSlice')
// const reduxLogger = require('redux-logger');
const iceCreamReducer = require('../features/iceCream/iceCreamSlice')

// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        iceCream: iceCreamReducer
    },
    // middleware: (getDefautMiddleWare) => getDefautMiddleWare().concat(logger)
})

module.exports = store 