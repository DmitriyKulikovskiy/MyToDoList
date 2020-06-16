import { combineReducers, createStore } from "redux";
import mainReducer from "./main-reducer";
import filtersReducer from "./filter-reducer"

const saveToLocalStorage = state => {
    try {
        let serializedState = JSON.stringify(state)
        localStorage.setItem('state', serializedState)
    } catch(e) {
        console.log(e)
    }
}

const loadFromLocalStorage = () => {
    try{
        let serializedState = localStorage.getItem('state')
        if(serializedState === null) return undefined
        return JSON.parse(serializedState)
    }catch(e) {
        console.log(e)
        return undefined
    }
}

const persistedState = loadFromLocalStorage()

const reducers = combineReducers({
    mainReducer,
    filtersReducer
});

const store = createStore(reducers,persistedState);

store.subscribe( () => saveToLocalStorage(store.getState()))

export default store;
