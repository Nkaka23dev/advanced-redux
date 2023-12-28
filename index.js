const redux = require("redux");
const createStore = redux.createStore;
const bindActionCreator = redux.bindActionCreators;

const ORDER_CAKE = "ORDER_CAKE";
const CAKE_RESTORECKED = "CAKE_RESTORECKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

const initialState = {
  numberOfCake: 10,
  Icecream: 20,
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

function orderIceCream(qty = 1) {
  return {
    type: ICECREAM_ORDERED,
    payload: qty,
  };
}

function resTockIceCream(qty = 1) {
  return {
    type: ICECREAM_RESTOCKED,
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
    case ICECREAM_ORDERED:
      return {
        ...state,
        Icecream: state.Icecream - action.payload,
      };
    case ICECREAM_RESTOCKED:
      return {
        ...state,
        Icecream: state.Icecream + action.payload,
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

const actions = bindActionCreator(
  { orderCake, restockCake, orderIceCream, resTockIceCream },
  store.dispatch
);
actions.orderCake();
actions.orderCake();
actions.orderCake();

actions.restockCake(3);

actions.orderIceCream(4);
actions.resTockIceCream(5);

unsubscribe();
