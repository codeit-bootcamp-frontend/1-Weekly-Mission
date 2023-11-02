import React from 'react';
import './modal.css';

export default function Modal({ children, onClose }) {
  return (
    <button type="button" className="modal" onClick={onClose}>
      <button
        type="button"
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </button>
    </button>
  );
}
