const redux = require("redux");
const createStore = redux.legacy_createStore
const bindActionCreators = redux.bindActionCreators



const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTORED = 'CAKE_RESTORED'
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTORED = 'ICECREAM_RESTORED'

const initialState = {
    numberOfCake: 10,
    icecream: 20
}
const orderCake = () => {
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
}
const restoreCake = (qnt = 1) => {
    return {
        type: CAKE_RESTORED,
        payload: qnt
    }
}

const orderIceCream = (qt = 1) => {
    return {
        type: ICECREAM_ORDERED,
        payload: qt
    }
}
const restoreIceCream = (qt = 1) => {
    return {
        type: ICECREAM_RESTORED,
        payload: qt
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCake: state.numberOfCake - 1
            }
        case CAKE_RESTORED:
            return {
                ...state,
                numberOfCake: state.numberOfCake + action.payload
            }
        case ICECREAM_ORDERED:
            return {
                ...state,
                icecream: state.icecream - action.payload
            }
        case ICECREAM_RESTORED:
            return {
                ...state,
                icecream: state.icecream + action.payload
            }
        default:
            return state
    }
}

const store = createStore(reducer);
console.log("Initial state", store.getState())
const unsubscribe = store.subscribe(() => console.log("UPDATED STATE", store.getState()))
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(orderCake())
// store.dispatch(restoreCake(5))
const actions = bindActionCreators({ orderCake, restoreCake, orderIceCream, restoreIceCream }, store.dispatch);
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restoreCake(3)

actions.orderIceCream();
actions.orderIceCream()
actions.restoreIceCream(2)
unsubscribe()  