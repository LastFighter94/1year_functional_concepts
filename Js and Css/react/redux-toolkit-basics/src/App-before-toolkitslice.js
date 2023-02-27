import React from 'react';
import {useDispatch, useSelector} from "react-redux";
// import {increment, decrement, removeLastTodo, addTodo} from "./vanilaRedux/mainReducer"
import {increment, decrement} from "./toolkitRedux/toolkitReducer"


const App = () => {
  // const count = useSelector(state => state.main.count)
  const count = useSelector(state => state.toolkit.count)
  // const todos = useSelector(state => state.main.todos)
  const dispatch = useDispatch()

    return (
        <div>
          <h1>Счетчик {count}</h1>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          {/*<button onClick={() => dispatch(removeLastTodo())}>Remove last todo</button>*/}
          {/*<button onClick={() => dispatch(addTodo(prompt()))}>Add todo</button>*/}
          <ul>
            {/*{todos.map(todo =>*/}
            {/*  <li key={todo}>{todo}</li>*/}
            {/*)}*/}
          </ul>
        </div>
    );
};

export default App;