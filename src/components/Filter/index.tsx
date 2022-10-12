import React, {ChangeEvent,  useState} from 'react';
import {useIndexedDB} from "react-indexed-db";
import {filterUsers} from "../../helpers/useFilter";


const Index = () => {
    const {getByIndex} = useIndexedDB('users');
    const [filterObject, setFilterObject] = useState({})

    const handleChange = (val:string, type:string) => {
        setFilterObject({...filterObject, [type] : val});
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
       filterUsers({filterObject, getByIndex}).then((persons) => {
        console.log("Na him be this ===>", persons)
       })
        e.preventDefault()
    }

    return (
        <div>
            <h2>Filter</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <div>
                        <label htmlFor={'orgName'}>Organization</label>
                        <input id={'orgName'} name={'organization'} type={'text'} placeholder={'Select'} onChange={(e:ChangeEvent<HTMLInputElement>) => {
                            handleChange(e.target.value, e.target.name)
                        }} />
                    </div>
                    {/*<p>{errors.email?.message}</p>*/}

                    <div>
                        <label htmlFor={'username'}>Username</label>
                        <input id={'username'} name={'name'} type={'text'} placeholder={'Username'} onChange={(e:ChangeEvent<HTMLInputElement>) => handleChange(e.target.value, e.target.name)} />
                    </div>
                    {/*<p>{errors.password?.message}</p>*/}

                    <div>
                        <label htmlFor={'email'}>Email</label>
                        <input id={'email'} name={'email'} type={'email'} placeholder={'Email'} onChange={(e:ChangeEvent<HTMLInputElement>) => handleChange(e.target.value, e.target.name)} />
                    </div>

                    <div>
                        <label htmlFor={'date'}>Date</label>
                        <input id={'date'} name={'date'} type={'text'} placeholder={'Date'} onChange={(e:ChangeEvent<HTMLInputElement>) => handleChange(e.target.value, e.target.name)} />
                    </div>

                    <div>
                        <label htmlFor={'phone'}>Phone</label>
                        <input id={'phone'} name={'phone'} type={'text'} placeholder={'Phone'} onChange={(e:ChangeEvent<HTMLInputElement>) => handleChange(e.target.value, e.target.name)} />
                    </div>

                    <div>
                        <label htmlFor={'status'}>Status</label>
                        <input id={'status'} name={'status'} type={'text'} placeholder={'Status'} onChange={(e:ChangeEvent<HTMLInputElement>) => handleChange(e.target.value, e.target.name)} />
                    </div>

                </div>

                <input type="submit" />
            </form>
        </div>
    );
};

export default Index;