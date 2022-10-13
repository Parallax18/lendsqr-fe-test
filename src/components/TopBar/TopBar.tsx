import React from 'react';
import SearchIcon from "styles/icons/SearchIcon";
import {Link} from "react-router-dom";
import './topbar.style.scss'
import NotificationBellIcon from "styles/icons/NotificationBellIcon";
import DropdownIcon from "styles/icons/DropdownIcon";
import {useAppDispatch} from "app/hooks";
import {toggleSidebar} from "features/ui/uiSlice";

const TopBar = () => {
    const dispatch = useAppDispatch();
    return (
        <nav className={'topbar'}>

            <div className={'topbar__left'}>
                <Link to={'/'}>
                    <img alt={'lendsqr logo'} className={'topbar__logo'} src={'/assets/images/lendsqr-logo.svg'}/>
                </Link>

                <div className={'topbar__searchfield'}>
                    <input placeholder={'Search for anything'} className={'topbar__searchfield__input'} />
                    <button className={'topbar__searchfield__button'}>
                        <SearchIcon />
                    </button>
                </div>
            </div>

            <div className={'topbar__right'}>
                <Link className={'topbar__right__docs__link'} to={'#'}>Docs</Link>
                <NotificationBellIcon />
                <div onClick={()=> dispatch(toggleSidebar())} className={'topbar__right__user'}>
                    <img alt={'profile picture'} className={'topbar__right__profileimg'} src={'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'} />
                    <p className={'username'}>Adedeji</p>
                    <DropdownIcon />
                </div>
            </div>

        </nav>
    );
};

export default TopBar;