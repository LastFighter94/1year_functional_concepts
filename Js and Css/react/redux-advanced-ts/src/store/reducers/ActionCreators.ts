// Самый базовый часто встречающийся case - это получение каких-то данных,
// Обработка ошибки и обработка загрузки этих данных
//
// Получение данных от сервера это асинхронный процесс, поэтому нужно делать
// Асинхронный action creator - по классике асинхронные actions создаются
// С помощью middleWare redux-thunk, и в redux-toolkit redux-thunk идет
// Уже под капотом и его вручную подключать не надо
//
// Для того чтобы этим функционалом пользоваться, мы из action creator а
// Не возвращаем сразу action, а мы возвращаем другую функцию, которая
// Аргументом принимает dispatch, и уже из этой функции мы будем
// Производить какие-то асинхронные действия

import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../../models/IUser";
import {userSlice} from "./UserSlice";
// import {usersFetching, usersFetchingError, usersFetchingSuccess} from "./UserSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(usersFetching())
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(usersFetchingSuccess(response.data))
//     } catch (e) {
//         // @ts-ignore
//         // dispatch(userSlice.actions.usersFetchingError(e.message))
//         dispatch(usersFetchingError(e.message))
//     }
// }

// мы обработали три сценария: загрузку, успешную загрузку и загрузку с ошибкой

// redux toolkit позволяет упростить обработку этих сценариев и давайте посмотрим как это реализовано
// для того чтобы использовать redux-thunk мы создавали функцию которая аргументом принимала dispatch и вызывала другую функцию

// createAsyncThunk надстройка!

// первым аргументом название этого асинхронного thunk
// вторым аргументом передаем сам callback внутри которого будем осуществлять какие-либо действия

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue("Error!")
        }
    }
)