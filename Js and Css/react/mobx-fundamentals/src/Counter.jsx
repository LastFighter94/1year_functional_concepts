import React from 'react';
import './App.css'
import counter from "./store/Counter";
import {observer} from "mobx-react-lite";

const Counter = observer(() => {
    return (
        <div className='counter'>
            {/*{"Count = " + counter.count}*/}
            {counter.total}
            <div className='btns'>
                <button onClick={() => counter.increment()} className='btn'>+</button>
                <button onClick={() => counter.decrement()} className='btn'>-</button>
            </div>
        </div>
    );
});

export default Counter;