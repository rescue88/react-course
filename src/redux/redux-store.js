import dialoguesReducer from "./dialoguesReducer";
import profileReducer from "./profileReducer";
import usersReducer from "./usersReducer";
const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
    usersPage: usersReducer,
});

let store = createStore(reducers);
window.store = store;

export default store;