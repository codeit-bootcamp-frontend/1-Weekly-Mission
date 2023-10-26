import React from 'react';
import './addLinkInput.css';
import linkIcon from '../../../assets/folder/link.svg';

export default function AddLinkInput() {
  return (
    <form>
      <label htmlFor="add-link" className="add-link-input-container">
        <img src={linkIcon} alt="link-icon" className="add-link-icon" />
        <input
          name="add-link"
          placeholder="링크를 추가해 보세요"
          className="add-link-input"
        />
      </label>
    </form>
  );
}
