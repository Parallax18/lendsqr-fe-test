import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom'
import * as yup from "yup";
import {useAppDispatch} from "app/hooks";
import {authenticateUser} from "features/api/authSlice";
import {IAppUser} from "helpers/models/app-user";
import Button from "components/Button/Button";
import './loginForm.style.scss'

const schema = yup.object({
    email: yup.string().email('Must be a valid email').required('Please enter your email address'),
    password: yup
        .string()
        .required('Please Enter your password')
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
}).required();

const LoginForm = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm<IAppUser>({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: IAppUser) => {
        dispatch(authenticateUser(data))
        navigate('/dashboard')
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={'input__group'}>
                <div className={'input__wrapper'}>
                    <input className={'input__field'}  {...register("email")} type={'email'} placeholder={'Email'} />
                </div>
                <p className={'input__group--error-message'}>{errors.email?.message}</p>

                <div className={'input__wrapper'}>
                    <input className={'input__field'} {...register("password")} type={'password'} placeholder={'Password'} />
                    {/*<button>show</button>*/}
                </div>
                <p className={'input__group--error-message'}>{errors.password?.message}</p>

                <a href={'#'} className={'input__group--link'}>FORGOT PASSWORD?</a>
            </div>
            
            <Button type={'submit'} text={'LOG IN'} />

        </form>
    );
}

export default LoginForm
