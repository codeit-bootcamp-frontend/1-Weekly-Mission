import React from 'react';
import closeImg from '../img/svg/close.svg';
import './deleteFolder.css';

const DeleteFolder = () => {
    return (
        <div className='delete-folder'>
            <div className='delete-folder-wrap'>
                <img src={closeImg} alt='닫기버튼'/>
                <h2>폴더 추가</h2>
                <h4>폴더명</h4>
                <button type='button'>삭제하기</button>
            </div>
        </div>
    );
};

export default DeleteFolder;