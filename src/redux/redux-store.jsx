import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import mainReducer from "./main-reducer";
import filtersReducer from "./filter-reducer"
import thunkMiddleware from "redux-thunk";



const reducers = combineReducers({
    mainReducer,
    filtersReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


export default store;

window.store = store 