import React from 'react';
import {Link, useLocation} from "react-router-dom";

const BreadCrumbs = () => {
    const location = useLocation()

    // /help/contact --> hel[ | contact

    let currentLink = ''

    const crumbs = location.pathname.split('/')
        .filter((crumb => crumb !== ''))
        .map(crumb => {
            currentLink += `/${crumb}`

            return (
                <div className="crumb" key={crumb}>
                    <Link to={currentLink}>{crumb}</Link>
                </div>
            )
        })

    return (
        <div className="breadcrumbs">
            {crumbs}
        </div>
    );
};

export default BreadCrumbs;