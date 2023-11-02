import React from 'react';
import closeImg from '../img/svg/close.svg';
import './addAtFolder.css';

const AddAtFolder = () => {
    const testArray = [{name:'코딩팁', lenght:'7개 링크'},
    {name:'채용사이트', lenght:'7개 링크'},
    {name:'유용한 글', lenght:'7개 링크'} ,
    {name: '나만의 장소', lenght:'7개 링크'}]

    return (
        <div className='add-at-folder'>
            <div className='add-at-folder-wrap'>
                <img src={closeImg} alt='닫기버튼'/>
                <h2>폴더에 추가</h2>
                <h4 className='folder-name'>링크 주소</h4>
                <ul>
                    {testArray.map(li => {
                        return <li>
                            <h3>{li.name}</h3>
                            <h4>{li.lenght}</h4>
                        </li>
                    })}
                </ul>
                <button type='button'>추가하기</button>
            </div>
        </div>
    );
};

export default AddAtFolder;