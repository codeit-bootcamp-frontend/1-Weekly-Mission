import { useState, useEffect } from 'react';
import search from './img/search.svg';
import { getUserFolder, getUserLinks } from '../api';
import styled from 'styled-components';
import './css/FolderMain.css';
import plusImg from './img/plus.svg';
import shareImg from './img/share.svg';
import penImg from './img/pen.svg';
import deleteImg from './img/delete.svg';
import FolderCard from './FolderCard';

const Button = styled.button`
  cursor: pointer;
  padding: 8px 12px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #6d6afe;
  background: #fff;
`;

export default function FolderMain() {
  const [folders, setFolders] = useState([]);
  const [links, setLinks] = useState([]);
  const [title, setTitle] = useState('전체');

  const handleLoad = async (id = '') => {
    const { data } = await getUserFolder();
    const links = await getUserLinks(id);
    console.log(data);
    setFolders(data);
    setLinks(links.data);
  };

  const handleFolderList = async (e) => {
    setTitle(e.target.textContent);
    const id = e.target.name;
    handleLoad(id);
  };

  useEffect(() => {
    handleLoad();
  }, []);

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
          <Button onClick={handleFolderList}>전체</Button>
          {folders.map((item) => (
            <Button name={item.id} key={item.id} onClick={handleFolderList}>
              {item.name}
            </Button>
          ))}
        </div>
        <div className="folder-plus">
          폴더추가
          <img src={plusImg} alt="plugImg" />
        </div>
      </div>
      <div className="useful-wrapper">
        <div className="useful">{title}</div>
        <div className="useful-img-div">
          <div className="useful-img">
            <img src={shareImg} alt="shareImg" />
            <span>공유</span>
          </div>
          <div className="useful-img">
            <img src={penImg} alt="penImg" />
            <span>이름 변경</span>
          </div>
          <div className="useful-img">
            <img src={deleteImg} alt="deleteImg" />
            <span>삭제</span>
          </div>
        </div>
      </div>
      <div className="main-content-wrapper">
        {links[0] ? (
          links.map((link) => <FolderCard key={link.id} item={link} />)
        ) : (
          <div className="no-link">저장된 링크가 없습니다.</div>
        )}
      </div>
    </div>
  );
}
