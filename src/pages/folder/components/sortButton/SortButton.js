import React, { useState } from 'react';
import './sortButton.css';

export default function SortButton({ children, onClick }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleSortButtonClick = () => {
    onClick(children);
    setIsClicked(!isClicked);
  };

  return (
    <button
      type="button"
      className={isClicked ? 'sort-button clicked' : 'sort-button'}
      onClick={handleSortButtonClick}
    >
      {children}
    </button>
  );
}
