import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom'
import * as yup from "yup";

interface IFormInputs {
    email: string
    password: number
}

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

const Index = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: IFormInputs) => {
        console.log(data)
        navigate('/dashboard')
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("email")} type={'email'} placeholder={'Email'} />
            <p>{errors.email?.message}</p>

            <input {...register("password")} type={'password'} placeholder={'Password'} />
            <p>{errors.password?.message}</p>

            <input type="submit" />
        </form>
    );
}

export default Index
