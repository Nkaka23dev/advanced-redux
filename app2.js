const redux = require('redux');

const createStore = redux.createStore;

const ADD = 'add';

const SUBSTRACT = 'substact';

const initialStates = {
    numberOfcakes: 10,
    candies: 2
}
const increment = (amount) => {
    return {
        type: ADD,
        payload: amount
    }
}
const decrement = () => {
    return {
        type: SUBSTRACT,
    }
}
const reducer = (state = initialStates, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                candies: state.candies + action.payload
            }
        case SUBSTRACT:
            return {
                ...state,
                numberOfcakes: state.numberOfcakes - 1
            }
        default:
            return state
    }
}
const store = createStore(reducer);
store.subscribe(() => { console.log("UPDATED STATES: ", store.getState()) })
console.log("INITIAL STATES, THAT IS TO SAY AT START", store.getState())
store.dispatch(decrement())
store.dispatch(decrement())
store.dispatch(decrement())
store.dispatch(decrement())
store.dispatch(increment(5))
store.dispatch(increment(5))
store.dispatch(increment(5))
store.dispatch(increment(5))


