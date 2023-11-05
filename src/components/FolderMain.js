import { useState, useEffect, useCallback } from 'react';
import search from './img/search.svg';
import { getData } from '../api';
import styled from 'styled-components';
import './css/FolderMain.css';
import './css/Card.css';
import plusImg from './img/plus.svg';
import shareImg from './img/share.svg';
import penImg from './img/pen.svg';
import deleteImg from './img/delete.svg';
import FolderCard from './FolderCard';
import plus from './img/plus-white.svg';
import FolderPlusModal from './FolderPlusModal';
import FolderDeleteModal from './FolderDeleteModal';
import FolderShareModal from './FolderShareModal';

const Button = styled.button`
  cursor: pointer;
  padding: 8px 12px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #6d6afe;
  background: #fff;
  &:hover {
    color: white;
    background-color: #6d6afe;
  }
`;

const activeButton = {
  color: 'white',
  backgroundColor: '#6d6afe',
};

export default function FolderMain() {
  const [folders, setFolders] = useState([]);
  const [links, setLinks] = useState([]);
  const [title, setTitle] = useState('전체');
  const [onModal, setOnModal] = useState(false);
  const [onDeleteModal, setOnDeleteModal] = useState(false);
  const [onShareModal, setOnShareModal] = useState(false);
  const [value, setValue] = useState('');

  const handleLoad = useCallback(async (id = '') => {
    const { data } = await getData('users/1/folders');
    const link = await getData('users/1/links?folderId=', id);
    setFolders(data);
    setLinks(link.data);
  }, []);

  const handleFolder = async (id = '') => {
    const link = await getData('users/1/links?folderId=', id);
    setLinks(link.data);
  };

  let cnt = {};
  cnt = folders.map((item) => item.id);

  const handleFolderList = async (e) => {
    setTitle(e.target.textContent);
    const id = e.target.name;
    handleLoad(id);
  };

  const onClickModal = (e) => {
    try {
      setValue(e.target.textContent);
    } catch {}
    setOnModal(!onModal);
  };

  const onClickCloseModal = () => {
    setOnModal(!onModal);
  };

  const onClickDeleteCloseModal = () => {
    setOnDeleteModal(!onDeleteModal);
  };

  const onClickShareModal = () => {
    setOnShareModal(!onShareModal);
  };

  const onClickDeleteModal = (e) => {
    try {
      setValue(e.target.textContent);
    } catch {}
    setOnDeleteModal(!onDeleteModal);
  };

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);
  return (
    <div className="folder-container">
      <div className="folder-search">
        <img src={search} alt="search" />
        <input
          className="search-div"
          placeholder="링크를 검색해 보세요."
        ></input>
      </div>
      <div className="folder-wrapper">
        <div className="folder-div">
          <Button
            onClick={handleFolderList}
            style={title === '전체' ? activeButton : null}
          >
            전체
          </Button>
          {folders.map((item) => (
            <Button
              style={title === item.name ? activeButton : null}
              name={item.id}
              key={item.id}
              onClick={handleFolderList}
            >
              {item.name}
            </Button>
          ))}
        </div>
        <button
          className="folder-plus"
          onClick={onClickModal}
          value="폴더 추가"
        >
          <div>폴더추가</div>
          <img src={plusImg} alt="plugImg" />
        </button>
      </div>
      <button className="card-button">
        <div
          className="card-button-div"
          onClick={onClickModal}
          value="폴더 추가"
        >
          <div>폴더추가</div>
          <img src={plus} alt="plusImg" />
        </div>
      </button>
      <div className="useful-wrapper">
        <div className="useful">{title}</div>
        {title !== '전체' && (
          <div className="useful-img-div">
            <button
              className="useful-img"
              onClick={onClickShareModal}
              value="공유"
            >
              <img src={shareImg} alt="shareImg" />
              <span>공유</span>
            </button>
            <button
              className="useful-img"
              onClick={onClickModal}
              value="이름 변경"
            >
              <img src={penImg} alt="penImg" />
              <span>이름 변경</span>
            </button>
            <button
              className="useful-img"
              onClick={onClickDeleteModal}
              value="삭제"
            >
              <img src={deleteImg} alt="deleteImg" />
              <span>삭제</span>
            </button>
          </div>
        )}
      </div>
      <div className="main-content-wrapper">
        {links[0] &&
          links.map((link) => <FolderCard key={link.id} item={link} />)}
      </div>
      {!links[0] && <div className="no-link">저장된 링크가 없습니다.</div>}
      {onModal && (
        <FolderPlusModal
          handleClick={onClickCloseModal}
          title={title}
          value={value}
        />
      )}
      {onDeleteModal && (
        <FolderDeleteModal
          handleClick={onClickDeleteCloseModal}
          title={title}
          value={value}
        />
      )}
      {onShareModal && (
        <FolderShareModal
          handleClick={onClickShareModal}
          title={title}
          value={value}
        />
      )}
    </div>
  );
}
