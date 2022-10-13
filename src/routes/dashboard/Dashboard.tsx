import React from 'react';
import {Link, Outlet} from "react-router-dom";
import Sidebar from "components/Sidebar/Sidebar";
import './dashboard.style.scss'
import TopBar from "components/TopBar/TopBar";

const Dashboard = () => {
    return (
        <div>
            <TopBar />
            <main className={'dashboard__wrapper'}>
                <Sidebar />
                <section className={'dashboard__outlet'}>
                    <Outlet />
                </section>
                <Link to={'/'}>Logout</Link>
                <Link to={'users'}>Users</Link>
            </main>
        </div>
    );
};

export default Dashboard;