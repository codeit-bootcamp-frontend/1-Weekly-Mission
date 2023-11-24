import { useRef, useState, useCallback, useEffect } from 'react';
import './css/Modal.css';
import xClose from './img/Xclose.svg';
import { getData } from '../api';
import check from './img/check.svg';

export default function ToFolderPlusModal({ handleClick, cardLink }) {
  const [folders, setFolders] = useState([]);

  const handleLoad = useCallback(async () => {
    const { data } = await getData('users/1/folders');
    setFolders(data);
  }, []);

  const back = useRef();

  const backClick = (e) => {
    if (e.target === back.current) handleClick();
  };

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);
  return (
    <div className="modal-background" ref={back} onClick={backClick}>
      <div className="modal-wrapper">
        <div className="modal-delete-header">
          <div className="modal-header">폴더에 추가</div>
          <div className="modal-link-url">{cardLink}</div>
        </div>
        <div className="modal-folder">
          {folders.map((item) => (
            <div className="modal-folder-wrapper" key={item.id}>
              <div className="modal-div">
                <div name={item.id} className="modal-folder-div">
                  {item.name}
                </div>
                <div className="modal-link-cnt">{item.link.count}개 링크</div>
              </div>
              <div className="modal-link-check">
                <img src={check} alt="체크표시" />
              </div>
            </div>
          ))}
        </div>
        <div className="modal-main">
          <button className="modal-blue-button">추가하기</button>
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
