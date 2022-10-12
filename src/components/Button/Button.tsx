import React from 'react';
import './button.style.scss'

interface ButtonProps {
    type:  "button" | "submit" | "reset" | undefined,
    text: string,
}

const Button = ({type, text}:ButtonProps) => {
    return (
        <>
            <button className={'button'} type={type}>{text.toUpperCase()}</button>
        </>
    );
};

export default Button;