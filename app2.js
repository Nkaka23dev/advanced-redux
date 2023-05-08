const redux = require("redux");

const createStore = redux.createStore;


const initialState = {
    numberOfCake: 10,
    candies: 1
}

const INCREMENT = "increase"
const DECREMENT = "decrease"

const increase = () => {
    return {
        type: INCREMENT,
    }
}
const deduct = (amount) => {
    return {
        type: DECREMENT,
        payload: amount
    }
}
const reducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        return {
            ...state,
            candies: state.candies + 1
        }
    }
    if (action.type === DECREMENT) {
        return {
            ...state,
            numberOfCake: state.numberOfCake - action.payload
        }
    }
    return state
}
const store = createStore(reducer)
console.log("INITIAL STATES:", store.getState())
store.subscribe(() => console.log("UPDATED STATE: ", store.getState()))
store.dispatch(increase());
store.dispatch(deduct(5));
