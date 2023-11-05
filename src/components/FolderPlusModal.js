import { useRef } from 'react';
import './css/Modal.css';
import xClose from './img/Xclose.svg';

export default function FolderPlusModal({ handleClick, title, value }) {
  const back = useRef();

  const backClick = (e) => {
    if (e.target === back.current) handleClick();
  };
  return (
    <div className="modal-background" ref={back} onClick={backClick}>
      <div className="modal-wrapper">
        <div className="modal-header">{value}</div>
        <div className="modal-main">
          <input
            className="modal-input"
            placeholder={value !== '이름 변경' ? '내용 입력' : title}
          />
          <button className="modal-blue-button">변경하기</button>
        </div>
        <img
          src={xClose}
          className="closeImg"
          alt="닫기 버튼"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
