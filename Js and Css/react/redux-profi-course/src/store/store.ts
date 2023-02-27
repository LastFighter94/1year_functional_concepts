import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./reducers/UserSlice";
import {postAPI} from "../services/PostService";

// в redux-toolkit необязательно использовать combineReducers для объединения reducers - но можно оствить и так
const rootReducer = combineReducers({
    userReducer,
    [postAPI.reducerPath]: postAPI.reducer
})

// внутри нее будет конфигурировать наше redux хранилище
// без использования toolkit для создания store мы использовали функцию createStore
// в данном случае мы используем функцию configureStore

// когда мы используем redux toolkit у нас нет нужды подключать инструменты разработчика
// для отладки ки также нет нужны подключать redux-thunk middleware поскольку все это
// уже идет "из коробки"
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(postAPI.middleware)
        }
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>

export type AppDispatch = AppStore['dispatch']
// определив тип dispatch мы не сможем dispatch те actions, которые мы не определили