const redux = require('redux')

const createStore = redux.createStore;

const INCREMENT = 'add'
const DECREMENT = 'remove'

const initialState = {
    cakes: 10,
    candies: 2
}

const increment = (amount) => {
    return {
        TYPE: INCREMENT,
        payload: amount
    }
}
const decrement = () => {
    return (
        {
            TYPE: DECREMENT
        }
    )
}
const reducer = (state = initialState, action) => {
    return ""
}

const store = createStore(reducer);
// console.log(redux)
// console.log(store)