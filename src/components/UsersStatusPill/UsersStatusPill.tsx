import React from 'react';
import './usersstatuspill.scss'

interface IStatusPillProps {
    status: string
}



const UsersStatusPill = ({status}:IStatusPillProps) => {
    return (
        <div className={`statuspill ${status.toLowerCase()}`}>
            {status}
        </div>
    );
};

export default UsersStatusPill;