import '../../styles/cardlist.css';
import { Fragment } from 'react';
import TimeFlow from '../../utils/TimeFlow.js';
import defaultImg from '../../assets/images/no-Image.svg';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function Card({ imageSource, image_source, title, description, createdAt, url, created_at }) {
  return (
    <a className="card" href={url} target="_blank" rel="noopener noreferrer">
      <div className="card_imgbox">
        <img className="card_img" src={imageSource || image_source || defaultImg} alt="카드 이미지" />
      </div>
      <div className="text">
        <TimeFlow createdAt={createdAt || created_at} />
        {title && <div className="title">{title}</div>}
        {description ? <div className="description">{description}</div> : <div>링크 설명이 없어요 💦</div>}
        <div className="createAt">{formatDate(createdAt || created_at)}</div>
      </div>
    </a>
  );
}

function CardList({ folder = null, linksData = null }) {
  let linkArr = [];

  if (folder) {
    const { folder: folderData } = folder;
    const { links } = folderData;
    linkArr = links;
  }

  if (linksData) linkArr = linksData.data;

  return (
    <div className="card_list">
      {linkArr.map((link) => (
        <Fragment key={link.id}>
          <Card {...link} />
        </Fragment>
      ))}
    </div>
  );
}

export default CardList;
