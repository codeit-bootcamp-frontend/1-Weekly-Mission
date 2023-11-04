import React from 'react';
import './dialogInput.css';

export default function DialogInput({ children }) {
  return (
    <input className="dialog-input" value={children} placeholder="내용 입력" />
  );
}
