import React, {useEffect} from 'react';
import {useGetUsersQuery} from "features/api/userSlice";
import {useNavigate} from "react-router-dom"
import Filter from "components/Filter";
import {useIndexedDB} from 'react-indexed-db';


const Index = () => {
    const { data:users, isLoading, isSuccess } = useGetUsersQuery();
    const navigate = useNavigate();
    const db = useIndexedDB('users');

    const loadToDb = () => {
        users?.forEach((user) => {
            db.add({ ...user }).then(
                (event:number) => {},
                error => {
                    // console.log(error);
                }
            );
        })
    }

    useEffect(() => {
        loadToDb()
    }, [isSuccess])




    return (
        <div>
            <h1>Users</h1>
            {/*Todo: Fix filter bug*/}
            <Filter />
            {isLoading && <h3>Loading...</h3>}
            {users?.map((user:any) => (
                <div key={user.id}>
                    <h1>{user.userName}</h1>
                    <p>{user.email}</p>
                    <button onClick={() => navigate(`users/${user.id}`)}>View</button>
                </div>
            ))}
        </div>
    );
};

export default Index;