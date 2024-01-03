const redux = require("redux");
const createStore = redux.createStore;
const produce = require("immer").produce;

const initialState = {
  name: "Eric Nkaka",
  address: {
    street: "143 Kigali st",
    city: "Nyarugenge",
    state: "Nyakabanda",
  },
};

const STREET_UPDATE = "STREET_UPDATE";

function updateStreet(street) {
  return {
    type: STREET_UPDATE,
    payload: street,
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STREET_UPDATE:
      /*** without immer updating state with immutability is as hard as below***/
      //   return {
      //     ...state,
      //     address: {
      //       ...state.address,
      //       street: action.payload,
      //     },
      //   };
      /**let us use immer and see what will happen**/
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = createStore(reducer);

const unsubscribe = store.subscribe(() =>
  console.log("These are store", store.getState())
);

console.log("Initial state", store.getState());

store.dispatch(updateStreet("Kicukiro 1555,kg"));

unsubscribe();
