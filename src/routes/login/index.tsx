import React from 'react';
import LoginForm from "components/LoginForm";

const Index = () => {
    return (
        <div>
            {/*Image*/}
            <div></div>
            {/*Form*/}
            <div>
                <div>
                    <h1>Welcome</h1>
                    <p>Enter details to login</p>
                </div>
                <LoginForm />
            </div>
        </div>
    );
};

export default Index;