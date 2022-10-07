import React from 'react';
import { useParams } from 'react-router-dom'
import {useGetSingleUserQuery} from "features/api/userSlice";

const Index = () => {
    const { id } = useParams()
    const { data: User, isLoading } = useGetSingleUserQuery(id!);

    //Todo: handle error page for manual url input for ids that don't exit!

    return (
        <div>
            {isLoading && <h3>Loading...</h3>}
            <h1>{User?.userName}</h1>
        </div>
    );
};

export default Index;