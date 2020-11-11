import dialoguesReducer from "./dialoguesReducer";
import profileReducer from "./profileReducer";
const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    dialoguesPage: dialoguesReducer,
});

let store = createStore(reducers);

export default store;