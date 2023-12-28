const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreator = redux.bindActionCreators;

const ORDER_CAKE = "ORDER_CAKE";
const CAKE_RESTORECKED = "CAKE_RESTORECKED";

const initialState = {
  numberOfCake: 10,
};

function orderCake() {
  return {
    type: ORDER_CAKE,
    quantity: 10,
  };
}
function restockCake(qty) {
  return {
    type: CAKE_RESTORECKED,
    payload: qty,
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_CAKE:
      return {
        ...state,
        numberOfCake: (state.numberOfCake -= 1),
      };
    case CAKE_RESTORECKED:
      return {
        ...state,
        numberOfCake: state.numberOfCake + action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated store", store.getState());
});
// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(orderCake());

// store.dispatch(restockCake(3));

const actions = bindActionCreator({ orderCake, restockCake }, store.dispatch);
actions.orderCake();
actions.orderCake();
actions.orderCake();

actions.restockCake(3);

unsubscribe();
