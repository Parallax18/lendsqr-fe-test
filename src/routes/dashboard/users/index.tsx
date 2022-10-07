import React from 'react';
import {useGetUsersQuery} from "features/api/userSlice";
import { useNavigate } from "react-router-dom"

const Index = () => {
    const { data: Users, isLoading } = useGetUsersQuery();
    const navigate = useNavigate()

    return (
        <div>
            <h1>Users</h1>
            {isLoading && <h3>Loading...</h3>}
            {Users?.map((user:any) => (
                <div>
                    <h1>{user.userName}</h1>
                    <p>{user.email}</p>
                    <button onClick={() => navigate(`users/${user.id}`)}>View</button>
                </div>
            ))}
        </div>
    );
};

export default Index;