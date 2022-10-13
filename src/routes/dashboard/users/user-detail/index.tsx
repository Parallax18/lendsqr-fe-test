import React, {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom'
import {useGetSingleUserQuery} from "features/api/userSlice";
import BackArrow from "styles/icons/BackArrow";
import './userdetail.style.scss'
import UserDetailsTopCard from "components/UserDetailsTopCard/UserDetailsTopCard";
import UserDetailSection from "components/UserDetailSection/UserDetailSection";

const Index = () => {
    const { id } = useParams()
    const { data: User, isLoading, isSuccess } = useGetSingleUserQuery(id!);
    const [userData, setUserData] = useState({
        instagram: '',
        facebook: '',
        twitter: '',
        address: "",
        id: "",
        ids: "",
        lastActiveDate: "",
        orgName: "",
        userName: "",
        level: '', duration: '',
        monthlyIncome: [''],
        employmentStatus: '',  loanRepayment: '', officeEmail: '', sector: '',
        bvn: '',
        firstName: '',
        lastName: '',
        gender: '',
        avatar: '',
        email: '',
        phoneNumber: '',
        accountNumber: '',
        accountBalance: '',
        guarantorAddress: '',
        guarantorFirstname: '',
        guarantorLastname: '',
        guarantorPhone: '',
        guarantorGender: ''
    });

    useEffect(() => {
        //@ts-ignore
        if(isSuccess){
            const {profile: {bvn, firstName, lastName, gender, avatar}, email, phoneNumber, accountNumber, accountBalance} = User!;
            const{education: {level, duration, employmentStatus, monthlyIncome, loanRepayment, officeEmail, sector}} = User!;
            const {socials: {instagram, facebook, twitter}} = User!
            const {guarantor: {address: guarantorAddress, gender: guarantorGender, firstName:guarantorFirstname, lastName: guarantorLastname, phoneNumber: guarantorPhone }} = User!
            setUserData({
                guarantorGender,
                guarantorPhone,
                guarantorAddress,
                guarantorFirstname,
                guarantorLastname,
                monthlyIncome,
                instagram,
                facebook,
                twitter,
                address: "",
                id: "",
                ids: "",
                lastActiveDate: "",
                orgName: "",
                userName: "",
                level, duration, employmentStatus,  loanRepayment, officeEmail, sector,
                bvn,
                firstName,
                lastName,
                gender,
                avatar,
                email,
                phoneNumber,
                accountNumber,
                accountBalance
            })
        }
        console.log(User)

      }, [isSuccess])




     const personalInformationData = [
        {
            title: 'Full Name',
            info: `${userData.firstName} ${userData.lastName}`
        },
        {
            title: 'Phone Number',
            info: userData.phoneNumber
        },
        {
            title: 'Email Address',
            info: userData.email
        },
        {
            title: 'bvn',
            info: userData.bvn
        },
        {
            title: 'gender',
            info: userData.gender
        },
        {
            title: 'Marital status',
            info: 'Single',
        },
        {
            title: 'Children',
            info: 'None'
        },
        {
            title: 'Type of residence',
            info: 'Apartment'
        }
    ]
    const educationAndEmployment = [
        {
            title: 'level of education',
            info: userData.level
        },
        {
            title: 'Employment status',
            info: userData.employmentStatus
        },
        {
            title: 'sector of employment',
            info: userData.sector
        },
        {
            title: 'Duration of employment',
            info: userData.duration
        },
        {
            title: 'office email',
            info: userData.officeEmail
        },
        {
            title: 'Monthly income',
            info:  userData.monthlyIncome.join(' - ')
        },
        {
            title: 'Loan Repayment',
            info: userData.loanRepayment
        }
    ]
    const socialData = [
        {
            title: 'facebook',
            info: userData.facebook
        },
        {
            title: 'instagram',
            info: userData.instagram
        },
        {
            title: 'twitter',
            info: userData.twitter
        }
    ]
    const guarantorData = [
        {
            title: 'Full name',
            info: `${userData.guarantorFirstname} ${userData.guarantorLastname}`
        },
        {
            title: 'Phone number',
            info: userData.guarantorPhone
        },
        {
            title: 'Email address',
            info: 'debby@gmail.com'
        },
        {
            title: 'Relationship',
            info: userData.guarantorGender.toLowerCase() === 'male' ? 'Brother' : 'Sister',
        }
    ]

    //Todo: handle error page for manual url input for ids that don't exit!

    return (
        <div>
            <div className={'userdetail__headsection'}>
                <div>
                    <Link className={'userdetail__headsection-link'} to={'/dashboard/users'}>
                        <BackArrow />
                        <span>Back to users</span>
                    </Link>
                </div>

                <div className={'userdetail__headsection-bottom'}>
                    <h1 className={'users__header'}>User Details</h1>

                    <div className={'userdetail__headsection-buttons-wrapper'}>
                        <button className={'userdetail__headsection-button-blacklist'}>BLACKLIST USER</button>
                        <button className={'userdetail__headsection-button-activate'}>ACTIVATE USER</button>
                    </div>
                </div>
            </div>
            {isLoading && <h3>Loading...</h3>}

            {isSuccess && (
                <>
                    {/*@ts-ignore*/}
                    <UserDetailsTopCard firstname={userData.firstName} lastname={userData.lastName} accountbalance={userData.accountBalance} accountnumber={userData.accountNumber} bvn={userData.bvn} avatar={userData.avatar}
                />

                    <main className={'userdetailbottomcard'}>
                    <UserDetailSection
                    header={'Personal Information'}
                    details={personalInformationData}
                    />
                    <UserDetailSection
                    header={'Education and Employment'}
                    details={educationAndEmployment}
                    />
                    <UserDetailSection
                        header={'Socials'}
                        details={socialData}
                    />
                    <UserDetailSection header={'Guarantor'} details={guarantorData} />
                    <UserDetailSection header={'Next of kin'} details={guarantorData} />
                    </main>
                </>
            )}
        </div>
    );
};

export default Index;