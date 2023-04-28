const redux = require('redux')

const createStore = redux.createStore;

const initialState = {
    value: 0,
    cakes: 98
}

const INCREMENT = 'increment'
const ADD = 'ADD'

const incrementAction = {
    type: INCREMENT
}
const increment = () => {
    return {
        type: INCREMENT
    }
}
const add = (amount) => {
    return {
        type: ADD,
        payload: amount
    }
}
const reducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        return {
            ...state,
            value: state.value + 1
        }
    }
    if (action.type === ADD) {
        return {
            ...state,
            value: state.value + action.payload,
            cakes: state.cakes - action.payload
        }
    }
    return state
}
const store = createStore(reducer)
console.log("Initial State: ", store.getState());
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.dispatch(increment())
store.subscribe(() => { console.log("Updated State:", store.getState()) })
