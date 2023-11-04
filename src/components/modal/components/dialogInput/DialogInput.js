import React from 'react';
import './dialogInput.css';

export default function DialogInput({ value }) {
  return (
    <input className="dialog-input" value={value} placeholder="내용 입력" />
  );
}
