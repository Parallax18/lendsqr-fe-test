import {Link, useRouteError} from "react-router-dom";
import Button from "components/Button/Button";
import './error404.style.scss'

const Index = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className={'error-page'}>
            <img alt={'error 404'} className={'notfound-img'} src={'https://img.freepik.com/free-vector/feeling-sorry-concept-illustration_114360-3718.jpg?w=2000'}/>
            <div>
                <h1>Looks like your lost!</h1>
                <Link to={'/dashboard/users'}>
                    <Button type={'button'} text={'Go home'} />
                </Link>
            </div>

        </div>
    );
}

export default Index