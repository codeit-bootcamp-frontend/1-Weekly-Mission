import { useRef } from 'react';
import './css/Modal.css';
import xClose from './img/Xclose.svg';

export default function FolderDeleteModal({
  handleClick,
  value = '링크 삭제',
  title,
  cardLink,
}) {
  const back = useRef();

  if (value === '폴더 추가' || title === '전체') {
    title = '내용 입력';
  }

  const backClick = (e) => {
    if (e.target === back.current) handleClick();
  };

  return (
    <div className="modal-background" ref={back} onClick={backClick}>
      <div className="modal-wrapper">
        <div className="modal-delete-header">
          <div className="modal-header">{value}</div>
          <div className="modal-link-url">
            {value === '링크 삭제' ? cardLink : title}
          </div>
        </div>
        <div className="modal-main">
          <button className="modal-red-button">삭제하기</button>
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
