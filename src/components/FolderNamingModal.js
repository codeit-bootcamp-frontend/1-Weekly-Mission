import { useRef } from 'react';
import './css/Modal.css';
import xClose from './img/Xclose.svg';

export default function FolderNamingModal({ handleClick }) {
  const back = useRef();

  const handleCloseClick = () => {
    handleClick();
  };
  const backClick = (e) => {
    if (e.target === back.current) handleClick();
  };
  return (
    <div className="modal-background" ref={back} onClick={backClick}>
      <div className="modal-wrapper">
        <div className="modal-header">폴더 이름 변경</div>
        <div className="modal-main">
          <input className="modal-input" />
          <button className="modal-blue-button">변경하기</button>
        </div>
        <img
          src={xClose}
          className="closeImg"
          alt="닫기 버튼"
          onClick={handleCloseClick}
        />
      </div>
    </div>
  );
}
