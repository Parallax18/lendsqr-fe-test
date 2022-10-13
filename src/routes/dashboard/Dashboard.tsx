import React from 'react';
import {Outlet} from "react-router-dom";
import Sidebar from "components/Sidebar/Sidebar";
import './dashboard.style.scss'
import TopBar from "components/TopBar/TopBar";
import {useAppSelector} from "app/hooks";

const Dashboard = () => {
    const uiState = useAppSelector(state => state.ui)
    return (
        <div>
            <TopBar/>
            <main className={'dashboard__wrapper'}>
                { uiState.sidebarOpen &&  <Sidebar /> }
                <section className={'dashboard__outlet'}>
                    <Outlet />
                </section>
                {/*<Link to={'/'}>Logout</Link>*/}
                {/*<Link to={'users'}>Users</Link>*/}
            </main>
        </div>
    );
};

export default Dashboard;