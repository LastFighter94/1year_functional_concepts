import "./App.css"
import CalcMode from "./components/CalcMode";
import React from "react";
import {observer} from "mobx-react-lite";
import CalcItems from "./components/CalcItems";
import CalcView from "./components/CalcView";

const App = observer (() => {
    return (
        <div className="wrapper">
            <CalcMode/>

            <div className="calc-content">
                <CalcItems/>
                <CalcView/>
            </div>
        </div>
    )
})

export default App
