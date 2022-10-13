import React, {useEffect, useState} from 'react';
import {useGetUsersQuery} from "features/api/userSlice";
import {useNavigate} from "react-router-dom"
import {useIndexedDB} from 'react-indexed-db';
import UserSummaryCard from "components/UserSummaryCard/UserSummaryCard";
import './users.style.scss'
import UsersIcon from "styles/icons/UsersIcon";
import UsersWithLoansIcon from "styles/icons/UsersWithLoansIcon";
import ActiveUsersIcon from "styles/icons/ActiveUsersIcon";
import UsersWithSavingsIcon from "styles/icons/UsersWithSavingsIcon";
import UsersTable from "components/UsersTable/UsersTable";
import moment from "moment";
import {IUser} from "helpers/models/user";


const Users = () => {
    const { data:users, isLoading, isSuccess } = useGetUsersQuery();
    const db = useIndexedDB('users');
    const [userData, setUserData] = useState([] as IUser[])



    const loadToDb = () => {
        users?.forEach((user) => {
            const createdAt = moment(user.createdAt).format('MMM Do YYYY, h:mm a')
            db.add({ ...user, createdAt }).then(
                (event:number) => {},
                error => {}
            );
        })
    }

    //Mock in absence of real data
    const usersSummaryData = [
        {
            title: 'users',
            icon: <UsersIcon />,
            value: '2,453'
        },
        {
            title: 'active users',
            icon: <ActiveUsersIcon />,
            value: '2,453'
        },
        {
            title: 'users with loan',
            icon: <UsersWithLoansIcon />,
            value: '12,453'
        },
        {
            title: 'users with savings',
            icon: <UsersWithSavingsIcon />,
            value: '102,453'
        }
    ]

    useEffect(() => {
        loadToDb()
        db.getAll().then((personsFromDB:IUser[]) => {
            setUserData(personsFromDB);
        });
    }, [isSuccess])




    return (
        <div>
            <h1 className={'users__header'}>Users</h1>

            <div className={'user__summary__grid'}>
                {usersSummaryData.map((summary, idx) => <UserSummaryCard key={idx} title={summary.title} value={summary.value} icon={summary.icon}/> ) }
            </div>


            {/*Todo: Fix filter bug*/}
            {/*<Filter />*/}
            {isLoading && <h3>Loading...</h3>}
            {isSuccess && <UsersTable users={userData!}  />}
            {/*{users?.map((user:any) => (*/}
            {/*    <div key={user.id}>*/}
            {/*        <h1>{user.userName}</h1>*/}
            {/*        <p>{user.email}</p>*/}
            {/*        <button onClick={() => navigate(`users/${user.id}`)}>View</button>*/}
            {/*    </div>*/}
            {/*))}*/}
        </div>
    );
};

export default Users;