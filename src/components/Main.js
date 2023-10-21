import React from 'react';
import '../css/main.css';
import Search from './Search';
import Cards from './Cards';

const Main = ({account, personalfolder}) => {
    const {name, profileImageSource} = account;
    const {title} = personalfolder;
    return (
        <div className='main'>
            <div className="section-title section-title-first">
                <div className='section-title-inner'>
                    <div className='icon-wrap'>
                        <img src={profileImageSource} alt='코드잇아이콘'/>
                    </div>
                    <h4>@{name}</h4>
                    <h3>{title}</h3>
                </div>
            </div>
            <Search/>
            <Cards personalfolder={personalfolder}/>
        </div>
    );
};

export default Main;