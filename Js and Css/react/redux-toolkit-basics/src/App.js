import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, removeLastTodo, addTodo} from "./toolkitRedux/toolkitSlice";

// react thunk = пример отрабатывания в redux-toolkit
const asyncAddTodo = () => {
    return async dispatch => {
        setTimeout(() => {
            dispatch(addTodo('ASYNC TODO'))
        }, 2000)
    }
}

const App = () => {
  const count = useSelector(state => state.toolkit.count)
  const todos = useSelector(state => state.toolkit.todos)
  const dispatch = useDispatch()

    return (
        <div>
          <h1>Счетчик {count}</h1>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(removeLastTodo())}>Remove last todo</button>
          <button onClick={() => dispatch(addTodo(prompt()))}>Add todo</button>
          <button onClick={() => dispatch(asyncAddTodo())}>Add async todo</button>
          <ul>
            {todos.map(todo =>
              <li key={todo}>{todo}</li>
            )}
          </ul>
        </div>
    );
};

export default App;