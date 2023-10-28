import linkImg from './img/link.svg';
import './css/FolderHeader.css';

export default function FolderHeader() {
  return (
    <div className="folder-header-container">
      <div className="folder-header-wrapper">
        <div className="folder-header-div">
          <img
            src={linkImg}
            alt="linkImg"
            style={{ width: '20px', height: '20px' }}
          />
          <input
            className="folder-header-input"
            placeholder="링크를 추가해 보세요."
          />
        </div>
        <button className="folder-header-button">추가하기</button>
      </div>
    </div>
  );
}
