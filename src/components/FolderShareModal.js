import { useRef } from 'react';
import './css/Modal.css';
import xClose from './img/Xclose.svg';
import kakao from './img/kakao.svg';
import facebookImg from './img/facebookImg.svg';
import linkImg from './img/linkImg.svg';
export default function FolderShareModal({ handleClick, value, title }) {
  const back = useRef();
  const backClick = (e) => {
    if (e.target === back.current) handleClick();
  };
  return (
    <div className="modal-background" ref={back} onClick={backClick}>
      <div className="modal-wrapper">
        <div className="modal-header">폴더 공유</div>
        <div className="modal-link-url">{title}</div>
        <div className="modal-share-wrapper">
          <button className="modal-share-div">
            <img src={kakao} alt="카카오톡" />
            <div className="modal-share-name">카카오톡</div>
          </button>
          <button className="modal-share-div">
            <img src={facebookImg} alt="페이스북" />
            <div className="modal-share-name">페이스북</div>
          </button>
          <button className="modal-share-div">
            <img src={linkImg} alt="링크 복사" />
            <div className="modal-share-name">링크 복사</div>
          </button>
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
