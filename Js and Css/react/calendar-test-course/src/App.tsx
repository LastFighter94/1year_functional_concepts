import React, {FC, useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {Layout} from "antd";
import "./App.css"
import {useActions} from "./hooks/useActions";
import {IUser} from "./models/IUser";

const App:FC = () => {
    const {setUser, setIsAuth} = useActions()

    useEffect(() => {
        if(localStorage.getItem('auth')){
            setUser({username: localStorage.getItem('username' || '')} as IUser)
            setIsAuth(true)
        }
    }, [])

    return (
        <div>
            <Layout>
                <NavBar/>
                <Layout.Content>
                    <AppRouter/>
                </Layout.Content>
            </Layout>
        </div>
    );
};

export default App;