import React from 'react';
import closeImg from '../img/svg/close.svg';
import './deleteLink.css';

const DeleteLink = () => {
    return (
        <div className='delete-link'>
            <div className='delete-link-wrap'>
                <img src={closeImg} alt='닫기버튼'/>
                <h2>링크 삭제</h2>
                <h4>링크</h4>
                <button type='button'>삭제하기</button>
            </div>
        </div>
    );
};

export default DeleteLink;