import React from 'react';
import LoginForm from "components/LoginForm/LoginForm";
import './login.style.scss'


const Login = () => {

    return (
        <div className={'loginscreen'}>
            {/*Image*/}
            <div className={'loginscreen__imagearea'}>
                <img className={"logo"} src={'/assets/images/lendsqr-logo.svg'}/>

                <img className={'loginscreen__img'} src={'/assets/images/login-img.svg'}/>
            </div>
            {/*Form*/}
            <div className={'loginscreen__formarea'}>
                <div className={'loginscreen__headingwrapper'} >
                    <h1 className={'loginscreen__header'}>Welcome!</h1>
                    <p className={'loginscreen__subheader'}>Enter details to login.</p>
                </div>
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;