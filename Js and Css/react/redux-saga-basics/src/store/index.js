import {applyMiddleware, combineReducers, createStore} from "redux";
import countReducer from "./countReducer";
import userReducer from "./userReducer";
import createSagaMiddleware from "redux-saga"
import {rootWatcher} from "../saga";

const sagaMiddleWare = createSagaMiddleware()

const rootReducer = combineReducers({
    countReducer,
    userReducer
} )

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare))

// вызов run должен происходить только после вызова applyMiddleware
sagaMiddleWare.run(rootWatcher)