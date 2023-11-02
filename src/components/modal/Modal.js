import React from 'react';
import './modal.css';
import { createPortal } from 'react-dom';

export default function Modal({ children, onClose }) {
  const portalElement = document.getElementById('modal');

  return createPortal(
    <div className="modal" onClick={onClose} role="none">
      <div
        role="none"
        className="modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    portalElement,
  );
}
