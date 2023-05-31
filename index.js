const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;

console.log("INITIAL STATES:", store.getState());

const subscription = store.subscribe(() => {
    console.log("Updates State:", store.getState())
})
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());

subscription();