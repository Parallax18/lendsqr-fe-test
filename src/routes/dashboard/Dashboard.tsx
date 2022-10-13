import React, {useState} from 'react';
import {Outlet, useLocation} from "react-router-dom";
import Sidebar from "components/Sidebar/Sidebar";
import './dashboard.style.scss'
import TopBar from "components/TopBar/TopBar";
import {useAppSelector} from "app/hooks";


const Dashboard = () => {
    const uiState = useAppSelector(state => state.ui)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const location = useLocation();

    window.addEventListener('resize', () => setWindowWidth(window.innerWidth))

    return (
        <div>
            <TopBar/>
            <main className={'dashboard__wrapper'}>
                {(windowWidth > 500) &&<Sidebar/>}
                {uiState.sidebarOpen  &&  <Sidebar/>}
                <section className={'dashboard__outlet'}>
                    <Outlet />
                </section>

                {location.pathname === '/dashboard' && <div className={'dashboard__outlet'}>
                    <img alt={'error 404'} className={'notfound-img'}
                         src={'https://img.freepik.com/free-vector/feeling-sorry-concept-illustration_114360-3718.jpg?w=2000'}/>
                    <h2>Nothing to to show here navigate to Users</h2>
                </div>}
            </main>
        </div>
    );
};

export default Dashboard;