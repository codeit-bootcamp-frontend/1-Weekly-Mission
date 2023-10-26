import '../../styles/cardlist.css';
import { Fragment } from 'react';
import { NoDiscriptMsg } from '../../constants/default';
import TimeFlow from '../../utils/TimeFlow.js';
import defaultImg from '../../assets/images/no-Image.svg';
import kebabIcon from '../../assets/images/kebab.svg';
import starIcon from '../../assets/images/star.svg';

function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function Card({ imageSource, image_source, title, description, createdAt, url, created_at }) {
  return (
    <a className="card" href={url} target="_blank" rel="noopener noreferrer">
      <div className="card_imgbox">
        <img className="star_icon" src={starIcon} alt="즐겨찾기 아이콘" />
        <img className="card_img" src={imageSource || image_source || defaultImg} alt="카드 이미지" />
      </div>
      <div className="text">
        <div className="time_kebab_wrapper">
          <TimeFlow createdAt={createdAt || created_at} />
          <img src={kebabIcon} alt="kebab" />
        </div>
        {title && <div className="title">{title}</div>}
        <div className="description">{description || NoDiscriptMsg}</div>
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
