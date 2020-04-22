import { combineReducers, createStore, applyMiddleware } from "redux";
import mainReducer from "./main-reducer";
import filtersReducer from "./filter-reducer"
import thunkMiddleware from "redux-thunk";



const reducers = combineReducers({
    mainReducer,
    filtersReducer
});


const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store;

window.store = store