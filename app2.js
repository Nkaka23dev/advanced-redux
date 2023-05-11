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
const actions = redux.bindActionCreators({ increment, decrement }, store.dispatch);
// const [incrementDispatch, decrementDispatch] = [increment, decrement].map((fn) => {
//     redux.compose(store.dispatch, fn)
// })
const subscribe = () => console.log("subscribed state:", store.getState());
store.subscribe(subscribe);

actions.decrement()
actions.decrement()
actions.decrement()
actions.decrement()
actions.increment(1000)
console.log("CURRENT STATE IS DISPLAYED RIGHT HERE", store.getState());




