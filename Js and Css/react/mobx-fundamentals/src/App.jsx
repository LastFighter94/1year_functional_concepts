import React from 'react';
import Counter from "./Counter"
import './App.css';
import Todo from "./Todo";

const App = () => {
    return (
        <div className='app'>
            <Counter/>
            <Todo/>
            <Todo/>
        </div>
    );
};

export default App;