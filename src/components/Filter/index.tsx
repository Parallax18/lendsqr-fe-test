import React, {ChangeEvent} from 'react';
import {useIndexedDB} from "react-indexed-db";


const Index = () => {
    const {getByIndex} = useIndexedDB('users');

    const searchDb = (val:string) => {
        console.log(val)
        getByIndex('user_name', val).then(personFromDB => {
            console.log("Na him be this ===>", personFromDB)
        });
    }

    return (
        <div>
            <h2>Filter</h2>
            <input placeholder={"username"}  onChange={(e:ChangeEvent<HTMLInputElement>) => searchDb(e.target.value)} />
            <input placeholder={"email"}/>
        </div>
    );
};

export default Index;