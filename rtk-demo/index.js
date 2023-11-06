const store = require('./app/store')
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const iceCreamActions = require('./features/iceCream/iceCreamSlice').iceCreamActions

console.log("INITIAL STATES", store.getState())
const Unsubscribe = store.subscribe(() => {
    console.log("Updated state", store.getState())
})

// const Unsubscribe = store.subscribe(() => { })

store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.ordered())
store.dispatch(cakeActions.restored(3))


store.dispatch(iceCreamActions.ordered(5))
store.dispatch(iceCreamActions.restored(1))

Unsubscribe()