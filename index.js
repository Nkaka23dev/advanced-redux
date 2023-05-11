const redux = require('redux')

const BUY_CAKE = 'BUY_CAKE';

const createStore = redux.createStore;

const initialState = {
    numberOfCake: 10
}
const buyCake = () => {
    return {
        type: BUY_CAKE,
        info: "Cakes are made of milk and flour"
    }
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numberOfCake: state.numberOfCake - 1
            }
        default: return state
    }
}
const store = createStore(reducer);

console.log(store.getState())

store.subscribe(() => console.log("Updated State", store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())



