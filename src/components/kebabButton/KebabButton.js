import React from 'react';
import './kebabButton.css';
import kebabIcon from '../../assets/common/kebab.svg';
import Popover from '../popover/Popover';

export default function KebabButton({ onClick, isPopoverOpen }) {
  return (
    <div className="kebab-container">
      <button type="button" className="kebab-button" onClick={onClick}>
        <img src={kebabIcon} alt="kebab-icon" className="kebab-icon" />
      </button>
      {isPopoverOpen && <Popover />}
    </div>
  );
}
