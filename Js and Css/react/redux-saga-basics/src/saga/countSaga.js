// асинхронные actions для работы со счетчиком

import {put, takeEvery} from "redux-saga/effects"
import {ASYNC_DECREMENT, ASYNC_INCREMENT, decrementCreator, incrementCreator} from "../store/countReducer";
import {FETCH_USERS} from "../store/userReducer";
// put это своего рода dispatch, который предназначен для асинхронных actions

const delay = (ms) => new Promise(res => setTimeout(res, ms))
// функция для искусственной задержки, обычный таймаут

function* incrementWorker(){
    // перед каким-либо асинхронным действием мы пишем yield
    yield delay(1000)
    yield put(incrementCreator()) // put не отработает до тех пор пока не отработает delay
}

function* decrementWorker(){
    yield delay(1000)
    yield put(decrementCreator())
}


export function* countWatcher(){
    yield takeEvery(ASYNC_INCREMENT, incrementWorker)
    yield takeEvery(ASYNC_DECREMENT, decrementWorker)
    // takeEvery первым параметром принимает тип action за которым необходимо следить,
    // вторым параметром worker - который должен отрабатывать, когда action с таким типом,
    // который мы передали первым параметром, будем "задиспатчен"
}