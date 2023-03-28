import React from 'react';
import {observer} from "mobx-react-lite";
import todo from "./store/todo";

const Todo = observer(() => {
    console.log('render')
    return (
        <div>
            <button onClick={() => todo.fetchTodos()}>fetch todos</button>
            {todo.todos.map(t =>
                <div key={t.id} className="todo">
                    <input type="checkbox" checked={t.completed} onChange={() => todo.completeTodo(t.id)}/>
                    {t.title}
                    <button onClick={() => todo.removeTodo(t.id)}>X</button>
                </div>
            )}
        </div>
    );
});

export default Todo;