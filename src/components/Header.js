import React from 'react';
import '../css/header.css';
import logoImg from '../img/png/Linkbrary.png'





const Header = ({account}) => {
      const {name, email, profileImageSource} = account;
    return (
        <header>
             <div className="inner">
                <h1>
                    <a href="/"><img src={logoImg} alt="logo"/></a>
                </h1>
                <div className="header-login">
                    {!account ? <button type='button'>로그인</button> :
                    <><img className="profile_logo" src={profileImageSource} alt={name} />
                    <span className="profile_id">{email}</span></>}
                </div>
            </div>
        </header>
    );
};

export default Header;