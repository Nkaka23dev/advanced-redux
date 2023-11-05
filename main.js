const redux = require("redux");
const createStore = redux.legacy_createStore
const axios = require('axios')
const reduxThunk = require('redux-thunk').default
const applyMiddleWare = redux.applyMiddleware

const initialState = {
    loading: false,
    users: [],
    errors: ''
}

const FETCH_USERS_REQUESTED = 'FETCH_USERS_REQUESTED';
const FETCH_USERS_SUCCEEDED = 'FETCH_USERS_SUCCEEDED';
const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED'

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUESTED
    }
}
const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCEEDED,
        payload: users
    }
}
const fetchUsersFailed = (error) => {
    return {
        type: FETCH_USERS_FAILED,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUESTED:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCEEDED:
            return {
                users: action.payload,
                loading: false,
                error: ''
            }
        case FETCH_USERS_FAILED:
            return {
                users: [],
                error: action.payload,
                loading: false
            }
    }
}

function fetchUsers() {
    return function (dispatch) {
        dispatch(fetchUsersRequest())
        axios
            .get('https://jsonplaceholder.typicode.com/userss')
            .then((response) => {
                const users = response.data.map(value => value.id)
                dispatch(fetchUsersSuccess(users))
            })
            .catch((error) => {
                dispatch(fetchUsersFailed(error.message))
            })
    }
}

const store = createStore(reducer, applyMiddleWare(reduxThunk))
store.subscribe(() => { console.log(store.getState()) })
store.dispatch(fetchUsers())