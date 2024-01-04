const store = require("../redux-toolkit/app/store");
const cakeActions = require("./features/cakeSlice").cakeActions;

const iceCreamActions = require("./features/iceCreamSlice").iceCreamActions;

const fetchUsers = require("./features/userSlice").fetchUsers;

console.log("INITIAL STATE: ", store.getState());

store.subscribe(() => {
  "STATE ON DISPATCH", console.log(store.getState());
});

store.dispatch(fetchUsers());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());

// store.dispatch(cakeActions.restocked(3));

// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());
// store.dispatch(iceCreamActions.ordered());

// store.dispatch(iceCreamActions.restoked(40));

// unsubscribe();
