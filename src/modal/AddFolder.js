import React from 'react';
import closeImg from '../img/svg/close.svg';
import './addFolder.css';

const AddFolder = () => {
    return (
        <div className='add-folder'>
            <div className='add-folder-wrap'>
                <img src={closeImg} alt='닫기버튼'/>
                <h2>폴더 추가</h2>
                <input placeholder='내용 입력'/>
                <button type='button'>추가하기</button>
            </div>
        </div>
    );
};

export default AddFolder;