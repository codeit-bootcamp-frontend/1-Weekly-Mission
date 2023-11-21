import React from 'react';
import './floatingButton.css';

export default function FloatingButton({ children, iconSrc }) {
  return (
    <button type="button" className="floating-button">
      <div className="floating-button-box">
        <p>{children}</p>
        <img src={iconSrc} alt="floating-icon" />
      </div>
    </button>
  );
}
