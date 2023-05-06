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

    if (action.TYPE === INCREMENT) {
        return (
            {
                ...state,
                cakes: state.cakes + action.payload
            }
        )
    }
    if (action.TYPE === DECREMENT) {
        return {
            ...state,
            candies: state.candies - 1
        }
    }
    return state
}

const store = createStore(reducer);

console.log(store.dispatch(increment(6)))