import React, { useContext, useState } from 'react';
import { AccountContext } from '../contexts/AccountContext';
import logoImg from '../img/png/Linkbrary.png'
import './header.css';
import { isLocation } from '../utils/location';


const Header = () => {
    const {account, userErrorMessage} = useContext(AccountContext);
    const {name, email, image_source: profileImageSource} = account;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const mobileWidth = 390;
    
    window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
    })

    return (
        <header style={{position: isLocation() ? "static" : "sticky"}}>
             <div className="inner">
                <h1>
                    <a href="/"><img src={logoImg} alt="logo"/></a>
                </h1>
                <div className="header-login">
                    {!account ? <button type='button'>로그인</button> :
                    <><img className="profile_logo" src={profileImageSource} alt={name} />
                    {windowWidth > mobileWidth ? <span className="profile_id">{email && email}</span> : null}</>}
                    {userErrorMessage && <span>{userErrorMessage.message}</span>}
                </div>
            </div>
        </header>
    );
};

export default Header;