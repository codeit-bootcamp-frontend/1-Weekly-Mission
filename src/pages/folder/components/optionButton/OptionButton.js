import React from 'react';
import './optionButton.css';

export default function OptionButton({ iconSrc, name, alt }) {
  return (
    <div className="option-icon-container">
      <img src={iconSrc} alt={alt} />
      <span>{name}</span>
    </div>
  );
}
