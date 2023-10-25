import { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png'
import '../css/header.css'
import { getUser } from './api';

function Header() {
    const [email, setEmail] = useState('');
    const [profileImg, setProfileImg] = useState('');

    useEffect(()=>{
        const handleUser = async()=>{
            const{ email,profileImageSource } = await getUser();
            setEmail(email);
            setProfileImg(profileImageSource);
        }
        handleUser();
    },[]); 

    return (
        <div className='nav'>
            <a href="index.html"><img src={logo} alt='logo' width="133px" height="24px" /></a>
            <div className='account'>
                <img src={profileImg} alt='profileImg'  className='account-img'/>
                {email}
            </div>
            {/* <a href="/signin.html" className='link'>
                로그인
            </a> */}
        </div>
    );
}

export default Header;