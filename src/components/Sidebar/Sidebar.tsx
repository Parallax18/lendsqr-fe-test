import React from 'react';
import {sidebarData} from "./sidebarData";
import './sidebar.style.scss';
import './sidebar.style.mobile.scss'
import {Link} from "react-router-dom";
import BriefCaseIcon from "styles/icons/BriefCaseIcon";
import HomeIcon from "styles/icons/HomeIcon";

const Sidebar = () => {
    return (
        <div className={'sidebar'}>
            <div  className={'sidebar__item'}>
                <BriefCaseIcon />
                <Link to={'/'} className={'sidebar__item__text'}>Switch Organization</Link>
            </div>
            <div  className={'sidebar__item'}>
                <HomeIcon />
                <Link to={'/'} className={'sidebar__item__text'}>Dashboard</Link>
            </div>
            {sidebarData.map((data, idx) => (
                <div key={idx}>
                    <p className={'sidebar__title'}>{data.title.toUpperCase()}</p>
                    {data.items.map((i, idx) => (
                        <div key={idx} className={'sidebar__item'}>
                            <i.icon />
                            <Link to={i.path} className={'sidebar__item__text'}>{i.text}</Link>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Sidebar;