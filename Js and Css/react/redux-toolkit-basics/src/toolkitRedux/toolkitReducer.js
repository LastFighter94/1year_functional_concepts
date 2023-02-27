import {createAction, createReducer} from "@reduxjs/toolkit";

const initialState = {
    count: 0,
    todos: ['one todo', 'two todo', 'three todo']
}

export const increment = createAction('INCREMENT')
export const decrement = createAction('DECREMENT')

// export default createReducer(initialState, {
//     [increment]: function (state){
//         state.count = state.count + 1
//     },
//     [decrement]: function (state){
//         state.count = state.count - 1
//     },
// })

// https://redux-toolkit.js.org/api/createReducer внизу более современный пример

export default createReducer(initialState, builder => {
    builder
        .addCase(increment, (state, action) => { state.count = state.count + 1 })
        .addCase(decrement, (state, action) => { state.count = state.count - 1 } )
})

console.log(decrement)