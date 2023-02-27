import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
// import Login from "../pages/Login";
// import Event from "../pages/Event";
import {privateRoutes, publicRoutes, RouteNames} from "../routes"
import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {
    const {isAuth} = useTypedSelector(state => state.auth)

    return (
        // auth ?
        //     <Routes>
        //         <Route path={RouteNames.LOGIN} element={<Login/>}/>
        //         <Route path={RouteNames.EVENT} element={<Event/>}/>
        //     </Routes>
        //     :
        //     <Routes>
        //         <Route path={RouteNames.EVENT} element={<Event/>}/>
        //         <Route path="*" element={<div>404 PAGE NOT FOUND</div>}/>
        //     </Routes>
        isAuth ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.component/>}
                        key={route.path}
                    ></Route>
                )}
                <Route path="/*" element={<Navigate to={RouteNames.EVENT} replace />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.component/>}
                        key={route.path}
                    ></Route>
                )}
                <Route path="/*" element={<Navigate to={RouteNames.LOGIN} replace />} />
            </Routes>
    );
};

export default AppRouter;