import React from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <Link to="/users">Users</Link>
                <Link to="/todos">Todos</Link>
            </div>
            <Routes>
                <Route path="/users" element={<UsersPage/>}/>
                <Route path="/todos" element={<TodosPage/>}/>
                <Route path="/users/:id" element={<UserItemPage/>}/>
                <Route path="/todos/:id" element={<TodoItemPage/>}/>
                <Route path="/" element={<TodosPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;