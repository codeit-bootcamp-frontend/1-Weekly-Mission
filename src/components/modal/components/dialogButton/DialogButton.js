import React from 'react';
import './dialogButton.css';

export default function DialogButton({ children, isAddButton }) {
  return (
    <div className={isAddButton ? 'dialog-button add' : 'dialog-button delete'}>
      {children}
    </div>
  );
}
