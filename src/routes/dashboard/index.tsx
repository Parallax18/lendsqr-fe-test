import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Index = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <Outlet />
            <Link to={'/'}>Logout</Link>
            <Link to={'users'}>Users</Link>
        </div>
    );
};

export default Index;