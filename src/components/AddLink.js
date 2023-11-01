import React from 'react';
import linkImg from '../img/svg/link.svg';

const AddLink = () => {
    return (
        <div className='add-link'>
            <img src={linkImg} alt="링크추가이미지"/>
            <input type='text' placeholder='링크를 추가해 보세요'/>
            <button type='button'>추가하기</button>
        </div>
    );
};

export default AddLink;