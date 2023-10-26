import React from 'react';
import addImg from '../../img/svg/add.svg';
import shareImg from '../../img/svg/share.svg';
import penImg from '../../img/svg/pen.svg';
import deleteImg from '../../img/svg/delete.svg';

const UserFolder = () => {
    return (
        <div className='user-folder'>
            <div className='folder-lists'>
                <ul>
                    <li>전체</li>
                    <li>⭐️즐겨찾기</li>
                    <li>코딩 팁</li>
                    <li>채용 사이트</li>
                    <li>유용한 글</li>
                    <li>나만의 장소</li>
                </ul>
                <h4><span>폴더 추가</span><img src={addImg} alt="추가이미지"/></h4>
            </div>
            <div className='select-folder'>
                <h2>유용한 글</h2>
                <ul>
                    <li>
                        <img src={shareImg} alt='공유이미지'/>
                        <span>공유</span>
                    </li>
                    <li>
                        <img src={penImg} alt='공유이미지'/>
                        <span>이름변경</span>
                    </li>
                    <li>
                        <img src={deleteImg} alt='공유이미지'/>
                        <span>삭제</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UserFolder;