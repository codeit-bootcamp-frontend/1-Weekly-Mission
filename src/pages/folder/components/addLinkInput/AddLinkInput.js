import React from 'react';
import './addLinkInput.css';
import linkIcon from '../../../../assets/folder/link.svg';

export default function addLinkInput() {
  return (
    <form className="add-link-input-container">
      <img src={linkIcon} alt="link-icon" className="add-link-icon" />
      <input
        name="add-link"
        placeholder="링크를 추가해 보세요"
        className="add-link-input"
      />
      <button type="submit" className="add-link-button">
        추가하기
      </button>
    </form>
  );
}
