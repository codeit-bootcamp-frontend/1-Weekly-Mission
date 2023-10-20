import React from 'react';
import '../css/main.css';
import Search from './Search';
import Cards from './Cards';

const Main = () => {
    return (
        <div className='main'>
            <div className="section-title section-title-first">
                <div className='section-title-inner'>
                    <div className='icon-wrap'>
                        <img src='img/svg/white.svg' alt='코드잇아이콘'/>
                    </div>
                    <h4>@코드잇</h4>
                    <h3>⭐️ 즐겨찾기</h3>
                </div>
            </div>
            <Search/>
            <Cards/>
        </div>
    );
};

export default Main;