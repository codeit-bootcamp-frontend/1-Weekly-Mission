import React from 'react';
import './header.css';

export default function Header({ folderInfo }) {
  // folderInfo를 구조분해 해서 사용하고 싶은데, 구조분해 할 때 Uncaught TypeError: Cannot read properties of null (reading 'folder')
  // 타입에러가 발생해서 구조분해를 못하는 상황입니다. 어떻게 처리할 수 있을까요?
  // folderInfo에 데이터가 없는지 확인하기 위해서 항상 저렇게 옵셔널 체이닝을 달아줘야 할까요? 아니면 다른방법이 있을까요
  return (
    <header className="header">
      <div className="header-user-info-box">
        <img
          src={folderInfo?.folder.owner.profileImageSource}
          alt="profile"
          className="header-profile-image"
        />
        <span className="header-user-name">
          {folderInfo?.folder.owner.name}
        </span>
      </div>
      <span className="header-folder-name">{folderInfo?.folder.name}</span>
    </header>
  );
}
