const redux = require("redux");
const thunk = require("redux-thunk").default;

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const axios = require("axios");

const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const USER_FETCH_REQUESTED = "USER_FETCH_REQUESTED";
const USER_FETCH_SUCCESS = "USER_FETCH_SUCCESS";
const USER_FETCH_FAILED = "USER_FETCH_FAILED";

function usersRequested() {
  return {
    type: USER_FETCH_REQUESTED,
  };
}

function usersSuccess(users) {
  return {
    type: USER_FETCH_SUCCESS,
    payload: users,
  };
}

function userFailed(error) {
  return {
    type: USER_FETCH_FAILED,
    payload: error,
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_FETCH_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case USER_FETCH_SUCCESS:
      return {
        error: "",
        data: action.payload,
        loading: false,
      };
    case USER_FETCH_FAILED:
      return {
        data: [],
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(usersRequested());
    axios
      .get("https://jsonplaceholder.typicode.com/user")
      .then((response) => {
        const users = response.data.map((user) => user.id);
        dispatch(usersSuccess(users));
      })
      .catch((error) => {
        dispatch(userFailed(error.message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => console.log("data here====> ", store.getState()));

store.dispatch(fetchUsers());
