import React from 'react';
import closeImg from '../img/svg/close.svg';
import './edit.css';

const Edit = () => {
    return (
        <div className='edit'>
            <div className='edit-wrap'>
                <img src={closeImg} alt='닫기버튼'/>
                <h2>폴더 이름 변경</h2>
                <input value={'유용한 팁'}/>
                <button type='button'>변경하기</button>
            </div>
        </div>
    );
};

export default Edit;