import React from 'react';
import {useGetUsersQuery} from "features/api/userSlice";

const Index = () => {
    const { data: Users, isLoading } = useGetUsersQuery()

    return (
        <div>
            <h1>Users</h1>
            {isLoading && <h3>Loading...</h3>}
            {Users?.map((user:any) => (
                <div>
                    <h1>{user.userName}</h1>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );
};

export default Index;