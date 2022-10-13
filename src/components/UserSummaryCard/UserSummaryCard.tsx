import React from 'react';
import './userSummaryCard.style.scss'

export interface ISummaryCardProps {
    title: string,
    value: string,
    icon: JSX.Element
}

const UserSummaryCard = ({title, value, icon}:ISummaryCardProps) => {
    return (
        <div className={'usersummarycard'}>
            <div>
                <div className={`usersummarycard--icon-wrapper-${title.replace(/\s/g, '')}`}>
                    {icon}
                </div>
                <p className={'usersummarycard--label'}>{title.toUpperCase()}</p>
            </div>
            <h2 className={'usersummarycard--value'}>{value}</h2>
        </div>
    );
};

export default UserSummaryCard;