import React, {useEffect} from 'react';
import {useGetUsersQuery} from "features/api/userSlice";
import {useNavigate} from "react-router-dom"
import Filter from "components/Filter";
import {useIndexedDB} from 'react-indexed-db';


const Index = () => {
    const { data: Users, isLoading, isSuccess } = useGetUsersQuery();
    const navigate = useNavigate();
    const db = useIndexedDB('users');

    const loadToDb = () => {
        Users?.forEach((user) => {
            db.add({ ...user }).then(
                (event:number) => {
                    // console.log('ID Generated: ', event);
                },
                error => {
                    // console.log(error);
                }
            );
        })
    }

    useEffect(() => {
        loadToDb()
        console.log(db)
    }, [isSuccess])




    return (
        <div>
            <h1>Users</h1>
            <Filter />
            {/*{allUsers.map((user:any, index:number) => (*/}
            {/*    <span key={index}>{user.user_name}</span>*/}
            {/*))}*/}
            {isLoading && <h3>Loading...</h3>}
            {Users?.map((user:any) => (
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