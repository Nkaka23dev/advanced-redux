const Redux = require("redux");

const createStore = Redux.createStore;
const combineReducers = Redux.combineReducers;
const bindActionCreators = Redux.bindActionCreators; 

const ADD_USER = "user"
const ADD_TASK = "task"

const initialState = {
    users: [
        { id: 1, name: "Victor" },
        { id: 2, name: "Frank" },
    ],
    tasks: [
        { title: "loremipsum dollar sit amet" },
        { title: "order more energy drinks" },
    ]
}
const addUser = (user) => (
    {
        type: ADD_USER,
        payload: user
    }
)
const addTask = (task) => (
    {
        type: ADD_TASK,
        payload: task
    }
)
const userReducer = (state = initialState.users, action) => {
    if (action.type === ADD_USER) {
        return [...state, action.payload]
    }
    return state;
}
const tasksReducer = (state = initialState.tasks, action) => {
    if (action.type === ADD_TASK) {
        return [...state, action.payload]
    }
    return state;
}
const reducer = combineReducers({ users: userReducer, tasks: tasksReducer });
const store = createStore(reducer);
const subscribe = () => console.log("SUBSCRIBED STATE", store.getState())
store.subscribe(subscribe); 

const actions = bindActionCreators({ addUser, addTask }, store.dispatch)

actions.addUser({ id: 3, name: "Dalto" });
actions.addTask({ id: 4, name: "Christella" });
console.log("CURRENT STATE PRESENT IN OUR STORE", store.getState())


