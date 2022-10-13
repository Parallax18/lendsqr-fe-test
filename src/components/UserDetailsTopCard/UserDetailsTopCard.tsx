import React from 'react';
import './userdetailstopcard.style.scss'
import FilledStarIcon from "styles/icons/FilledStarIcon";
import EmptyStarIcon from "styles/icons/EmptyStarIcon";

interface ITopCardProps {
    firstname: string,
    lastname: string,
    accountbalance: string,
    accountnumber: string,
    bvn: string,
    avatar: string
}

const UserDetailsTopCard = ({firstname, lastname, accountbalance, accountnumber, bvn, avatar}:ITopCardProps) => {
    return (
        <main className={'userdetailstopcard'}>
            <div className={'profile'}>
                <div className={'profile__details'}>
                    <img alt={'user avartar'} className={'profile__img'} src={avatar} />
                    <div>
                        <p className={'profile__name'}>{firstname} {lastname}</p>
                        <p className={'profile__userid'}>{accountnumber}</p>
                    </div>
                </div>

                <div className={'usertier'}>
                    <p>User's tier</p>
                    <div>
                        <FilledStarIcon />
                        <EmptyStarIcon />
                        <EmptyStarIcon />
                    </div>
                </div>

                <div>
                    <p className={'balance'}>&#8358; {accountbalance}</p>
                    <p className={'bankdetails'}>{bvn}/Providus Bank</p>
                </div>
            </div>
        </main>
    );
};

export default UserDetailsTopCard;