import { noDiscriptMsg } from 'constants/default';
import { timeFlow, formatDate } from 'utils/timeFlow.js';
import defaultImg from 'assets/images/no-Image.svg';
import kebabIcon from 'assets/images/kebab.svg';
import starIcon from 'assets/images/star.svg';

function Card({ imageSource, image_source, title, description, createdAt, url, created_at }) {
  return (
    <a className="card" href={url} target="_blank" rel="noopener noreferrer">
      <div className="card_imgbox">
        <img className="star_icon" src={starIcon} alt="즐겨찾기 아이콘" />
        <img className="card_img" src={imageSource || image_source || defaultImg} alt="카드 이미지" />
      </div>
      <div className="text">
        <div className="time_kebab_wrapper">
          <div className="timediff">{timeFlow(createdAt || created_at)}</div>
          <img src={kebabIcon} alt="kebab" />
        </div>
        {title && <div className="title">{title}</div>}
        <div className="description">{description || noDiscriptMsg}</div>
        <div className="createAt">{formatDate(createdAt || created_at)}</div>
      </div>
    </a>
  );
}

export default Card;
