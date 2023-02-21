import React from "react";
import './styles/App.css'
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </div>
    )
}

export default App;
