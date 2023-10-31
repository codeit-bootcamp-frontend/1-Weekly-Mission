import React from 'react';
import './sortButton.css';

export default function SortButton({ isClicked = false, text, onClick }) {
  return (
    <button
      type="submit"
      className={isClicked ? 'sort-button clicked' : 'sort-button'}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
