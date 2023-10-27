import React from 'react';
import './sortButton.css';

export default function SortButton({ children }) {
  return (
    <button type="button" className="sort-button">
      {children}
    </button>
  );
}
