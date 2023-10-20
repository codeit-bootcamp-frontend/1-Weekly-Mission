import React from 'react';
import '../css/header.css';

const Header = () => {
    return (
        <header>
             <div className="inner">
                <h1>
                    <a href="/"><img src="img/png/Linkbrary.png" alt="logo"/></a>
                </h1>
                <div className="header-login">
                    <a href="./signin.html">로그인</a>
                </div>
            </div>
        </header>
    );
};

export default Header;