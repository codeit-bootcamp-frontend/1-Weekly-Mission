import React, { useEffect, useRef, useState } from 'react';
import addImg from '../../img/svg/add.svg';
import shareImg from '../../img/svg/share.svg';
import penImg from '../../img/svg/pen.svg';
import deleteImg from '../../img/svg/delete.svg';
import {NavLink } from 'react-router-dom';

const activeStyle = {
    backgroundColor:"#6d6afe",
    color: "#ffffff"
}

const UserFolder = ({folders, folderId=9999}) => {
    const [titleName, setTitleName] = useState("")
    const titleRef = useRef({});
    const {current} = titleRef;
    const folderOption = [
        {title: "공유", image: shareImg},
        {title: "이름변경", image: penImg},
        {title: "삭제", image: deleteImg},
    ]

    useEffect(()=>{
        setTitleName(current[folderId]?.innerText);
    },[folderId])
    return (
        <div className='user-folder'>
            <div className='folder-lists'>
                <ul>
                    { folders?.map(folder => {
                        return <li key={folder.id} ref={(element) => titleRef.current[folder.id] = element}>
                            <NavLink to={folder.name !== "전체" ? `/folder/${folder.id}` : `/folder`} end 
                            style={({isActive}) => isActive ? activeStyle : {}}>{folder.name}</NavLink></li>
                    })}
                </ul>
                <h4><span>폴더 추가</span><img src={addImg} alt="추가이미지"/></h4>
            </div>
            <div className='select-folder'>
                <h2>{titleName}</h2>
                {titleName !== "전체" ? <ul>
                {folderOption.map(option => {
                    return <li>
                        <img src={option.image} alt={`${option.title}이미지`}/>
                        <span>{option.title}</span>
                    </li>
                })}
                </ul> : null} 
                
            </div>
        </div>
    );
};

export default UserFolder;