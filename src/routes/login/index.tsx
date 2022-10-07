import React from 'react';
import {Link} from "react-router-dom";

const Index = () => {
    return (
        <div>
            <h1>LOGIN</h1>
            <Link to={'dashboard'}>Login</Link>
        </div>
    );
};

export default Index;