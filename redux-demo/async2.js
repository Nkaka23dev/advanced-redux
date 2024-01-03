const redux = require("redux");
const createStore = redux.createStore;
const ReduxThunk = require("redux-thunk").default;
const applyMiddleWare = redux.applyMiddleware;
const axios = require("axios");

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const USERS_FETCHED_IN_PROGESS = "USERS_FETCHED_IN_PROGESS";
const USERS_FETCHED_SUCESS = "USERS_FETCHED_SUCESS";
const USER_FETCHED_ERROR = "USER_FETCHED_ERROR";

const userFetchInProgress = () => {
  return {
    type: USERS_FETCHED_IN_PROGESS,
  };
};
const userFetchSuccess = (data) => {
  return {
    type: USERS_FETCHED_SUCESS,
    payload: data,
  };
};
const userFetchError = (message) => {
  return {
    type: USER_FETCHED_ERROR,
    payload: message,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USERS_FETCHED_IN_PROGESS:
      return {
        ...state,
        loading: true,
      };
    case USERS_FETCHED_SUCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case USER_FETCHED_ERROR:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

const fetchUsers = () => (dispatch) => {
  dispatch(userFetchInProgress());
  axios
    .get("https://jsonplaceholder.typicode.com/userss")
    .then((response) => {
      const user = response.data.map((res) => res.id);
      dispatch(userFetchSuccess(user));
    })
    .catch((error) => {
      dispatch(userFetchError(error.message));
    });
};

const store = createStore(reducer, applyMiddleWare(ReduxThunk));

store.subscribe(() => {
  console.log("DATA BEFORE FETCH===>", store.getState());
});
store.dispatch(fetchUsers());
