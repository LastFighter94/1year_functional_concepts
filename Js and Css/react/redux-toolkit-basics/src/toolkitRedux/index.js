import {combineReducers, configureStore} from "@reduxjs/toolkit";
import toolkitSlice from "./toolkitSlice";
// import toolkitReducer from "./toolkitReducer";

const rootReducer = combineReducers({
    toolkit: toolkitSlice,
    // toolkit: toolkitReducer
})

export const store = configureStore({
    reducer: rootReducer
})
