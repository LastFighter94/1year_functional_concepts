import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h2>Page Not Found</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos incidunt nam porro quo sed ullam!</p>

            <p>Go to the <Link to="/">HomePage</Link></p>
        </div>
    );
};

export default NotFound;