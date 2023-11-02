import React from 'react';
import closeImg from '../img/svg/close.svg';
import kakaoIcon from '../img/svg/kakaoIcon.svg';
import facebookIcon from '../img/svg/facebookIcon.svg';
import linkIcon from '../img/svg/linkIcon.svg';
import './shareFolder.css';

const ShareFolder = () => {
    return (
        <div className='share-folder'>
            <div className='share-folder-wrap'>
                <img className='close-btn' src={closeImg} alt='닫기버튼'/>
                <h2>폴더 공유</h2>
                <h4>폴더명</h4>
                <ul className='link-copy'>
                    <li>
                        <div className='icon-border kakaoIcon'>
                            <img src={kakaoIcon} alt='카카오아이콘'/>
                        </div>
                        <div className='icon-name'>카카오톡</div>
                    </li>
                    <li>
                        <div className='icon-border facebookIcon'>
                            <img src={facebookIcon} alt='페이스북아이콘'/>
                        </div>
                        <div className='icon-name'>페이스북</div>
                    </li>
                    <li>
                        <div className='icon-border linkIcon'>
                            <img src={linkIcon} alt='링크아이콘'/>
                        </div>
                        <div className='icon-name'>링크 복사</div> 
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ShareFolder;