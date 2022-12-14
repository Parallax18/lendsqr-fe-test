import React, {useState} from 'react';
import {IUser} from "helpers/models/user";
import UsersTableItem from "components/UsersTableItem/UsersTableItem";
import './userstable.scss'
import FilterIcon from "styles/icons/FilterIcon";
import Filter from "components/Filter/Filter";

interface IUsersTableProps {
    users: IUser[]
}

const tableHeadData = ['oraginzation', 'username', 'email', 'phone number', 'date joined', 'status']

const UsersTable = ({users}:IUsersTableProps) => {
    console.log("Check", {users})
    const [toggleModal, setToggleModal] = useState(false);
    return (
        <main className={'table'}>
            { toggleModal && <Filter /> }
            <div className={'table__head'}>
                {tableHeadData.map((item, idx) => (
                    <div onClick={() => setToggleModal(!toggleModal)} key={idx} className={'table__head__item'}>
                        <p>{item.toUpperCase()}</p>
                        <FilterIcon />
                    </div>
                ))}
            </div>

            <div className={'table__body'}>
                {users.map((user) => (
                    <UsersTableItem key={user.id} id={user.id} organization={user.orgName} name={user.userName} email={user.email} phone={user.phoneNumber} date={user.createdAt} status={'Active'} />
                ))}
            </div>
        </main>
    );
};

export default UsersTable;