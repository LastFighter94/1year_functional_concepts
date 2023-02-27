import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import App from './App-before-toolkitslice';
import {Provider} from "react-redux";
// import {store} from "./vanilaRedux";
import {store} from "./toolkitRedux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
