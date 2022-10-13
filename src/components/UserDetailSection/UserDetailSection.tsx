import React from 'react';
import './userdetailsection.style.scss'

interface IDetailSectionProps {
    header: string,
    details: {title: string, info: string}[]
}

const UserDetailSection = ({header, details}: IDetailSectionProps) => {
    return (
        <section className={'userdetailsection'}>
            <p className={'userdetailsection__header'}>{header}</p>

            <div className={'details'}>
                {details.map((item) => (
                    <div>
                        <p className={'detail__title'}>{item.title.toUpperCase()}</p>
                        <p className={'detail__info'}>{item.info}</p>
                    </div>
                ))}


            </div>
        </section>
    );
};

export default UserDetailSection;