import React from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router";
import About from "../pages/About";
import Error from "../pages/Error";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import Login from "../pages/Login";

const AppRouter = () => {
    const isAuth = false;

    return (
        <div>
        {isAuth
            ?
            <Routes>
                <Route path='/about' element={<About/>}/>
                <Route path="/error" element={<Error />} />
                <Route exact path='/posts' element={<Posts/>}/>
                <Route exact path="/posts/:id" element={<PostIdPage />} />
                <Route path="/*" element={<Posts/>} />
            </Routes>
            :
            <Routes>
                <Route path='/about' element={<About/>}/>
                <Route path="/error" element={<Error />} />
                <Route path="/*" element={<Login/>} />
            </Routes>
        }
        </div>

        // <Routes>
        //     <Route path='/about' element={<About/>}/>
        //     <Route path="/error" element={<Error />} />
        //     <Route exact path='/posts' element={<Posts/>}/>
        //     <Route exact path="/posts/:id" element={<PostIdPage />} />
        //     <Route path="/*" element={<Navigate to="/error" replace />} />
        // </Routes>

        // не получилось сделать так, чтобы заработало
        // <BrowserRouter>
        //     {privateRoutes.map(route =>
        //         <Route
        //             key={route.path}
        //             element={route.element}
        //             path={route.path}
        //             exact={route.exact}
        //         />
        //     )}
        //     {publicRoutes.map(route =>
        //         <Route
        //             key={route.path}
        //             element={route.component}
        //             path={route.path}
        //             exact={route.exact}
        //         />
        //     )}
        //     <Route path="/*" element={<Navigate to="/error" replace />} />
        // </BrowserRouter>
    );
};

export default AppRouter;