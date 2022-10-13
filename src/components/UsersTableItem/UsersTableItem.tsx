import React from 'react';
import UsersStatusPill from "components/UsersStatusPill/UsersStatusPill";
import MoreIcon from "styles/icons/MoreIcon";
import './usertableitem.style.scss'
import {useNavigate} from "react-router-dom";

interface IUserTableProps {
    id: string,
    organization: string,
    name: string,
    email: string,
    phone: string,
    date: string,
    status: string
}

const UsersTableItem = ({id, organization, name, email, phone, date, status,}:IUserTableProps) => {
    const navigate = useNavigate()
    return (
        <div className={'tableitem'} onClick={() => navigate(`users/${id}`)}>
            <p className={'tableitem__text'}>{organization}</p>
            <p className={'tableitem__text'}>{name}</p>
            <p className={'tableitem__text'}>{email}</p>
            <p className={'tableitem__text'}>{phone}</p>
            <p className={'tableitem__text'}>{date}</p>
            <UsersStatusPill status={status} />
            <MoreIcon />
        </div>
    );
};

export default UsersTableItem;