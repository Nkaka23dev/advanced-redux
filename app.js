const REDUX = require('redux');

const createStore = REDUX.createStore;
const combineReducers = REDUX.combineReducers;
const bindActionCreators = REDUX.bindActionCreators;

const initialState = {
    users: [
        { id: 1, name: "Eric Nkaka" },
        { id: 2, name: "Dunks Sky" }
    ],
    tasks: [
        { title: "This is the first added task in the store" },
        { title: "Hello  Eric Nkaka this is the second store" }
    ]
}

const ADD_USER = "Add User";

const ADD_TASK = "Add Task";

const addUser = (name) => {
    return {
        type: ADD_USER,
        payload: name
    }
}
const addTask = (title) => {
    return {
        type: ADD_TASK,
        payload: title
    }
}
const userReducer = (users = initialState.users, action) => {
    if (action.type === ADD_USER) {
        return [
            ...users,
            { id: Math.floor(Math.random() * 10), name: action.payload }]
    }
    return users
}

const taskReducer = (tasks = initialState.tasks, action) => {
    if (action.type === ADD_TASK) {
        return [
            ...tasks, action.payload]
    }
    return tasks
}

const reducer = combineReducers({ user: userReducer, task: taskReducer })
const store = createStore(reducer);
const action = bindActionCreators({ addUser, addTask }, store.dispatch);
REDUX.compose()
// store.dispatch(addUser("KWIZERA"))
// store.dispatch(addTask("KWIZERA"))
action.addUser("Munyana Christella")

console.log(store.getState())

const subscribe = () => console.log("subscribed state:", store.getState());
store.subscribe(subscribe);

