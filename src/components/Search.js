import React from 'react';
import searchImg from '../img/svg/Search.svg'

const Search = () => {
    return (
        <div className="section-title section-title-second">
            <div className='search-inner-box'>
                <img src={searchImg}/>
                <input placeholder='링크를 검색해보세요'/>
            </div>
        </div>
    );
};

export default Search;