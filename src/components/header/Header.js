import React from 'react';
import './header.css';

export default function Header({ folderInfo }) {
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
