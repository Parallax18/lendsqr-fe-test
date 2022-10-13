import React, {ChangeEvent,  useState} from 'react';
import {useIndexedDB} from "react-indexed-db";
import './filtermodal.scss'
import Button from "components/Button/Button";
import {filterUsersData } from "features/data/usersTableDataSlice";
import {useAppDispatch} from "app/hooks";


const Filter = () => {
    const {getByIndex} = useIndexedDB('users');
    const [filterObject, setFilterObject] = useState({});
    const dispatch = useAppDispatch();

    const handleChange = (val:string, type:string) => {
        setFilterObject({...filterObject, [type] : val});
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
       // filterUsers({filterObject, getByIndex}).then((persons) => {
       //  console.log("Na him be this ===>", persons)
       // })

            const indexNames: string[] = []
            // const group = Object.values(filterObject).filter(i => i !== '')

            for (const obj in filterObject){
                // @ts-ignore
                (filterObject[obj] === '') ? delete filterObject[obj] : indexNames.push(obj)
            }

            // indexNames.join('_')

            indexNames.forEach((idx) => {
                // @ts-ignore
                console.log(idx, filterObject[idx])
                // @ts-ignore
                getByIndex(idx, [filterObject[idx]]).then(personFromDB => {
                    console.log("Na him be this!!",personFromDB)
                    dispatch(filterUsersData(personFromDB))
                });
            })
        e.preventDefault()
    }

    return (
        <div className={'filtermodal'}>
            <form onSubmit={handleSubmit}>
                <div>
                    <div className={'filtermodal__input-wrapper'}>
                        <label className={'filtermodal__input-label'} htmlFor={'orgName'}>Organization</label>
                        <input className={'filtermodal__input'} id={'orgName'} name={'organization'} type={'text'} placeholder={'Select'} onChange={(e:ChangeEvent<HTMLInputElement>) => {
                            handleChange(e.target.value, e.target.name)
                        }} />
                    </div>
                    {/*<p>{errors.email?.message}</p>*/}

                    <div className={'filtermodal__input-wrapper'}>
                        <label className={'filtermodal__input-label'} htmlFor={'username'}>Username</label>
                        <input className={'filtermodal__input'} id={'username'} name={'name'} type={'text'} placeholder={'Username'} onChange={(e:ChangeEvent<HTMLInputElement>) => handleChange(e.target.value, e.target.name)} />
                    </div>
                    {/*<p>{errors.password?.message}</p>*/}

                    <div className={'filtermodal__input-wrapper'}>
                        <label className={'filtermodal__input-label'} htmlFor={'email'}>Email</label>
                        <input className={'filtermodal__input'} id={'email'} name={'email'} type={'email'} placeholder={'Email'} onChange={(e:ChangeEvent<HTMLInputElement>) => handleChange(e.target.value, e.target.name)} />
                    </div>

                    <div className={'filtermodal__input-wrapper'}>
                        <label className={'filtermodal__input-label'} htmlFor={'date'}>Date</label>
                        <input className={'filtermodal__input'} id={'date'} name={'date'} type={'text'} placeholder={'Date'} onChange={(e:ChangeEvent<HTMLInputElement>) => handleChange(e.target.value, e.target.name)} />
                    </div>

                    <div className={'filtermodal__input-wrapper'}>
                        <label className={'filtermodal__input-label'} htmlFor={'phone'}>Phone</label>
                        <input className={'filtermodal__input'} id={'phone'} name={'phone'} type={'text'} placeholder={'Phone'} onChange={(e:ChangeEvent<HTMLInputElement>) => handleChange(e.target.value, e.target.name)} />
                    </div>

                    <div className={'filtermodal__input-wrapper'}>
                        <label className={'filtermodal__input-label'} htmlFor={'status'}>Status</label>
                        <input className={'filtermodal__input'} id={'status'} name={'status'} type={'text'} placeholder={'Status'} onChange={(e:ChangeEvent<HTMLInputElement>) => handleChange(e.target.value, e.target.name)} />
                    </div>

                </div>
                <div className={'buttongroup'}>
                    <Button type={'button'} text={'Reset'} />
                    <Button type={'submit'} text={'Filter'} />
                </div>
            </form>
        </div>
    );
};

export default Filter;